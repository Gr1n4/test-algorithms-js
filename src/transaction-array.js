// 11:40 - 12:00
// 12:05 - 12:18
// ~33 min
// 16:10 - 16:50
// 17:35 -

'use strict';

const TransactionArray = (function() {

  let histories = [];

  function TransactionArray(arr) {
    let historyIndex = histories.findIndex(some => some.arr === arr);

    if (historyIndex !== -1) {
      this._history = histories[historyIndex].history;
    } else {
      histories.push({
        history: [],
        arr
      });
      this._history = histories[histories.length - 1].history;
    }

    this._arr = arr;
  }

  TransactionArray.prototype.push = function(item) {
    let index = this._arr.push(item) - 1;
    this._history.push({
      isCommited: false,
      index,
      instance: this
    });
  };

  TransactionArray.prototype.unshift = function(item) {
    this._arr.unshift(item);
    this._history.forEach(item => item.index++);
    this._history.push({
      isCommited: false,
      index: 0,
      instance: this
    });
  };

  TransactionArray.prototype.commit = function() {
    this._history.forEach(item => {
      if (item.instance !== this) {
        return;
      }

      item.isCommited = true;
    });
  };

  TransactionArray.prototype.rollback = function() {
    for (let i = 0; i < this._history.length; i++) {
      if (this._history[i].instance !== this) {
        continue;
      }

      if (this._history[i].isCommited) {
        continue;
      }

      this._arr.splice(this._history[i].index, 1);

      this._history.forEach(item => {
        if (item.index > this._history[i].index) {
          item.index--;
        }
      });

      this._history.splice(i, 1);

      i--;
    }
  };

  return TransactionArray;
})();