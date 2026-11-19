import { type IncomingMessage } from 'http';
import { type GetServerSideProps } from 'next';

import { fetchClassPlace } from '@/utils/classPlace';

const apiUri = (process.env.API_URI ?? '').replace(/\/+$/, '');
const classPlacesApiUri = apiUri
  ? `${apiUri}/public/class-places/{slug}`
  : '';
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
      error: 'API_URI is not set',
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

export const getClassPlaceServerSideProps = (
  slug: string,
  fallback: string | null
): GetServerSideProps<{ topMemo: string | null }> =>
  async (context) => {
    context.res.setHeader('Cache-Control', 'no-store, max-age=0');
    const result = await fetchTopMemoFromBff(context.req, slug);
    if (result.topMemo) {
      return { props: { topMemo: result.topMemo } };
    }

    console.error(`[${slug}-page] class place api unavailable`, {
      slug,
      requestId: result.requestId,
      endpoint: result.endpoint,
      status: result.status,
      error: result.error,
    });
    return { props: { topMemo: fallback } };
  };
