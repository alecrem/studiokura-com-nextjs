import { type IncomingMessage } from 'http';

import { fetchClassPlace } from '@/utils/classPlace';

const classPlacesApiUri = process.env.CLASS_PLACES_API_URI ?? '';
const upstreamTimeoutMs = 10000;

const readRequestId = (req: IncomingMessage): string => {
  const requestIdHeader =
    req.headers['x-request-id'] ??
    req.headers['x-vercel-id'] ??
    req.headers['x-amzn-trace-id'];
  if (Array.isArray(requestIdHeader)) return requestIdHeader[0];
  if (requestIdHeader) return requestIdHeader;
  return 'unknown';
};

type FetchTopMemoFromBffResult = {
  topMemo: string | null;
  requestId: string;
  endpoint: string;
  status: number | 'missing-env';
  error?: string;
};

export const fetchTopMemoFromBff = async (
  req: IncomingMessage,
  slug: string
): Promise<FetchTopMemoFromBffResult> => {
  const requestId = readRequestId(req);
  if (!classPlacesApiUri) {
    return {
      topMemo: null,
      requestId,
      endpoint: 'unknown',
      status: 'missing-env',
      error: 'CLASS_PLACES_API_URI is not set',
    };
  }

  const result = await fetchClassPlace(slug, classPlacesApiUri, upstreamTimeoutMs);
  if (result.memo) {
    return {
      topMemo: result.memo,
      requestId,
      endpoint: result.endpoint,
      status: result.status,
    };
  }

  return {
    topMemo: null,
    requestId,
    endpoint: result.endpoint,
    status: result.status,
    error: result.error,
  };
};
