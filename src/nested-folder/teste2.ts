import { sum } from '@src/main';

export function subtract(a: number, b: number) {
  sum(a, b);
  return a - b;
}
