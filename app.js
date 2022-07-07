"use strict";
// Простые типы
// let revenue: number= 1000;
// let bonus: number= 500;
/**
 * Обьект протипизирован Type-alias User и type-alias Role c использованием &
 * Что позволило обьединить протипизированные поля в один обьект
 * Ошибка очевидна по пречине конфликта поля name что требует перестройки обьекта с
 * добавлением обьекта role.
 */
// let user: UserWithRole = {
//     neme: 'Михаил',
//     age: 40,
//     skills:['dev','DevOps'],
//     id:1
// }
/**
 *
 * @param url coolString тип string
 * @param methot httpMethod тип union
 * @returns number
 */
function fetchWithAuth(url, methot) {
    return 1;
}
;
fetchWithAuth('s', 'post');
let methot = 'post';
fetchWithAuth('s', methot);
