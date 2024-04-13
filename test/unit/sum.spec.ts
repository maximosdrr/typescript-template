import { nullify, sum } from '@src/main';
import { subtract } from '@src/nested-folder/teste2';

it('Tests', () => {
  expect(sum(1, 2)).toBe(3);
  expect(subtract(1, 2)).toBe(-1);

  const result = nullify(1, 2);
  expect(result).toBeDefined();
});
