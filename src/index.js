'use strict'
/* 
const MyMath = require('./MyMath') */
const utilits = require('./utilits')

/* 
Require work:
1) Resolve - поиск
2) Read - чтение файла
3) Wrap - Обертка в функцию, inject переменных
4) Eval - запуск кода, поиск ошибок
5) Cache - Запоминание экспорта после Eval

Код при импорте запускается один раз
*/

/* 
Resolve - поиск
    1) core modules - встроенные в nodejs модули
    (Условение - без расширения файла )
*/
/* 
console.log(MyMath); */
console.log(utilits);