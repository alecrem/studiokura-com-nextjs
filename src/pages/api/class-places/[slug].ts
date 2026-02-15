import { type ClassPlaceErrorType, fetchClassPlace } from '@/utils/classPlace';
import type { NextApiRequest, NextApiResponse } from 'next';

type DebugPayload = {
  upstreamUrl: string;
  status: number;
  requestId: string;
  errorType?: ClassPlaceErrorType | 'missing-env' | 'memo-empty' | 'unknown';
};

type ClassPlaceResponse = {
  slug: string;
  topMemo: string | null;
  _debug?: DebugPayload;
};

const classPlacesApiUri = process.env.CLASS_PLACES_API_URI ?? '';
const isDebugEnabled = (req: NextApiRequest): boolean => {
  const value = req.query.debug;
  if (Array.isArray(value)) return value.includes('1');
  return value === '1';
};
const upstreamTimeoutMs = 10000;

const readRequestId = (req: NextApiRequest): string => {
  const requestIdHeader =
    req.headers['x-request-id'] ??
    req.headers['x-vercel-id'] ??
    req.headers['x-amzn-trace-id'];
  if (Array.isArray(requestIdHeader)) return requestIdHeader[0];
  if (requestIdHeader) return requestIdHeader;
  return 'unknown';
};

const mapErrorTypeToStatus = (
  errorType: ClassPlaceErrorType | 'missing-env' | 'memo-empty' | 'unknown'
): number => {
  if (errorType === 'notfound' || errorType === 'memo-empty') return 404;
  if (errorType === 'timeout') return 504;
  if (errorType === 'missing-env') return 500;
  return 502;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ClassPlaceResponse>
) => {
  const requestId = readRequestId(req);
  const debug = isDebugEnabled(req);

  if (req.method !== 'GET') {
    res.status(405).json({ slug: 'error', topMemo: null });
    return;
  }

  const slugParam = req.query.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  if (!slug) {
    res.status(400).json({ slug: 'error', topMemo: null });
    return;
  }

  if (!classPlacesApiUri) {
    const upstreamUrl = 'unknown';
    const errorType = 'missing-env' as const;
    console.error('[class-place-api] missing env', {
      slug,
      requestId,
      upstreamUrl,
      status: 500,
      errorType,
      envName: 'CLASS_PLACES_API_URI',
    });
    res.status(500).json({
      slug,
      topMemo: null,
      ...(debug && {
        _debug: {
          upstreamUrl,
          status: 500,
          requestId,
          errorType,
        },
      }),
    });
    return;
  }

  const result = await fetchClassPlace(slug, classPlacesApiUri, upstreamTimeoutMs);
  if (result.memo) {
    res.status(200).json({
      slug,
      topMemo: result.memo,
      ...(debug && {
        _debug: {
          upstreamUrl: result.endpoint,
          status: result.status,
          requestId,
        },
      }),
    });
    return;
  }

  const errorType = result.errorType ?? ('memo-empty' as const);
  const mappedStatus = mapErrorTypeToStatus(errorType);
  console.error('[class-place-api] upstream fetch failed', {
    slug,
    requestId,
    upstreamUrl: result.endpoint,
    status: result.status,
    errorType,
    error: result.error ?? 'memo missing',
  });

  res.status(mappedStatus).json({
    slug,
    topMemo: null,
    ...(debug && {
      _debug: {
        upstreamUrl: result.endpoint,
        status: result.status,
        requestId,
        errorType,
      },
    }),
  });
};

export default handler;
