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
    let div = document.createElement('div');
    if ((index === dayOfWeek) && (index === 5 || index === 6)) {
        div.innerHTML = "<i><b>" + val + "</b></i>";
        console.log('%c' + val, "font-style: italic; font-weight: 900;");
    } else if (index === dayOfWeek) {
        div.innerHTML = "<b>" + val + "</b>";
        console.log('%c' + val, "font-weight: 900;");
    } else if (index === 5 || index === 6) {
        div.innerHTML = "<i>" + val + "</i>";
        console.log('%c' + val, "font-style: italic;");
    } else {
        div.innerHTML = val;
        console.log(val);
    }
    document.body.append(div);
});