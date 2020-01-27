// 1) Через if:

let languages = ['ru', 'en'],
    lang = languages[Math.floor((Math.random() * languages.length))],
    weekRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang == 'ru') {
    console.log(...weekRu);
} else if (lang == 'en') {
    console.log(...weekEn);
} else {
    console.log("Ошибка выбора языка");
}

// 2) Через switch:

switch (lang) {
    case 'ru':
        console.log(...weekRu);
        break;
    case 'en':
        console.log(...weekEn);
        break;
    default:
        console.log("Ошибка выбора языка");
}

// 3)а Через массив объектов:

let daysOfWeek = [{ ru: weekRu }, { en: weekEn }];
daysOfWeek = daysOfWeek.filter(val => val[lang]);
console.log(...daysOfWeek[0][lang]);

// 3)б Через объект:

daysOfWeek = {
    'ru': weekRu,
    'en': weekEn,
}
console.log(...daysOfWeek[lang]);

//4) Через тернарный оператор:
let names = ['Артём', 'Максим', 'Илья', ' Алексей', 'Матвей', 'Кирилл', 'Евгений'],
    namePerson = names[Math.floor((Math.random() * names.length))];

namePerson == 'Артём' ? console.log(namePerson + ' - это директор') :
    namePerson == 'Максим' ? console.log(namePerson + ' - это преподаватель') :
    console.log(namePerson + ' - это студент');