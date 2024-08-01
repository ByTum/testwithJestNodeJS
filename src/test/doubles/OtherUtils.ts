import { calculateComplexity } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
  it('Calculates complex', () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfl',
      },
    };

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
