type JsonObject = Record<string, unknown>;
export type ClassPlaceErrorType =
  | 'timeout'
  | 'auth'
  | 'notfound'
  | 'upstream-5xx'
  | 'upstream-4xx'
  | 'parse'
  | 'network';

const MEMO_KEYS = [
  'top_memo',
  'topMemo',
  'top_slide_memo',
  'topSlideMemo',
  'memo',
  'note',
  'message',
];

const CLASS_PLACE_COLLECTION_KEYS = [
  'classPlaces',
  'class_places',
  'places',
  'items',
  'results',
];

const CLASS_PLACE_SINGLE_KEYS = [
  'classPlace',
  'class_place',
  'place',
  'item',
  'result',
  'data',
];

const isObject = (value: unknown): value is JsonObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const hasSlug = (value: unknown, slug: string): value is JsonObject =>
  isObject(value) && typeof value.slug === 'string' && value.slug === slug;

const findClassPlaceBySlug = (value: unknown, slug: string): JsonObject | null => {
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findClassPlaceBySlug(item, slug);
      if (found) return found;
    }
    return null;
  }

  if (!isObject(value)) return null;
  if (hasSlug(value, slug)) return value;

  for (const key of CLASS_PLACE_SINGLE_KEYS) {
    if (!(key in value)) continue;
    const found = findClassPlaceBySlug(value[key], slug);
    if (found) return found;
  }

  for (const key of CLASS_PLACE_COLLECTION_KEYS) {
    if (!(key in value)) continue;
    const found = findClassPlaceBySlug(value[key], slug);
    if (found) return found;
  }

  return null;
};

const findMemo = (value: unknown): string | null => {
  if (!isObject(value)) return null;
  for (const key of MEMO_KEYS) {
    const memoValue = value[key];
    if (typeof memoValue === 'string' && memoValue.trim() !== '') {
      return memoValue;
    }
  }
  return null;
};

const buildClassPlacesApiUrl = (baseUri: string, slug: string): string => {
  if (baseUri.includes('{slug}')) {
    return baseUri.replaceAll('{slug}', encodeURIComponent(slug));
  }
  const separator = baseUri.includes('?') ? '&' : '?';
  return `${baseUri}${separator}slug=${encodeURIComponent(slug)}`;
};

type ClassPlaceApiResult = {
  memo: string | null;
  classPlace: JsonObject | null;
  endpoint: string;
  status: number;
  errorType?: ClassPlaceErrorType;
  error?: string;
};

export const fetchClassPlace = async (
  slug: string,
  apiUri: string,
  timeoutMs = 10000
): Promise<ClassPlaceApiResult> => {
  const endpoint = buildClassPlacesApiUrl(apiUri, slug);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(endpoint, {
      headers: {
        Accept: 'application/json',
      },
      signal: controller.signal,
    });
  } catch (error: unknown) {
    const isTimeout =
      error instanceof DOMException && error.name === 'AbortError';
    return {
      memo: null,
      classPlace: null,
      endpoint,
      status: isTimeout ? 504 : 502,
      errorType: isTimeout ? 'timeout' : 'network',
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    const errorType: ClassPlaceErrorType =
      response.status === 401 || response.status === 403
        ? 'auth'
        : response.status === 404
          ? 'notfound'
          : response.status >= 500
            ? 'upstream-5xx'
            : 'upstream-4xx';
    return {
      memo: null,
      classPlace: null,
      endpoint,
      status: response.status,
      errorType,
      error: `ClassPlace API returned ${response.status}`,
    };
  }

  let payload: unknown = null;
  try {
    payload = await response.json();
  } catch {
    return {
      memo: null,
      classPlace: null,
      endpoint,
      status: response.status,
      errorType: 'parse',
      error: 'ClassPlace API did not return JSON',
    };
  }

  const classPlace = findClassPlaceBySlug(payload, slug);
  const memo = findMemo(classPlace) ?? findMemo(payload);

  return {
    memo,
    classPlace,
    endpoint,
    status: response.status,
  };
};
