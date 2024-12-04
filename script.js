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

// const x = 10;
// const y = 2;
// const z = "5";
// const test = "Hello, world";

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

// console.log(null == 0); // false
// console.log(null >= 0); // true

// console - несколько аргументов

// let sum = 20;

// sum = sum + 5;
// sum += 5; // короткая запись - увеличить на ЗНАЧЕНИЕ 5
// sum -= 5; // короткая запись - уменьшить на ЗНАЧЕНИЕ 5
// sum *= 5; // короткая запись - увеличить В 5 РАЗ

// console.log(sum);

// инкремент(++), декремент(--)

let counter = 0;

// // постфикс
// counter++;
// counter++;

// // префикс
// ++counter;
// ++counter;

// // постфикс
// counter--;

// // префикс
// --counter;

// префиксная запись - возвращает предыдущее значение и увелич. значение переменной на единицу
// console.log(counter++); // => 0
// console.log(counter) // => 1

// префиксная запись - увеличивает значение переменной на единицу и возвращает новое значение
// console.log(++counter); // => 1
// console.log(counter) // => 1

// // И (&&), ИЛИ (||)
// console.log((3 > 5) || (14 > 9)); // => true
// console.log((3 > 5) && (14 > 9)); // => false

// const hour = 12;

// console.log(hour > 9 && hour < 21 && hour < 21)

// явное преобразование типа
// String() => преобразование к строке
// Number() => преобразование к числу
// Boolean() => преобразование к true/false
// !!VARIABLE === Boolean(VARIABLE)
// +VARIABLE === Number(VARIABLE)

// const num = 10;
// const str = '22';

// console.log(typeof String(num));
// console.log(typeof Number(str));
// console.log(typeof Boolean(str));
// console.log(Boolean(str));

// console.log(!!str); // => true
// console.log(+str); // => 22 - тип: number

// const test = 'hello';
// console.log(+test); // => NaN

// falsy значения при приведении к boolean
// 1. null
// 2. undefined
// 3. false
// 4. 0
// 5. NaN
// 6. ''

// Приведение к числу true/false
// true => Number(true) => 1
// false => Number(false) => 0

// console.log(!!Number(!false));

// if else => если, то
// if (УСЛОВИЕ) {
//   этот блок выполняется, если УСЛОВИЕ верно (true)
// } else {
//   этот блок, выполняется, если УСЛОВИЕ ложно (false)
// }

// const hour = 23;

// if (hour > 9 && hour < 21) {
//   console.log("Сейчас день");
// } else {
//   console.log("Сейчас ночь");
// }

// console.log("После if else");

// const zodiak = 'овен';

// if (zodiak === 'телец') {
//   console.log("Вы очень импульсивный человек");
// } else if (zodiak === 'лев') {
//     console.log("Вы очень храбрый");
// } else if (zodiak === 'овен') {
//     console.log("Вы очень добрый");
// } else {
//     console.log("У нас нет такого знака зодиака");
// }

// const zodiak = prompt('Введите знак зодиака');
// // DRY => don't repeat yourself
// if (zodiak === 'овен') {
//     // const animalByYear = Number(prompt('Кто вы по китайскому календарю?'));
//     const animalByYear = +prompt('Кто вы по китайскому календарю?');
//     if (animalByYear === 2000) {
//         console.log("Вы очень импульсивный человек");
//     } else {
//         console.log('Извините, что-то пошло не так :(')
//     }
// } else {
//     console.log("У нас нет такого знака зодиака");
// }

// switch case

// const zodiak = 'овен';

// switch (zodiak) {
//     case 'овен':
//         console.log('телец');
//         break;
//     case 'лев':
//         console.log('лев');
//         break;
//     case 'телец':
//         console.log('овен');
//         break;
//     default:
//         console.log('Ooops...')
//         break;
// }

// тернарный оператор
// условие ? 'если условие верно' : 'если условие ложно'

// const userAge = +prompt("Введите Ваш возраст");

// if (userAge >= 18) {
//   console.log("Добро пожаловать, смотри наш контент");
// } else {
//   console.log("Доступ запрещен");
// }

// userAge >= 18 ? console.log("Добро пожаловать") : console.log("Доступ запрещен");

// zodiak === 'телец' ? 
//     console.log("Вы очень импульсивный человек") : 
//     zodiak === 'лев' ? 
//     console.log("Вы очень храбрый") : 
//     zodiak === 'овен' ? 
//     console.log("Вы очень добрый") : console.log("У нас нет такого знака зодиака")