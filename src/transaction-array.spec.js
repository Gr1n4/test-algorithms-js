'use strict';

describe('Transaction Array', () => {
  let arr
    , ta1 
    , ta2;

  beforeEach(() => {
    arr = [];
    ta1 = new TransactionArray(arr);
    ta2 = new TransactionArray(arr);
  });

  describe('push and unshift', () => {
    it('should define push method', () => {
      expect(ta1.push).toBeDefined();
      expect(ta2.push).toBeDefined();
    });

    it('should define unshift method', () => {
      expect(ta1.unshift).toBeDefined();
      expect(ta2.unshift).toBeDefined();
    });

    it('should mutate array by push method', () => {
      ta1.push(1);
      expect(arr.length).toBe(1);
      expect(arr).toEqual([1]);
      ta2.push(3);
      expect(arr.length).toBe(2);
      expect(arr).toEqual([1, 3]);
      ta1.push(2);
      expect(arr.length).toBe(3);
      expect(arr).toEqual([1, 3, 2]);
      ta2.push(4);
      expect(arr.length).toBe(4);
      expect(arr).toEqual([1, 3, 2, 4]);
    });

    it('should mutate array by unshift method', () => {
      ta1.unshift(1);
      expect(arr.length).toBe(1);
      expect(arr).toEqual([1]);
      ta2.unshift(3);
      expect(arr.length).toBe(2);
      expect(arr).toEqual([3, 1]);
      ta1.unshift(2);
      expect(arr.length).toBe(3);
      expect(arr).toEqual([2, 3, 1]);
      ta2.unshift(4);
      expect(arr.length).toBe(4);
      expect(arr).toEqual([4, 2, 3, 1]);
    });

    it('should mutate array by combine methods push and unshift', () => {
      ta1.push(1);
      expect(arr.length).toBe(1);
      expect(arr).toEqual([1]);
      ta1.unshift(2);
      expect(arr.length).toBe(2);
      expect(arr).toEqual([2, 1]);
      ta2.push(3);
      expect(arr.length).toBe(3);
      expect(arr).toEqual([2, 1, 3]);
      ta2.unshift(1);
      expect(arr.length).toBe(4);
      expect(arr).toEqual([1, 2, 1, 3]);
    });
  });

  describe('rollback and commit', () => {
    it('should define rollback method', () => {
      expect(ta1.rollback).toBeDefined();
      expect(ta2.rollback).toBeDefined();
    });

    it('should define commit method', () => {
      expect(ta1.commit).toBeDefined();
      expect(ta2.commit).toBeDefined();
    });

    it('should remove elements added from instance after rollback', () => {
      ta1.push('b');
      ta1.unshift({foo: 'bar'});
      ta2.unshift('c');
      ta2.push(3);
      ta1.rollback();
      expect(arr.length).toBe(2);
      expect(arr).toEqual(['c', 3]);
      ta1.push({foo: 'bar'});
      ta2.rollback();
      expect(arr.length).toBe(1);
      expect(arr).toEqual([{foo: 'bar'}]);
    });

    it('should nothing do after commit', () => {
      ta1.push('b');
      ta1.unshift({foo: 'bar'});
      ta2.unshift('c');
      ta1.commit();
      ta2.push(3);
      ta2.commit();
      ta2.unshift('abc');
      expect(arr.length).toBe(5);
      expect(arr).toEqual(['abc', 'c', {foo: 'bar'}, 'b', 3]);
    });
  });

  describe('integrate', () => {
    const arr2Init = [1, {foo: 2}, 'c'];
    let arr2
      , ta3
      , ta4;

    beforeEach(() => {
      arr2 = [...arr2Init];
      ta3 = new TransactionArray(arr2);
      ta4 = new TransactionArray(arr2);
    });

    it('should save links in array items', () => {
      let obj = {a: '123', b: [1,2,3]};
      ta1.push(obj);
      expect(arr).toEqual([obj]);
      obj.b.push(4);
      expect(arr).toEqual([{a: '123', b: [1,2,3,4]}]);
    });

    it('should work with init items in array', () => {
      ta3.push(1);
      expect(arr2.length).toBe(arr2Init.length + 1);
      expect(arr2).toEqual([...arr2Init, 1]);
    });

    it('should after commit splice rollback', () => {
      ta3.push(1);
      ta3.unshift(2);
      ta4.push(3);
      ta4.push(4);
      ta3.commit();
      ta3.rollback();
      ta4.rollback();
      expect(arr2.length).toBe(arr2Init.length + 2);
      expect(arr2).toEqual([2, ...arr2Init, 1]);
    });

    it('should save correct order items after rollback same value', () => {
      ta3.unshift(2);
      ta3.unshift(1);
      ta4.push(1);
      expect(arr2).toEqual([1, 2, ...arr2Init, 1]);
      ta4.rollback();
      expect(arr2).toEqual([1, 2, ...arr2Init]);
      ta3.push(1);
      expect(arr2).toEqual([1, 2, ...arr2Init, 1]);
      ta3.rollback();
      expect(arr2).toEqual([...arr2Init]);
    });

    it('should work with different arrays apart', () => {
      ta3.unshift(2);
      ta3.unshift(1);
      ta4.push(1);
      ta3.push(3);
      ta1.unshift(2);
      ta1.unshift(1);
      ta2.push(1);
      ta1.push(3);
      expect(arr).toEqual([1, 2, 1, 3]);
      expect(arr2).toEqual([1, 2, ...arr2Init, 1, 3]);
      ta1.rollback();
      ta4.rollback();
      expect(arr).toEqual([1]);
      expect(arr2).toEqual([1, 2, ...arr2Init, 3]);
    });
  });
});