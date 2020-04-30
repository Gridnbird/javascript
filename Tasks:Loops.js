// Напишите цикл, который выводит в консоль треугольник (используй символ # для графики)
// Вариант 1
let trianglelines = 8;
let trianglegap = ' ';
let triangle = '#'

for (let i = 0; i < trianglelines; i++) {
    trianglegap += triangle;
    console.log(trianglegap);
}
// Вариант 2
for (let triangle = '#'; triangle.length < 8; triangle += '#') {
    console.log(triangle);
}
// Вариант 3 при условии, что let triangle = '#'
while (triangle.length < 9) {
    console.log(triangle);
    triangle += '#';
}
/* Напиши программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска. */
let chessSize = 8;
let chessBoard = '';

for (let i = 0; i < chessSize; i++) {
    for (let j = 0; j < chessSize; j++) {
        if ((i + j) % 2 === 0) {
            chessBoard += '■'; // сорри что не использовал #, просто думал так будет красивее
        } else {
            chessBoard += '□';
        }
    }
    chessBoard += '\n';
}
console.log(chessBoard);

/* Напиши функцию, reverseArray. Первая получает массив как аргумент и выдаёт новый массив,
с обратным порядком элементов. Не используй стандартный метод reverse. */

// Этот попробовал слепить сам, но тут так понял без функции =(
let reverseArray = ["A", "B", "C"];
let newArray = [];
a = reverseArray.reverse()

for(var i = 0; i < a.length; i++) {
    newArray.push(a[i])
}
console.log(newArray)

// Вот нашел такой вариант
reverseArray = function (array) {
    var arrayTemp = [];
    for (var i = array.length; i > 0; i--) {
        arrayTemp.push(array.pop());
    }
    return arrayTemp;
};
console.log(reverseArray(["A", "B", "C"]));

// И вместе с ним еще такой
reverseArrayInPlace = function (array) {
    var arrayTemp = [];
    for (var i = array.length; i > 0; i--) {
        arrayTemp.push(array.pop());
    }
    for (var j = arrayTemp.length; j > 0; j--) {
        array.unshift(arrayTemp.pop());
    }
    return array;
};
let arrayValue = ["A", "B", "C"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// Напиши функцию, которая принимает в себя год и выдаёт ответ, високосный он или нет
const multOf = (n, x) => x % n == 0;
const multOf4 = x => multOf(4, x); /* Разделите год на 4. Если деление целочисленное, то есть без остатка, год високосный.
Если при делении получился остаток (или десятичная дробь), год не високосный. */
const multOf100 = x => multOf(100, x); /* Выясните, делится ли год на 100. Если год делится нацело на 4, но не делится нацело на 100, это високосный год.
Если год делится как на 4, так и на 100, возможно, это не високосный год, поэтому придется выполнить еще одно вычисление */
const multOf400 = x => multOf(400, x); /* Проверьте, делится ли год на 400. Если год делится на 100 и не делится на 400, это не високосный год.
Если год делится на 100 и на 400, это високосный год. */
const isLeapYear = y => multOf4(y) && !multOf100(y) || multOf400(y); // если год делиться на 4 без остатка и не делиться на 100 нацело или делиться на 400
console.log(isLeapYear(2020))

// Вот нашел прикольный вариант, но не могу его прочитат и понять логику
const isLeapYear2 = y => !(y&3||y&15&&!(y%25));
console.log(isLeapYear2(2012))

// Но скорее всего вот более развернутая вариация, но все равно не понятно происхождение чисел: 3, 15, 25.
function checkYear(year) {
    var formula = (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
    if(formula == true) {
        console.log('Год ' + year + ' высокосный');
    } else {
        console.log('Год ' + year + ' не высокосный');
    }
}
checkYear(2020);
