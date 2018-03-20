'use strict';

const FlattenArray = (function() {
  function FlattenArray() {}

  FlattenArray.prototype.flatten = function(arr) {
    if (!(arr instanceof Array)) {
      throw new Error('Is not array');
    }
    let array = [...arr];

    for (let i = 0; i < array.length; i++) {
      if (!(array[i] instanceof Array)) {
        continue;
      }

      array.splice(i, 1, ...array[i]);
      i--;
    }

    return array;
  };

  return FlattenArray;
})();