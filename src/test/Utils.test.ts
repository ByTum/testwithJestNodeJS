// AAA principle
// 1. arrange
// 2. act
// 3. assert

// test properties
// only,skip,todo,concurrent
// test aliases
// it, test, xit mean it.skip, fit mean it.only

import { getStringInfo, StringUtils, toUpperCase } from '../app/Utils';
describe('Utils Test Suite', () => {
  describe.only('StringUtils test', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log('Setup');
    });

    // it.todo('test long string');

    it('Should return correct upperCase', () => {
      const actual = sut.toUpperCase('abc');
      expect(actual).toBe('ABC');
    });

    it('Should throw error on invalid agrument - function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }
      expect(expectError).toThrow('Invalid argument!');
      // expect(expectError).toThrowError(); toThrowError() deprecated 24/07/2024
    });

    it('Should throw error on invalid agrument - arrow function', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrow('Invalid argument!');
    });

    it('Should throw error on invalid agrument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        done();
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }
    });
  });

  it('should return upppercase of valid string', () => {
    // arrange
    const sut = toUpperCase;
    const expected = 'ABC';

    // act
    const actual = sut('abc');

    // assert
    expect(actual).toBe(expected);
  });

  describe('ToUpperCase example', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'dev', expected: 'DEV' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-String should', () => {
    it('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toHaveLength(9);
    });

    test('return right lower case', () => {
      const actual = getStringInfo('My-String');
      // comparing primitives value use toBe
      expect(actual.lowerCase).toBe('my-string');
    });

    test('return right upper case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    });

    test('return right characters', () => {
      const actual = getStringInfo('My-String');
      // compare Object use toEqual
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
    });

    test('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined();
    });

    test('return right extra info', () => {
      const actual = getStringInfo('My-String');
      // compare Object use toEqual
      expect(actual.extraInfo).toEqual({});
    });
  });
});
