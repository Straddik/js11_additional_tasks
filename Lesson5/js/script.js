'use strict';
// 1)
let arr = [];
const outputArray = function(n) {
    for (let i = 0; i < n; i++) {
        arr[i] = '' + Math.ceil(Math.random() * 1000);
    }
    console.log(arr, arr.filter(val => val[0] === '2' || val[0] === '4'));
}

outputArray(7);

// 2) 
const outputPrimeNumbers = function(n) {
    let flag;
    for (let j = 2; j <= n; j++) {
        flag = 1;
        for (let i = 2; i <= Math.trunc(Math.sqrt(j)); i++) {
            if (j % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) console.log('Число ' + j + ' является простым и его делителями являются: 1 и ' + j);
    }
}

outputPrimeNumbers(100);