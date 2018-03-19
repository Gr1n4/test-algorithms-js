'use strict';

/**
 * Должен возвращаеть true или false.
 * Проверять массив на отсортированность
 * по возростанию или убыванию, не важно
 */
const SortCheck = (function() {
  function SortCheck() {}

  SortCheck.prototype.check = function(arr) {
    if (arr.length < 3) {
      return true;
    }

    let result = true;
    let sortedByIncrease;
    let index = 0;

    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i - 1] < arr[i]) {
        index = i + 1;
        sortedByIncrease = true;
        break;
      }

      if (arr[i - 1] > arr[i]) {
        index = i + 1;
        sortedByIncrease = false;
        break;
      }
    }

    for (let i = index; i < arr.length; i++) {
      if (sortedByIncrease && (arr[i - 1] <= arr[i])) {
        continue;
      }

      if (!sortedByIncrease && (arr[i - 1] >= arr[i])) {
        continue;
      }

      result = false;
      break;
    }

    return result;
  };

  return SortCheck;
})();
