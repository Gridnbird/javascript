// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них;
// Вариант №1
function min(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
// Вариант №2
function min(x, y) {
    return x < y ? x : y;
}

// Напиши функцию-счётчик, которая считает свои вызовы и возвращает их текущее число.
function myCounter() {
    let currentCount = 1;
    return function() {
        return currentCount++;
    }
}
let counter = myCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3