// AAA principle
// 1. arrange
// 2. act
// 3. assert

import { getStringInfo, toUpperCase } from '../app/Utils';
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

  // .only jest run only this test
  it.only('should return info for valid string', () => {
    const actual = getStringInfo('My-String');

    // comparing primitives value use toBe
    expect(actual.lowerCase).toBe('my-string');

    // compare Object use toEqual
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      'M',
      'y',
      '-',
      'S',
      't',
      'r',
      'i',
      'n',
      'g',
    ]);
    expect(actual.characters).toContain<string>('M');
    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
