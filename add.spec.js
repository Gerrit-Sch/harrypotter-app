import add from './add.js';

describe('add', () => {
  it('a+b=9', () => {
    const result = add(4, 5);
    expect(result).toBe(9);
  });
});
