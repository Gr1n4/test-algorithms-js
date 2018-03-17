'use strict';

/**
 * 17:25 - 18:10
 * 19:05 - 19:25
 * 19:40 - 21:10 - закончена линейная нотация
 * 21:35 -
 * Принцип алгоритма таков.
 * Когда натыкаешься на операцию в строке, ее нужно использовать
 * для вычисления по предыдущим двум числам.
 * Операции и числа разделяются пробелом.
 * Так же необходимо сделать exceptions если со строкой что то не так.
 */

const GetSumPolandAnotation = (function() {
  function GetSumPolandAnotation(string) {}

  GetSumPolandAnotation.prototype.getSumPolandAnotationRec = function recFn(str) {
    console.log('start', str);
    if (/[^\d\s\+\-\*\/]/.test(str)) {
      throw new Error('Wrong operations');
    }

    let countOfOperators = str.match(/[\*\/\+\-]/g).length;
    let countOfNumbers = str.match(/\d+/g).length;

    if (countOfOperators === countOfNumbers) {
      throw new Error('Wrong stack of numbers');
    }

    if (countOfOperators !== countOfNumbers - 1) {
      throw new Error('Wrong stack of operations');
    }

    let arr = str.split(' ');
    let index = arr.findIndex(item => /^[\*\/\+\-]$/.test(item));

    let expression = arr.splice(index - 2, 3);

    if (expression.join(' ').match(/[\*\/\+\-]/).length !== 1) {
      throw new Error('Wrong stack of operations');
    }

    let [a, b, c] = expression;
    let result = eval(`${a} ${c} ${b}`);

    if (Number.isNaN(result) || !isFinite(result)) {
      throw new Error('Wrong string');
    }

    arr.splice(index - 2, 0, result);
    str = arr.join(' ');

    if (/[\*\/\+\-](?!\d)/.test(str)) {
      console.log('start rec', str);
      return recFn(str);
    }

    console.log('success', +str);
    return +str;
  };

  GetSumPolandAnotation.prototype.getSumPolandAnotationLiner = function(str) {
    if (/[^\d\s\+\-\*\/]/.test(str)) {
      throw new Error('Wrong operations');
    }

    let countOfOperators = str.match(/[\*\/\+\-]/g).length;
    let countOfNumbers = str.match(/\d+/g).length;

    if (countOfOperators === countOfNumbers) {
      throw new Error('Wrong stack of numbers');
    }

    if (countOfOperators !== countOfNumbers - 1) {
      throw new Error('Wrong stack of operations');
    }

    while(/[\*\/\+\-](?!\d)/.test(str)) {
      let arr = str.split(' ');
      let index = arr.findIndex(item => /^[\*\/\+\-]$/.test(item));

      let expression = arr.splice(index - 2, 3);

      if (expression.join(' ').match(/[\*\/\+\-]/).length !== 1) {
        throw new Error('Wrong stack of operations');
      }

      let [a, b, c] = expression;
      let result = eval(`${a} ${c} ${b}`);

      if (Number.isNaN(result) || !isFinite(result)) {
        throw new Error('Wrong string');
      }

      arr.splice(index - 2, 0, result);
      str = arr.join(' ');
    }

    return +str;
  };

  return GetSumPolandAnotation;
})();
