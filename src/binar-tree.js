'use strict';

const BinarTree = (function() {
  function BinarTree(arr) {
    this._arr = arr;
  }

  BinarTree.prototype.findIndexByValue = function(value) {
    let countOfIteration = 0;
    if (!value) {
      return {countOfIteration, index: -1};
    }

    let firstIndex = 0;
    let lastIndex = this._arr.length - 1;
    let index = Math.floor((firstIndex + lastIndex) / 2);
    let someValue = this._arr[index];

    while(value !== someValue) {
      countOfIteration++;

      if (firstIndex === lastIndex) {
        return {countOfIteration, index: -1};
      }

      if (value > someValue) {
        firstIndex = index + 1;
      } else {
        lastIndex = index - 1;
      }

      index = Math.floor((firstIndex + lastIndex) / 2);
      someValue = this._arr[index];
    }

    return {countOfIteration, index};
  };

  BinarTree.prototype.findIndex = function(value) {
    let countOfIteration = 0;
    for (let index = 0; index < this._arr.length; index++) {
      countOfIteration++;
      if (this._arr[index] !== value) {
        continue;
      }

      return {countOfIteration, index};
    }

    return {countOfIteration, index: -1};
  };

  return BinarTree;
})();
