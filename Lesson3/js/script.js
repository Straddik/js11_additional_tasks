// 1) Через if:
let lang = 'ru';
let weekRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang == 'ru') {
    console.log(weekRu);
} else if (lang == 'en') {
    console.log(weekEn);
} else {
    console.log("Ошибка выбора языка");
}

// 2) Через switch:

switch (lang) {
    case 'ru':
        console.log(weekRu);
        break;
    case 'en':
        console.log(weekEn);
        break;
    default:
        console.log("Ошибка выбора языка");
}
// 3) Через коллекцию:

let daysOfWeek = {
    'ru': weekRu,
    'en': weekEn,
}

console.log(daysOfWeek[lang]);







// Переменная lang может принимать 2 значения: 'ru' 'en'.

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу

// через if, 

// через switch-case 

// через многомерный массив без ифов и switch.





// У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

// 	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch





// Запушить проект в репозиторий для усложненных заданий на GitHub