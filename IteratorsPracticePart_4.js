// 15. Дан массив с числами. Узнай сколько элементов с конца массива надо сложить,
// чтобы в сумме получилось больше 10-ти.
const numbers15 = [1, 2, 7, 1, 4, 5, 6];
let counter = 1;
let quantity = numbers15.reduceRight((x, y) => {
    if (x > 10) {
        console.log(counter);
    } else {
        counter++;
        return x + y;
    }
});

// 16. Дан массив с числами. Оставь в нем только положительные числа.
// Затем извлеките квадратный корень из этих чисел.
let numbers16 = [1, 0, 16, -14, -5, 9];
let filter = numbers16.filter(number => number > 0).map(number => Math.sqrt(number));
console.log(filter);





