import { twMerge } from "tailwind-merge";
import { HEALTHCHECKSIO_API_KEY, SENTRY_API_KEY } from "./constants";
import clsx, { ClassValue } from "clsx";

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

export function groupBy<T>(list: T[], keyGetter: (item: T) => string | number): Record<string | number, T[]> {
  const map: Record<string | number, T[]> = {};
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map[key];
    if (!collection) {
      map[key] = [item];
    } else {
      collection.push(item);
    }
  });
  return map;
}

export function removePrefix(str: string, prefix: string) {
  if (str.startsWith(prefix)) {
    return str.slice(prefix.length);
  }
  return str;
}

export function removeSuffix(str: string, suffix: string) {
  if (str.endsWith(suffix)) {
    return str.slice(0, -suffix.length);
  }
  return str;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeSince(date: Date): string {
  let v: number = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  if (v < 60) {
    // v is seconds
    return v + ' second' + (v === 1 ? '' : 's');
  }

  v = Math.floor(v / 60); // v is now minutes
  if (v < 60) {
    return v + ' minute' + (v === 1 ? '' : 's');
  }

  v = Math.floor(v / 60); // v is now hours
  if (v < 24) {
    return v + ' hour' + (v === 1 ? '' : 's');
  }

  v = Math.floor(v / 24); // v is now days
  return v + ' day' + (v === 1 ? '' : 's');
}

export function timeSinceShort(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  const units: [number, string][] = [
    [60, 's'],
    [60, 'm'],
    [24, 'h'],
    [Number.MAX_SAFE_INTEGER, 'd']
  ];

  let value = seconds;
  for (const [unit, suffix] of units) {
    if (value < unit) return `${value}${suffix}`;
    value = Math.floor(value / unit);
  }
  return `${value}d`;
}