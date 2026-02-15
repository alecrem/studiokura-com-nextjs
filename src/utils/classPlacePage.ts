import { type IncomingMessage } from 'http';

type ClassPlaceApiResponse = {
  slug: string;
  topMemo: string | null;
};

const readRequestId = (req: IncomingMessage): string => {
  const requestIdHeader =
    req.headers['x-request-id'] ??
    req.headers['x-vercel-id'] ??
    req.headers['x-amzn-trace-id'];
  if (Array.isArray(requestIdHeader)) return requestIdHeader[0];
  if (requestIdHeader) return requestIdHeader;
  return 'unknown';
};

const buildSiteBaseUrl = (req: IncomingMessage): string => {
  const forwardedProto = req.headers['x-forwarded-proto'];
  const proto = Array.isArray(forwardedProto)
    ? forwardedProto[0]
    : forwardedProto ?? 'http';
  const host = req.headers.host ?? 'localhost:3000';
  return `${proto}://${host}`;
};

type FetchTopMemoFromBffResult = {
  topMemo: string | null;
  requestId: string;
  endpoint: string;
  status: number | 'fetch_error' | 'parse_error';
  error?: string;
};

export const fetchTopMemoFromBff = async (
  req: IncomingMessage,
  slug: string
): Promise<FetchTopMemoFromBffResult> => {
  const requestId = readRequestId(req);
  const endpoint = `${buildSiteBaseUrl(req)}/api/class-places/${slug}`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        'x-request-id': requestId,
      },
    });
    let payload: ClassPlaceApiResponse | null = null;
    try {
      payload = (await response.json()) as ClassPlaceApiResponse;
    } catch {
      return {
        topMemo: null,
        requestId,
        endpoint,
        status: 'parse_error',
        error: 'ClassPlace BFF did not return JSON',
      };
    }

    if (!response.ok || !payload.topMemo) {
      return {
        topMemo: null,
        requestId,
        endpoint,
        status: response.status,
      };
    }

    return {
      topMemo: payload.topMemo,
      requestId,
      endpoint,
      status: response.status,
    };
  } catch (error: unknown) {
    return {
      topMemo: null,
      requestId,
      endpoint,
      status: 'fetch_error',
      error: error instanceof Error ? error.message : String(error),
    };
  }
};
