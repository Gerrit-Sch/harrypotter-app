import sub from './subtract.js';
describe('sub', () => {
  it('a-b=4', () => {
    const result = sub(7, 3);
    expect(result).toBe(4);
  });
});
