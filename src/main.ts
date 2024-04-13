import { subtract } from '@src/nested-folder/teste2';

export function sum(a: number, b: number) {
  return a + b;
}

export function nullify(a: number, b: number) {
  return sum(a, b) - subtract(a, b);
}

console.log('Hello World');
