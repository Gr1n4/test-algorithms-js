'use strict';

describe('flatten array', () => {
  let arr
    , fa;

  beforeEach(() => {
    fa = new FlattenArray();
  });

  it('should exception is not array', () => {
    expect(fa.flatten('abs')).toThrowError('Is not array');
    expect(fa.flatten({a: 'b'})).toThrowError('Is not array');
    expect(fa.flatten(2)).toThrowError('Is not array');
    expect(fa.flatten(true)).toThrowError('Is not array');
  });

  it('should return correct flatten array', () => {
    expect(fa.flatten([1, [2, 3, 4], 5, [6, [7, 8, [9]], 10], 11])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});