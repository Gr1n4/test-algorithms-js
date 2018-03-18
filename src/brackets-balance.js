'use strict';

/**
 * 10:35 - 11:20
 * 14:40 - 15:40
 * Должен возвращаеть true или false.
 * Проверять строку на баланс скобок,
 * Т.е. вот такое выражение сбалансировано: '(()())()',
 * А вот такое нет '(()))('.
 * Если встречаются не скобки, то нужно возвращать просто false,
 * без выбраса ошибки.
 * Так же пары скобок нужно сверять не только по круглым '[], (), {}'.
 * Сверка должна быть соответственной, т.е. открытую скобку одного типа,
 * не может закрывать закрытая скобка другого типа.
 */
const BracketsBalance = (function() {
  function BracketsBalance() {}

  BracketsBalance.prototype.check = function(str) {
    if (/[^\(\)\{\}\[\]]/.test(str)) {
      return false;
    }

    while(/(\{\}|\[\]|\(\))/.test(str)) {
      str = str.replace(/(\{\}|\[\]|\(\))/, '');
    }

    if (str.length) {
      return false;
    }

    return true;
  };

  return BracketsBalance;
})();
