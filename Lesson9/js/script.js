'use strict';
let div1 = document.createElement('div');
document.body.append(div1);
let div2 = document.createElement('div');
document.body.append(div2);
let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

setInterval(() => {
    let day = new Date();

    let string = 'Сегодня ' + day.toLocaleString("ru", options).split(", ").map((val, index, arr) => {
        if (!index) return val[0].toUpperCase() + val.substr(1);
        if (index === 1) return val.substring(0, val.length - 2) + ' года';
        if (index === 2) {
            return val.split(':').map((item, i) => {
                if (!i) {
                    if (!item || (item > 4 && item < 21)) return item + ' часов';
                    if (item === 1 || item === 21) return item + ' час';
                    if ((item > 1 && item < 5) || (item > 21 && item < 25)) return item + ' часа';
                }
                if (i === 1) {
                    if ((item < 10 || item > 20) && ((item % 10 === 2) || (item % 10 === 3) || (item % 10 === 4))) {
                        return item + ' минуты';
                    } else if ((item < 10 || item > 20) && (item % 10 === 1)) {
                        return item + ' минута';
                    } else {
                        return item + ' минут';
                    }
                }
                if (i === 2) {
                    if ((item < 10 || item > 20) && ((item % 10 === 2) || (item % 10 === 3) || (item % 10 === 4))) {
                        return item + ' секунды';
                    } else if ((item < 10 || item > 20) && (item % 10 === 1)) {
                        return item + ' секунда';
                    } else {
                        return item + ' секунд';
                    }
                }

            }).join(' ');
        }
    }).join(', ');

    div1.innerHTML = string;

    string = `${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()} - ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
    string = string.replace(/\b(\d)\b/g, '0' + '$1');
    div2.innerHTML = string;

}, 1000);