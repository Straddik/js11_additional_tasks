'use strict';
const stringTrim = function(str) {
    return typeof str === 'string' ?
        str.length > 30 ? str.trim().slice(0, 30) + '...' :
        str.trim() :
        console.log('Вы ввели не строку, попробуйте ещё раз');
}

console.log(stringTrim("  Привет!  "));
console.log(stringTrim(9));
console.log(stringTrim(" Проверка вывода в 30 символов, Проверка вывода в 30 символов "));