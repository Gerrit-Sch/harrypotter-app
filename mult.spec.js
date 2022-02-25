import mult from './multiply.js';

describe('mult', () => {
  it('9*3=27', () => {
    const result = mult(9, 3);
    expect(result).toBe(27);
  });
});
