//  1) Cоздание переменной num со значением 266219 (тип данных число)

let num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа
// а) Через методы массивов - преобразуем в строку ar и через метод split() в массив ar, 
//  а затем с помощью метода массивов reduce() находим произведение всех элементов массива и сохраем в переменную product
let ar = String(num);
ar = ar.split('');
let product = ar.reduce((product, val) => product *= val, 1);
console.log("a) Произведение цифр числа num равно: " + product);
// б) Через целочисленное деление и деление с остатком 
let product2 = 1,
    numOfDig = 10;

while (numOfDig < (num * 10)) {
    product2 *= Math.trunc((num % numOfDig) / (numOfDig / 10));
    numOfDig *= 10;
}
console.log("б) Произведение цифр числа num равно: " + product2);

// 3) Вывод полученного результата в степень 3, не используя Math.pow 
product = product ** 3
console.log("Полученный результат в степени 3: " + product);
// 4) Вывод на экран первых 2 цифр полученного числа
product = String(product);
console.log("Первые две цифры числа: " + product.slice(0, 2));