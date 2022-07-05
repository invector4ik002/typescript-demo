"use strict";
// Простые типы
// let revenue: number= 1000;
// let bonus: number= 500;
// let string: string = 'string';
// let booleanTru: boolean = true;
// let booleanFal: boolean = false;
// let res: number = revenue + bonus;
// console.log('res :>> ', res);
// ================================================================
// использование типов в функциях
// /**
//  * протипизированна string
//  * @param firstName string
//  * @param surName string
//  * @returns string
//  */
// function getFullName(firstName: string, surName: string): string {
//     return `${firstName} + ${surName}`
// }
function getFullName(firstName, surName) {
    if (firstName !== 'string') {
        throw new Error('!!!!!!!');
    }
    return `${firstName} + ${surName}`;
}
console.log('getFullName :>> ', getFullName(true, false));
// /**
//  * пример стрелочной фуеции
//  * протипизированна string
//  * @param firstName 
//  * @param surName 
//  * @returns 
//  */
// const getFullNameArrow = (firstName: string, surName: string): string => {
//     return `${firstName} + ${surName}`
// }
