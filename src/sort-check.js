'use strict';

/**
 * Должен возвращаеть true или false.
 * Проверять массив на отсортированность
 * по возростанию или убыванию, не важно
 */
const SortCheck = (function() {
  function SortCheck() {}

  SortCheck.prototype.check = function(arr) {
    let result = true;
    let sortedByIncrease = false;

    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || i === arr.length - 1) {
        continue;
      }

      if (i === 1) {
        if (arr[i - 1] <= arr[i] && arr[i] <= arr[i + 1]) {
          sortedByIncrease = true;
          continue;
        }
        if (arr[i - 1] >= arr[i] && arr[i] >= arr[i + 1]) {
          continue;
        }

        result = false;
        break;
      }

      if (sortedByIncrease
        && (arr[i - 1] <= arr[i])
        && (arr[i] <= arr[i + 1])
      ) {
        continue;
      }

      if (!sortedByIncrease
        && (arr[i - 1] >= arr[i])
        && (arr[i] >= arr[i + 1])
      ) {
        continue;
      }

      result = false;
      break;
    }

    return result;
  };

  return SortCheck;
})();
