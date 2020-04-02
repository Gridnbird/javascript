// Задание к уроку 1.1.2

// Вывести в консоль:
// – своё имя в строчном виде;
// – свой возраст в числовом виде;
console.log('Vitalii');
console.log(27);
// Задание к уроку 1.1.3

// – Добавить комменарий перед первым выводом в консоль;
// – Закоментировать все выводы в консоль, кроме первого.*/

console.log('Я умею комментировать строчки кода в JS'); // Хороший заголовок
/*
console.log('Эта строка лишняя');
console.log('И эта');
console.log('Да, убери же ты их наконец!!!');
*/

// Задание к Уроку 1.1.4.
// – Вывести в консоль первые 5 типов данных, по очереди. Используйте конструкцию*/

console.log('/*Значение*/', typeof('/*Значение*/'));
// '/*Значение*/' заменяем на необходимое значение определенного типа данных.
console.log(7, typeof 7);
console.log('cycle', typeof('cycle'));
console.log(true, typeof(true));
console.log('null', typeof(null));
console.log(undeclaredVariable, typeof(undeclaredVariable));

// Задание к уроку 1.1.5
//
// Выполните арифметические операции в консоли:
// – сложите ваш возраст с текущим числом месяца;
// – вычтите из текущего года год вашего рождения;
// – умножьте число Пи на 100;
// – разделите 10 на 3.
console.log(27+25); // ответ 52
console.log(2020-1992); // ответ 28
console.log(Math.PI()*100); // ответ ~= 314.159
console.log(10/3); // ответ 3.333

// Задание к уроку 1.1.6
//
// – вывести в консоль конкатенацию строк ‘Hello’ и ‘Smartians’, без учета пространства между ними.
// – вывести в консоль конкатенацию строк ‘Hello’ и ‘Smartians’, с учетом пространства между ними.
console.log('Hello' + 'Smartians');
console.log('Hello ' + 'Smartians');

// Задание к уроку 1.1.7
//
// – посчитайте длину строки 'Share your knowledge', результат выведите в консоль.
console.log('Share your knowledge'.length);


// Задание к уроку 1.1.8
// –– приведите строку ‘My name is’ + ‘Your name’ к UpperCase (все буквы большие);
// –– учимся гуглить, на сайте https://developer.mozilla.org/ находим метод объекта String,
// который удаляет лишние пробелы из строки ‘     I love study JS on Smartians platform    ’.
console.log(‘My name is’ + ‘Your name’.toUpperCase());
console.log(‘     I love study JS on Smartians platform    ’.trim());
/* Или так?
var orig = ‘     I love study JS on Smartians platform    ’;
console.log(orig.trim());
*/

// Задание к уроку 1.1.9
// –– вывести на экран случайное число от 0 до 200
// –– найдите подходящий метод у объекта Math, который вернет наименьшее целое число, большее или равное полученному выше числу.
// –– с помощью совйства у объекта Number, проверте что ваше полученное число –– целое.
console.log(Math.random()*200);
console.log(Math.floor(Math.random()*200));
console.log(Number.isInteger(Math.floor(Math.random()*200)));

// Задание к уроку 1.2.2.
// –– Объявите переменную myFood со значением 'sushi';
// –– Объявите переменную numOfRollSlices со значением 6;
// –– Полученные значения выведите в консоль.
let myFood = 'sushi';
let numofRollSlices = 6;
console.log(numofRollSlices '+'myFood);

// Задание к уроку 1.2.3.
// –– Объявите переменную let с именем iKnowJs и присвойте значение false;
// –– Выведите значение в консоль
// –– Затем присвойте переменной значение true и снова выведите в консоль.
const iKnowJs = false;
concole.log(iKnowJs);
let iKnowJs = true;
concole.log(iKnowJs);

// Задание к уроку 1.2.4.
// –– объявите константу myName и присвойте ей значение с вашим именем;
// –– переприсвоить значение константы и посмотреть в консоль. Должна быть ошибка (TypeError: Assignment to constant variable.).
const myName = Vitalii;
let Vitalii = (TypeError: Assignment to constant variable.);
console.log(myName);

// Задание к уроку 1.2.5

let plusMe = 10; // добавь 10
let subTrackMe = 9001; // отними 100
let multiplyMe = 32; // умножь на 3
let quarterMe = 1152; // раздели на 3

// Используйте сокращенные математические операторы ниже






// Проверь результат ниже
console.log('The value of levelUp:', plusMe);
console.log('The value of powerLevel:', subTrackMe);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// Задание к уроку 1.2.6

// Увеличте значение bitcoin при помощи оператора инкремента
// Уменьшите значение ethereum при помощи оператора декремента

let bitcoin = 10000;
let ethereum = 300;

let bitcoin = 10000;
bitcoin++;
console.log(bitcoin); // Результат: 10001
let ethereum = 300;
ethereum--;
console.log(ethereum); // Результат: 299

// Задание к уроку 1.2.7

// Создайте переменную с именем myPet и присвойте ей значение – название вашего любимого животного (cat | dog | parrot)
// Сделайте вывод в консоль строки 'My favourite pet is ' и значение вашей переменной, используя конкатенацию строк
let myPet = 'cat';
console.log('My favourite pet is ' +myPet+ '.');

// Задание к уроку 1.2.8

// Создайте 2 переменных: myName и myCity, присвойте им значения.
// В консоль выведите сообщение, My name is.. I am from .., используя интерполяцию строк с переменными.
let myName = 'Vitalii';
let myCity = 'Ukraine';
console.log('I am from ' +myCity+ ', My name ' +myName+ '.');

// Задание к уроку 1.2.9

// вывести в консоль тип переменной
let englishLesson = 'London is the capital of Great Britain';
// переприсвоить переменную со значением 7
// еще раз вывести в консоль тип переменной
// в первом случае должно быть string, а во  втором number

let englishLesson = 'London is the capital of Great Britain';
console.log(englishLesson, typeof englishLesson);
let englishLesson = 7;
console.log(englishLesson, typeof englishLesson);
