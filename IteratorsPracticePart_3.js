// 12. Дан массив с числами. Найди сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6]
// - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
const numbers12 = [1, 2, 3, 0, 4, 5, 6];
let sumBeforeFirstZero = 0;
let isZeroMet = false;
numbers12.reduce((x, y) => {
    if (y === 0 && !isZeroMet) {
        isZeroMet = true;
        sumBeforeFirstZero = x;
    }
    return x + y;
}, 0);
console.log(sumBeforeFirstZero);

// 13. Дан массив с числами. Найди сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.
const numbers13 = [1, 2, 3, 0, 4, 5, 6];
let sumBeforeFirstZeroReverseOrder = 0;
let ifZeroMet = false;
numbers13.reduceRight((x, y) => {
    if (y === 0 && !ifZeroMet) {
        ifZeroMet = true;
        sumBeforeFirstZeroReverseOrder = x;
    }
    return x + y;
}, 0);
console.log(sumBeforeFirstZeroReverseOrder);

// 14. Дан массив с числами. Узнай сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти.
const numbers14 = [1, 2, 7, 1, 4, 5, 6];
let counter = 1;
let quantity = numbers14.reduce((x, y) => {
    if (x > 10) {
        console.log(counter);
    } else {
        counter++;
        return x + y;
    }
});