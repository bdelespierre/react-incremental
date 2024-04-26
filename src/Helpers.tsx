export function currency(n: number): string {
  return n < 9999 ? `${Math.floor(n)}` : n.toExponential(2);
}
