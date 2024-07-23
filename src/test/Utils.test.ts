import { toUpperCase } from '../app/Utils';
describe('Utils Test Suite', () => {
  test('should return upppercase', () => {
    const result = toUpperCase('abc');
    expect(result).toBe('ABC');
  });
});
