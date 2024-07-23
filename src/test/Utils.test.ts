// AAA principle
// 1. arrange
// 2. act
// 3. assert

import { toUpperCase } from '../app/Utils';
describe('Utils Test Suite', () => {
  it('should return upppercase of valid string', () => {
    // arrange
    const sut = toUpperCase;
    const expected = 'ABC';

    // act
    const actual = sut('abc');

    // assert
    expect(actual).toBe(expected);
  });
});
