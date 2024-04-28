
export function displayCurrency(n: number): string {
  return n < 9999 ? `${Math.floor(n)}` : n.toExponential(2);
}

export function where<T>(array: T[], criteria: (item: T) => boolean): T | undefined {
  for (const item of array) {
    if (criteria(item)) {
      return item;
    }
  }

  return undefined;
}

export function cloneAndUpdate<T>(obj: T, updater: (clone: T, original: T) => void): T {
  let clone;

  if (obj instanceof Map) {
    clone = new Map(obj);
  } else if (Array.isArray(obj)) {
    clone = [...obj];
  } else {
    clone = { ...obj };
  }

  updater(clone, obj);
  return clone;
}
