import { HEALTHCHECKSIO_API_KEY, SENTRY_API_KEY } from "./constants";

export async function healthchecksioFetcher(path: string, options?: RequestInit) {
  const url = `https://healthchecks.io${path}`;

  console.log('fetching', url, options);

  const res = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      'X-Api-Key': HEALTHCHECKSIO_API_KEY,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function sentryFetcher(path: string, options?: RequestInit) {
  const url = `https://sentry.io${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${SENTRY_API_KEY}`,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Derived from https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/packages/usehooks-ts/src/useMediaQuery/useMediaQuery.ts
export function isDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}