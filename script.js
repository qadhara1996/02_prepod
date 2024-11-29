// операторы

// = - оператор присваивания

// математические операторы
// +
// -
// *
// / -
// ** - возведение в степень
// % - остаток от деления

// сравнение
// >
// <
// >=
// <=
// == -
// === -

// ! - НЕ
// && - И
// || - ИЛИ

// При делении на 0 => Infinity/-Infinity
// Ошибки не будет, программа не упадет
// console.log(2 / 0)

const x = 10;
const y = 2;
const z = "5";
const test = "Hello, world";

// +
// если один из операндов (одна из переменных) является строкой => строка
// console.log(x + y); // 12
// console.log(x + z); // '105' => '10' + '5' => '105'
// console.log(test + ' ' + z + '!') // 'Hello, world5' => конкатенация строк
// console.log(`${test} ${z}!`);

// console.log(x + y + z); // '125'

// typeof - определить тип данных
// typeof NAME
// typeof(NAME)
// console.log(typeof test);
// console.log(typeof(x));

// -
// NaN => not a number => математическое действие не имеет смысла, не выполнимо
// isNaN(NAME) => проверка на NaN, т.е. является ли переменная NaN
// isNaN() => true/false
// console.log(x - y); // 8
// console.log(x - z); // 5
// console.log(x - test); // NaN
// console.log(test - test); // NaN
// console.log(isNaN(test - test)) // true

// console.log(typeof typeof isNaN(test - test));

// * - умножение
// console.log(x * y); // 20
// console.log(x * z); // 50
// console.log(x * test); // NaN

// / - деление
// console.log(x / y); // 5
// console.log(x / z); // 5
// console.log(x / test); // NaN

// ** - возведение в степень
// console.log(x ** y); // 100
// console.log(x ** z); // 100000
// console.log(x ** test); // NaN

// % - остаток от деления
// const a = 10;
// const b = 5;
// const c = 3;

// console.log(a % b); // => 0
// console.log(a % c); // => 1

// > (больше), < (меньше), >= (больше или равно), <= (меньше или равно)
// console.log(x > y); // true
// console.log(x < y); // false
// console.log(x >= z); // true
// console.log(x <= z); // false
// console.log('test' === 'Test');

// == => приведение типов, и сравнение значений
// === => проверка по типу и по значению, без приведения
// console.log("3" == 3); // true
// console.log("3" === 3); // false

// ! - отрицание
// console.log("3" != 3); // false
// console.log("3" !== 3); // true

// console.log(!false); // true
// console.log(!true); // false

// console.log(typeof "test"); // string
// console.log(typeof 23); // number
// console.log(typeof {}); // object
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object !!! особенность

// console.log(undefined == undefined); // true
// console.log(undefined === undefined); // true

// console.log(null == null); // true
// console.log(null === null); // true

// console.log(null == undefined); // true

console.log(null == 0); // false
console.log(null >= 0); // true

// console - несколько аргументов


