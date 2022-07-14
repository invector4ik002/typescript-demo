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
// function fetchWithAuth(url: string, methot: 'post'|'get') : 1 | -1 {
//     return 1
// };

// fetchWithAuth('s', 'post');

// let methot = 'post';

/**
 * строгое переназначение 
 * получилось что то типа константы )
 */
// let methot: 'post' = 'post';

// Еще один способ привязки типа methot as 'post'
// fetchWithAuth('s', methot as 'post');

// =============================================================================================

// alias/псевдоним или простым языком type типы используются при частом переиспользовании
// при типизации тех или иных данных. Пример:

/**
 * type httpMethod
 * Тип который можно переиспользовать обьявляется ключивым словом type 
 * который соодержит в себе union 
 */
// type httpMethod = 'post' | 'get';

/**
 * type coolString
 * Этот тип содержит в себе типизирование string и способен к переиспользованию .
 */
// type coolString = string;

// -------------------- Пример 1 с применением intersection  ------------------------------------------------
/**
 * type-alias типизация обьекта user так же можно переиспользовать для типизации 
 * обьектов имеющие такие же поля.
 */
// type User = {
//     neme: string,
//     age: number,
//     skills:string[],
// }
/**
 * Рассмотрение обьединения type-alias в так называемый intersection
 * type-alias Role имеющий новое поле id с type-alias User 
 */
// type Role = {
//     id: number,
// }

/**
 * Обьект протипизирован Type-alias User и type-alias Role c использованием &
 * Что позволило обьединить типы и протипизировать один обьект, двумя type-alias
 */
// let user: User & Role = {
//     neme: 'Михаил',
//     age: 40,
//     skills:['dev','DevOps'],
//     id:1
// }

// -------------------- Пример 2 с применением intersection  ------------------------------------------------
/**
 * type-alias User типизируем обьекта user так же можно переиспользовать для типизации 
 * обьектов имеющие такие же поля.
 */
//  type User = {
//     neme: string,
//     age: number,
//     skills:string[],
// }
/**
 * Рассмотрение обьединения type-alias в так называемый intersection
 * type-alias имеющий одинаковое КОНФЛИКТУЮЩИЕ поле name с type-alias User
 * Правильное использование это создание единого type-alias 
 */
// type Role = {
//     name: string,
//     id: number,
// }
/**
 * Пример обьединения type-alias в один комбенированый type-alias UserWithRole
 * 
 */
// type UserWithRole = {
//     user: UserWithRole,
//     role: Role
// }

/**
 * Обьект протипизирован Type-alias User и type-alias Role c использованием &
 * Что позволило обьединить протипизированные поля в один обьект
 * Ошибка очевидна по пречине конфликта полей name что требует перестройки обьекта с 
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
// function fetchWithAuth(url: coolString, methot: httpMethod) : 1 | -1 {
//     return 1
// };

// fetchWithAuth('s', 'post');

// let methot = 'post';

// fetchWithAuth('s', methot as 'post');

// ===================================== Интерфейсы interface  ============================================

/**
 * Интерфейс обьявляется через ключивое слово interface без равенства перед фигурной скобкой
 */
// interface User {
//     neme: string,
//     age: number,
//     skills: string[],
// }

// =============================== Пример 1 ==============================================================

/**
 * обьединение interface/интерфейсов происходит по средству ключевого слова extends/расширяет
 */
// interface UserWithRole extends User {
//     roleId: number,
// }

// =============================== Пример 2 ==============================================================
// Пример с обьединением трех интерфейсов
/**
 * 
 */
// interface Role {
//     roleId: number,
// }
/**
 * Способ обьединения через extends после перечисляем через запятую
 * extends User, Role
 */
// interface UserWithRole extends User, Role {
//     createdAt: Date,
// }

/**
 * Типизация обьекта через обьединение interface User и UserWithRole
 */
// let user: UserWithRole = {
//     neme: 'Михаил',
//     age: 40,
//     skills: ['dev', 'DevOps'],
//     roleId: 1,
//     createdAt: new Date,
// }
// =============================== Пример 3 ====================================================
// типизация через интерфейс функции в обьекте 
// также можно описывать функции и в type-alias
/**
 * функция log: (id:number) => string;
 */
// interface User {
//     neme: string,
//     age: number,
//     skills: string[]

//     log: (id:number) => string;
// }
/**
 * описание функций в обьектах не самая лучшая практика. 
 */
// let user: User = {
//     neme: 'Михаил',
//     age: 40,
//     skills: ['dev', 'DevOps'],

//     log(id) {
//         return ''
//     },
// }

// Типизация СЛОВАРЕЙ JS средством interface

/**
 * 
 */
// interface UserDic {
//     [index: number | string]: User
// }

// ======================================= РАЗНИЦА TYPE-ALIAS И INTRFACE ==========================================
/**
 * В интерфейсфх нет конфликта имен если разные interface имеют одинаковые имена 
 * происходит мерж между ними слияния и дополнение.
 * В type-alias возникнет ошибка в совпадении имен. 
 * Может быть не очень полезным и возникнуть путаница.
 */
// interface User {
//     name: string;
// }

// interface User {
//     age: number;
// }

// const User: User = {
//     name: 'Michail',
//     age: 40
// }

/**
 * type-alias позволяет рпоще работать с приметивными данными заложены в продвинутые типы Union или intersection
 */
// type UserOnline = number | boolean;

// type ID = number | string;

// Вывод для типизации обьектов или классов используем interface для простых типов type-alias.
// ============================================ Optional =========================================

/**
 * Рассмотрим пример оционального св-ва в типах
 * Условия этого interface что поле password может быть а может и не быть 
 * Что бы сделать поле не обязательным/опциональныс пишется знак "?" перед двоеточием,пример: password?: string;
 */
// interface User {
//     mail: string;
//     password?: string;
// }

// const user: User = {
//     mail: 'a@a.ru',
//     password: 'password'
// }

//  =============================== Пример на функции ================================================
/**
 * Пример на функции опционального типа
 * @param a: number
 * @param b?: number опциональный
 * Использование в функциях опционального типа всегдаа сопровождается применением условного ветвления: if, '?'
 */
// function multiply(a: number, b?: number): number {

//     return !b ? a * a : a * b;

// }

// =============================== Пример опционального типа во вложенном обьекте =================
/**
 * 
 */
// interface User {
//     mail: string;
//     password?: {
//         type: 'primary' | 'secondary';
//     }
// }
/**
 * Пример опционального типа во вложенном обьекте
 * 
 * @param user 
 */
// function testPassword(user: User): void {
// const t = user.password ? user.password?.type : undefined;
// const t =  user.password!.type; знак "!" это сокращенная проверка на undefined, говорим что тут не будет undefined
// }
/**
 * Рассмотр синтаксиса "??"
 * @param b
 * Если const T = b ?? 'work'; перед ?? null или undefined то возвращает то что после "??" 
 * Если значение есть то вернет то что проверялось то есть то что перед "??"
 */
// function test(b = 1): void {
//     const T = b ?? 'work';
//     console.log('T :>> ', T);
// };

// test();

interface IPayment {
    sum: number;
    from: number;
    to: number;
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess {
    databaseId: number;
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;

}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

const Payment = {
    sum: 10000,
    from: 2,
    to: 4
}

const response = {
    status: "success",
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4
    }
}

const failed: IResponseFailed = {
    status: "failed",
	data: {
		errorMessage: "Недостаточно средств",
		errorCode: 4
	}
}

