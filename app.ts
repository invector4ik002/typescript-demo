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
//  * @param firstname string
//  * @param surname string
//  * @returns string
//  */
// function getFullName(firstname: string, surname: string): string {
//     return `${firstname} + ${surname}`
// }

// /**
//  * пример стрелочной фуеции
//  * протипизированна string
//  * @param firstname 
//  * @param surname 
//  * @returns 
//  */
// const getFullNameArrow = (firstname: string, surname: string): string => {
//     return `${firstname} + ${surname}`
// }

// /**
//  * пример без явной/строгой типизации
//  * @param firstname any/любой тип
//  * @param surname any/любой тип
//  * @returns any/любой тип
//  */
// function getFullName(firstname: any, surname: any):any {

//     if(firstname !== 'string') {
//         throw new Error('!!!!')
//     }

//     return `${firstname} + ${surname}`
// }
// console.log('getFullName :>> ', getFullName(true, false));

// /**
//  * пример с явной/строгой типизацией
//  * @param firstname string
//  * @param surname string
//  * @returns string
//  * Вывод как минимум сокращает код :)
//  */
// function getFullName(firstname: string, surname: string):string {
//     return `${firstname} ${surname}`
// }
// console.log('getFullName :>> ', getFullName('Devichensky', 'Michail'));

// =============================================================================

// Типизация обьектов

const user = {
    firstname: 'Devichensky',
    surname: 'Michail',
    city: 'Novosibirsk',
    age: 41,
};

function getFullName(userEntity):string {
    return `${userEntity.firstname} ${userEntity.surname}`
}
console.log('getFullName :>> ', getFullName(user));

