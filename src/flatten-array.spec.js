'use strict';

describe('flatten array', () => {
  let fa;

  beforeEach(() => {
    fa = new FlattenArray();
  });

  it('should create instance', () => {
    expect(fa instanceof FlattenArray).toBeTruthy();
  });

  it('should defined method', () => {
    expect(fa.flatten).toBeDefined();
  });

  it('should exception is not array', () => {
    expect(() => fa.flatten('abs')).toThrowError('Is not array');
    expect(() => fa.flatten({a: 'b'})).toThrowError('Is not array');
    expect(() => fa.flatten(2)).toThrowError('Is not array');
    expect(() => fa.flatten(true)).toThrowError('Is not array');
  });

  it('should return correct flatten array', () => {
    let someArr = [1, [2, 3, 4], 5, [6, [7, 8, [9]], 10], 11];
    expect(fa.flatten(someArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(someArr).toEqual([1, [2, 3, 4], 5, [6, [7, 8, [9]], 10], 11]);
  });
});