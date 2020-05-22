// 7. Дан массив с числами. Оставь в нем только четные числа.
const numbers7 = [2, 5, 10, 15, 21];
const evenNumbers = numbers7.filter(even);
function even(number) {
    return number % 2 == 0;
};
// 8. Дан массив со строками. Оставь в нем только те строки, длина которых больше 5-ти символов.
const stringsArray = ['Blanco', 'Umka', 'Sofie', 'Chelsea', 'Valerie'];
const moreThanFive = stringsArray.filter(five);
function five(string) {
    return string.length > 5;
}
// 9. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставь в нем только подмассивы.
const numbersArray = [1, 2, [3, 4], 5, [6, 7]];
let underArray = numbersArray.filter(block);
function block(numbers) {
    return Array.isArray(numbers);
};
// 10. Дан массив с числами. Посчитай количество отрицательных чисел в этом массиве.
const numbers10 = [1, 4, -11, 12, 0, -17, -21, 38];
let negativeNumbers = numbers10.filter(numbers => {
    return numbers < 0;
});
negativeNumbers.length;
/* reduce(), reduceRight()
11. Дан массив с числами. Найди сумму этих чисел.*/
const numbers11 = [1, 4, -11, 12, 0, -17, -21, 38];
let total = numbers11.reduce((firstvalue, value) => {
    return firstvalue + value;
});

