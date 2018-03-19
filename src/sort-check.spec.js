'use strict';

describe('Sort check', () => {
  let sortChecker;

  beforeEach(() => {
    sortChecker = new SortCheck();
  });

  it('should create instance SortCheck', () => {
    expect(sortChecker instanceof SortCheck).toBeTruthy();
  });

  it('should return true', () => {
    expect(sortChecker.check([1, 2, 3, 4, 5])).toBeTruthy();
    expect(sortChecker.check([5, 4, 3, 2, 1])).toBeTruthy();
    expect(sortChecker.check([1, 2, 2, 2, 3])).toBeTruthy();
    expect(sortChecker.check([3, 2, 2, 2, 1])).toBeTruthy();
  });

  it('should return false', () => {
    expect(sortChecker.check([1, 2, 3, 4, 1])).toBeFalsy();
    expect(sortChecker.check([1, 4, 3, 2, 1])).toBeFalsy();
    expect(sortChecker.check([1, 2, 3, 3, 1])).toBeFalsy();
    expect(sortChecker.check([1, 3, 3, 2, 1])).toBeFalsy();
  });

});