// forEach()
// 1. Дан массив с числами(сам придумай). Создай новый массив, состоящий из квадратов этих чисел.
const numbers1 = [2, 5, 10, 15, 21];
numbers1.forEach(number => {
    console.log(number * number);
});
// 2. Дан массив с числами. Найди сумму этих чисел.
const numbers2 = [4, 12, 17, 42, 201];
let total = 0;
numbers2.forEach(function(number) {
    total += number;
});
console.log(total);
// map()
// 3. Дан массив с числами. Преобразуй в массив, состоящий из квадратов этих чисел.
const numbers3 = [2, 5, 10, 15, 21];
const squareNumbers = numbers3.map(number => {
    return number * number;
});
console.log(squareNumbers);
// every(), some()
// 4. Дан массив с числами. Проверь то, что все элементы в массиве больше нуля.
const numbers4 = [2, 5, 10, 15, 21];
function checkElements(number) {
    return number > 0;
};
console.log(numbers4.every(checkElements));
//5. Дан массив с числами. Проверь то, что в нем есть отрицательные элементы. */
const numbers5 = [2, 5, 10, 15, -21];
function checkNegative(number) {
    return number < 0;
};
console.log(numbers5.some(checkNegative));
/* filter()
6. Дан массив с числами. Оставь в нем только отрицательные числа */
const numbers6 = [-2, -5, 10, 15, -21];
const onlyNegative = numbers6.filter(check)
function check(number) {
    return number < 0;
}
console.log(onlyNegative);