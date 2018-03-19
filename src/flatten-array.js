'use strict';

const FlattenArray = (function() {
  function FlattenArray() {}

  FlattenArray.prototype.flatten = function(arr) {
    if (!(arr instanceof Array)) {
      throw new Error('Is not array');
    }

    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] instanceof Array)) {
        continue;
      }

      arr.splice(i, 1, ...arr[i]);
      i--;
    }

    return arr;
  };

  return FlattenArray;
})();