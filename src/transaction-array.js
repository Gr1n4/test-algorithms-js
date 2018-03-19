// 11:40 - 12:00
// 12:05 - 12:18

'use strict';

const TransactionArray = (function() {
  function TransactionArray(arr) {
    this._arr = arr;
    this._history = arr.map(item => ({
      isCommited: true,
      method: 'push',
      value: item
    }));
  }

  TransactionArray.prototype.push = function(item) {
    this._arr.push(item);
    this._history.push({
      isCommited: false,
      method: 'push',
      value: item
    });
  };

  TransactionArray.prototype.unshift = function(item) {
    this._arr.unshift(item);
    this._history.push({
      isCommited: false,
      method: 'unshift',
      value: item
    });
  };

  TransactionArray.prototype.commit = function() {
    this._history.forEach(item => item.isCommited = true);
  };

  TransactionArray.prototype.rollback = function() {
    this._history = this._history
      .reverse()
      .filter(item => {
        if (item.isCommited) {
          return true;
        }

        let arr = [...this._arr];

        if (item.method === 'push') {
          arr = arr.reverse();
        }

        let index = arr.findIndex(some => some === item.value);
        this._arr.splice(item.method === 'push' ? ~index : index, 1);
        return false;
      })
  };

  return TransactionArray;
})();