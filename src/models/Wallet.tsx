
export interface Currency {
  name: string,
  color: string,
  symbol: string,
}

export const Entropy: Currency = {
  name: "Entropy",
  color: "yellow",
  symbol: "S",
}

export const Wallet = new Map<Currency, number>([
  [Entropy, 100],
]);

export const MAIN_CURRENCY = Entropy;
export default Wallet;
