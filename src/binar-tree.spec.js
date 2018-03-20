'use strict';

describe('binar tree search', () => {
  let bt;
  let someArr = [];

  for (let i = 0; i < 100000; i++) {
    someArr.push(i);
  }

  beforeEach(() => {
    bt = new BinarTree(someArr);
  });

  it('should create instance', () => {
    expect(bt instanceof BinarTree).toBeTruthy();
  });

  it('should return correct length of init array', () => {
    expect(someArr.length).toEqual(100000);
  });

  it('should define findIndexByValue method', () => {
    expect(bt.findIndexByValue).toBeDefined();
    expect(bt.findIndex).toBeDefined();
  });

  it('should return correct index and count less than array length', () => {
    let randomValue = 100000 - Math.floor(Math.random() * 100000);
    let {index, countOfIteration} = bt.findIndex(randomValue);
    expect(index).toEqual(randomValue);
    expect(countOfIteration).toEqual(randomValue + 1);
  });

  it('should return correct index and count less than array length', () => {
    let randomValue = 100000 - Math.floor(Math.random() * 100000);
    let {index, countOfIteration} = bt.findIndexByValue(randomValue);
    expect(index).toEqual(randomValue);
    expect(countOfIteration).toBeLessThan(index);
  });

  it('should return -1', () => {
    expect(bt.findIndex(999999).index).toEqual(-1);
    expect(bt.findIndexByValue(999999).index).toEqual(-1);
  });

});