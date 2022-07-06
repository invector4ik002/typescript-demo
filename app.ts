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
/**
 * протипизированна string
 * @param firstname string
 * @param surname string
 * @returns string
 */
// function getFullName(firstname: string, surname: string): string {
//     return `${firstname} + ${surname}`
// }

/**
 * пример стрелочной фуеции
 * протипизированна string
 * @param firstname 
 * @param surname 
 * @returns 
 */
// const getFullNameArrow = (firstname: string, surname: string): string => {
//     return `${firstname} + ${surname}`
// }

/**
 * пример без явной/строгой типизации
 * @param firstname any/любой тип
 * @param surname any/любой тип
 * @returns any/любой тип
 */
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

// const user = {
//     firstname: 'Devichensky',
//     surname: 'Michail',
//     city: 'Novosibirsk',
//     age: 41,
//     skills: {
//         dev: true,
//         devops: true,
//     }
// };

// function getFullName(userEntity: { firstname: string, surname: string }): string {
//     return `${userEntity.firstname} ${userEntity.surname}`
// }

// console.log('getFullName :>> ', getFullName(user));

// ===============================================================================
// упражнение типизируем обьект
// let office = {
//     "officeId": 45,
//     "isOpened": false,
//     "contacts": {
//         "phone": "+79100000000",
//         "email": "my@email.ru",
//         "address": {
//             "city": "Москва"
//         }
//     }
// }

// let officeType: {
//     officeId: number;
//     isOpened: boolean;
//     contacts: {
//         phone: string;
//         email: string;
//         address: {
//             city: string;
//         };
//     };
// }

// =====================================================================
//  types in arrays

// const skills = ['dev', 'DevOps']; 

/**
 * явное типизирование массива
 */
// const skills: string[] = ['dev', 'DevOps', "Testing"];
// const res = skills
// .filter(element => element !== 'DevOps')
// .map(element => element + `${'!'}`)

// console.log('res :>> ', res);
// =======================================================================
// Tuples/картеж
/**
 * Tuples/картеж решает проблему с явно типизированным массивом в котором есть 
 * другие типы данных 
 * Tuple это массив ограниченной длинны в котором каждый элемент типизирован
 * Tuples не запрещает работат таким методам массива как pop, push
 * но к добавленным элементам нельзя обратиться
 * Tuples не запрещает работать синтаксису диструктуризации массива
 */
// const skills: [string,  number] = ['dev', 1];

// const [id, skillName] = skills;

// console.log('id :>> ', id);
// console.log('skillName :>> ', skillName);
// // использование спред оператора в Tuples
// const array: [string,  number, ...boolean[]] = ['dev', 1, true, true, true]

// ==============================================================================

// Readonly/Только для чтения
/**
 * Readonly преднозначен для модификации массива которая запрещает какие либо изманения с данными
 * Ошибками становятся все методы по модификации масива или синтаксиса перназначения
 * Только для чтения
 */
// const skills: readonly [string,  number] = ['dev', 1];

// skills[1] = 2;
// skills.push('!');

// ============================================================================ 

// Enums/перечисления

// const res = {
//     message: 'Платеж успешен',
//     statusCode: 'success',
// }
/**
 * Проблему опечаток можно решить через описания в константы
 * минусы в этом, это кол-во констант в которых то же с ростом проектов 
 * происходит путаница и раздутия кода
 */
// const SUCCESS = 'success';

/**
 * По причине ошибки в написании Success с загалавной проверка вернет error
 * 
 */
// if(res.statusCode === 'Success') {
//     console.log('success :>> ', 'success');
// } else {
//     throw new Error('error');
// }

// Пример решения с применением enum
// Пример условий
// 1- успех
// 2 - в процессе
// 3 - откланен 
/**
 * Можно присвоить любые значения enum
 * Рассмотрин ЧИСЛОВОЙ enum
 */
// enum StatusCode {
//     SUCCSESS = 1,
//     IN_PROCESS,
//     FAILED,
// }

// 's'- успех
// 'p' - в процессе
// 'f' - откланен
/**
 * Можно присвоить любые значения enum
 * Рассмотрин СТРОКОВОЙ enum
 */
// enum StatusCode {
//     SUCCSESS = 's',
//     IN_PROCESS='p',
//     FAILED='f',
// }

//  1 - успех
// 'p' - в процессе
// 'f' - откланен
/**
 * Можно присвоить любые значения enum
 * Рассмотрен Гидрогенный enum крайне редкое явление !!!
 * Гидрогенный enum евляется числовым 
 */
// enum StatusCode {
//     SUCCSESS = 1,
//     IN_PROCESS = 'p',
//     FAILED = 'f',
// }

// const res = {
//     message: 'Платеж успешен',
//     statusCode: StatusCode.SUCCSESS
// }

// if(res.statusCode === StatusCode.SUCCSESS) {
//     console.log('res.statusCode :>> ', 'Платеж успешен');
// } else {
//     throw new Error('error');
// }

// function action(status: StatusCode) {

//     if (res.statusCode === StatusCode.SUCCSESS) {
//         console.log('res.statusCode :>> ', 'Платеж успешен');
//     } else {
//         throw new Error('error');
//     }
// }
// action(StatusCode.SUCCSESS);
// action(1);
// action('p'); ошибочное обращение к enum 
// action(StatusCode.IN_PROCESS); так как ГидроГенный enum все таки является числовым обращение нужно делать как указано в примере

// ======================== Продвинутые типы =============================================

// Union/союз
// Дает возможность сказать что в той или иной переменной могут хрониться данные разного типа

/**
 * Пример использования Union и зжатие его до простых типов 
 * @param id Union
 */
// function LogId(id: string | number | boolean) {
//     if (typeof id === 'string') {
//         console.log('id :>> ', id);
//     } else if (typeof id === 'number') {
//         console.log('id :>> ', id);
//     } else {
//         console.log('id :>> ', id);
//     }
// };

// LogId(1);
// LogId('>id<');
// LogId(true);

/**
 * В union могут быть как простые типы так и сложные например массивы и так же сжимаем 
 * @param err 
 */
// function LogError(err: string | string[]) {
//     if (Array.isArray(err)) {
//         console.log('arr :>> ', err)
//     } else {
//         console.log('err :>> ', err);
//     }
// }

/**
 * В union могут быть как простые типы так и сложные например массивы и обьекты, так же сжимаем 
 * @param obj
 */
// function LoпObject(obj: { a: number } | { b: number }) {
//     if ('a' in obj) {
//         console.log('obj.a :>> ', obj.a);
//     } else {
//         console.log('obj.b :>> ', obj.b);
//     }
// }

/**
 * Пример сжатия Union по средству "==="
 * @param a union
 * @param b union
 */
// function logMultipleIds(a: string | number, b: string | boolean) {
//     if (a === b) {
//         console.log('a :>> ', a);
//     } else {
//         console.log('b :>> ', b);
//     }
// }

// =================================================================================================

// Literal/буквальный

/**
 * 
 * @param url string
 * @param methot Literal буквальный или утвержденный что то типа константы перечисленные через или в аргументе
 * (methot: 'post'|'get') аргументы при вызове функции должны строго соответствовать типу 'post'|'get'
 * @returns number
 */
function fetchWithAuth(url: string, methot: 'post'|'get') : 1 | -1 {
    return 1
};

fetchWithAuth('s', 'post');

// let methot = 'post';

/**
 * строгое переназначение 
 * получилось что то типа константы )
 */
let methot: 'post' = 'post';

fetchWithAuth('s', methot);

// =============================================================================================

