'use strict';
let day = new Date();

const normalizeDayOfWeek = function(d) {
    if (d) {
        d = d - 1;
    } else {
        d = 6;
    }
    return d;
}

let dayOfWeek = normalizeDayOfWeek(day.getDay());

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
week.forEach((val, index, arr) => {
    if ((index === dayOfWeek) && (index === 5 || index === 6)) {
        console.log('%c' + val, "font-style: italic; font-weight: 900;");
    } else if (index === dayOfWeek) {
        console.log('%c' + val, "font-weight: 900;");
    } else if (index === 5 || index === 6) {
        console.log('%c' + val, "font-style: italic;");
    } else {
        console.log(val);
    }
});