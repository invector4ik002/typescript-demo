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
// let office: officeType = {
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

// interface officeType: {
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

// -------------------- Пример 1 с применением intersection/перекресток  ------------------------------------------------
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
//  ============================== Упражнение1
// interface IPayment {
//     sum: number;
//     from: number;
//     to: number;
// }

// interface IPaymentRequest extends IPayment { }

// interface IDataSuccess {
//     databaseId: number;
//     sum: number;
//     from: number;
//     to: number;
// }

// enum PaymentStatus {
//     Success = 'success',
//     Failed = 'failed',
// }

// interface IDataFailed {
//     errorMessage: string;
//     errorCode: number;
// }

// interface IResponseSuccess {
//     status: PaymentStatus.Success;

// }

// interface IResponseFailed {
//     status: PaymentStatus.Failed;
//     data: IDataFailed;
// }

// const Payment = {
//     sum: 10000,
//     from: 2,
//     to: 4
// }

// const response = {
//     status: "success",
//     data: {
//         databaseId: 567,
//         sum: 10000,
//         from: 2,
//         to: 4
//     }
// }

// const failed: IResponseFailed = {
//     status: "failed",
// 	data: {
// 		errorMessage: "Недостаточно средств",
// 		errorCode: 4
// 	}
// }

// ====================================== Void ========================================

// /**
//  * Рассмотрим тип void. Типизация функции как void означает то что функции ничего не возвращает.
//  * не нужно путать void и undefined
//  * @param id union
//  */
// function logId(id: string | number): void {
//     console.log('id :>> ', id);
// };

// /**
//  * так же имеет тип void.
//  * const a: void
//  */
// const a = logId(1);

// /**
//  * Если в функцци в какой либо ветке что либо возвратилось (return) это будет койнибуть type или undefined.
//  * Если функция ничего не возвращает то это будет всегда void.
//  * @param f number
//  * @param s string
//  */
// function multiply(f: number, s?: string) {
//     if(!s) {
//         return f*f
//     }
// }

// /**
//  * Можно так же типизировать функции
//  * Данный пример явно указивает на то что функция ничего не должна возвращать
//  * примеры ниже показывают на особенность void по игнору возврата(return);
//  */
// type voidFunction = () => void;

// /**
//  * В данном примере функция протипизирована типом с void.
//  * Данная функция не смотря на return ничего не вернет.
//  * @returns {boolean}
//  */
// const f2: voidFunction = () => {
//     return true;
// };

// /**
//  * Пример возврата void
//  * const b: void
//  * Далее пример где это применимо точнее как это работает и зачем
//  */
// const b = f2();

// /**
//  * Обработаем массив методом для каждого эл-та и элемент пушим в массив user
//  */
// const skills = ['dev', 'DevOps'];

// const user = {
//     s: [''],
// };

// /**
//  * Как тут работает под капотом void
//  * user.s.push(sk) в методе push в данном примере возвращает новую длинну массива
//  * если бы такого поведения не было в ts ты мы бы не могли использовать с ts подоные
//  * конструкции
//  */
// skills.forEach(sk => {
//     return user.s.push(sk)
// });

// =============================== unknown ======================================

// unknown/неизвестный используется для данных которых тип не известен, приходящих па пример из вне

// let input: unknown;
// /**
//  * при типизации unknown любой тип данных будет валидным.
//  */
// input = 3;
// input = ['dev', 'DevOps'];

// let res: string = input;

// ============================== пример сужения типов  =============================

// /**
//  * Пример работы с unknown, в скоупе функции производится проверка на входящий тип данных
//  * и таким образом при выявлении типа продолжается работа с ним к примеру number тогда допустимы
//  * все методы для number
//  * Назвал бы метод исключения
//  * @param i unknown
//  */
// function run(i: unknown) {

//     if (typeof i == 'number') {
//         i++;
//     } else {
//         i
//     }
// }
// run(input);

// ============================== пример tru/catch с проверкой в блоке if(error instanceof Error) =============================

/**
 * Пример из реального, обработка ошибки в асинхронной функции при запросе
 * Ошибки в TS версии 4,4 имеют тип unknown по этому обязательно нужна проверка
 * на instanceof Error
 */
// async function getData() {

//     try {
//        await fetch('');
//     } catch(error) {
//         if(error instanceof Error){
//             console.log('error.message :>> ', error.message);
//         }
//     }
// }

/**
 * Пример приведения к типу Error по средсту кастомизации
 * Используем явное приведение к типу Error. const a = error as Error
 * Возникает возможность поймать ошибку если в catch упадет не Error а на пример строка
 */
// async function getDataForse() {

//     try {
//        await fetch('');
//     } catch(error) {
//        const a = error as Error
//     }
// }

// ============================== пример unknown в union и intersection =============================

/**
 *  В union unknown всегда будет unknown
 */
//// type U1 = unknown
// type U1 = unknown | string;
//// type U1 = unknown
// type U1 = unknown | boolean;
//// type U1 = unknown
// type U1 = unknown | number;

/**
 * В intersection unknown всегда будет intersection
 */

// //type U2 = string
// type U2 = unknown & string; type U2 = string
// //type U2 = boolean
// type U2 = unknown & boolean; type U2 = boolean
// //type U2 = number
// type U2 = unknown & number;

// ============================== Never ========================================

// Never/Никогда говрит что никогда
// /**
//  * @function в явной типизации never означает что функция никогда не возвращается
//  * @param message string
//  */
// function generateReeor(message: string): never {
//     throw new Error(message);
// }

// /**
//  * Пример этой функции в том что код в теле функции не возвращается по условию в цикле
//  * явно типизируется never.
//  */
// function dumpError(): never {
//     while(true){}
// }

// /**
//  * Запртит return
//  * @returns
//  */
// function recursion(): never{
//     return recursion()
// }

// ============================== пример отличий never и void ================================

// /**
//  * Пример отличия void и never
//  * в void можно присвоить undefined в случае с never ничего нельзя присвоить в переменную
//  */
// const a: never = undefined

// ============================== пример с literal ициклом switch ===========================================

// type paymentAction = 'refund' | 'checkout' | 'reject';
// /**
//  * Пример применения never.
//  * Перехват ошибки в процессе разработки если например добавляется новый тип который не предусмотрен
//  * в цикле в фукции на примере цикла switch/case в default прописывается прошлушка const _: never = action
//  * которая даст ошибку если добавится новый тип
//  * @param action string
//  */
// function processAction(action: paymentAction) {
//     switch(action) {
//         case 'refund':
//             // ...
//             break;
//         case 'checkout':
//             // ...
//             break
//         default:
//             const _: never = action
//             throw new Error('Нет такого Action')
//     }
// }

// ============================== пример

// /* @function в явной типизации never означает что функция никогда не возвращается
// * @param message string
// */
// function generateReeor(message: string): never {
//     throw new Error(message);
// }
// /**
//  * В данном примере при else if брок считается не законченым неявно возвращается return undefined
//  * это особенность TypeScript по этой причине нужно ставить блокировку, блокировкой считается в данном
//  * примере функция которая выбрасывает ошибку и никогда не возвращает ничего то есть :never
//  * @param x string | number
//  * @returns : never
//  */
// function isString(x: string | number): boolean {
//     if (typeof x === 'string') {
//         return true;
//     } else if (typeof x === 'number') {
//         return false
//     }
//     generateReeor('Бряка');
// }

// // ============================== Null =============================

// //  Null какой он в TS. в TS Null является типом!!!!!

// // ============================= пример =============================
// /**
//  * В TS нельзя null ложить никуда кроме null и any. Это можно обойти в настройках strict режима в tsconfig.json
//  * изменив "strictNullChecks": true, на "strictNullChecks": false,
//  * ВАЖНО рекомендуется писать код в режиме "strictNullChecks": true !!!!
//  */
// const a: null = null;
// const a1: any = null;
// const a2: number = null;
// const a3: string = null;
// const a4: boolean = null;
// const a5: undefined = null;
// // =============================== Пример важности null =============================
// /**
//  * Создаем интерфейс
//  */
// interface User {
//   name: string;
// }

// /**
//  * Важность этого примера в разнице между null и undefined
//  * Разница между null и undefined.
//  * null - это явно заданный неопределенный обьект
//  * undefined - это не заданный обьект образовавшейся автоматически в результате возврата или еще какой то причине
//  * И в возврате в этой функцие
//  */
// function getUser() {
//   if (Math.random() > 0.5) {
//     return null;
//   } else {
//     return {
//       name: 'Michail'
//     } as User;
//   }
// }

// const user = getUser();
// if (user) {
//   const saveName = user.name;
// }

// ============================== Приведение типов ===============================================================

// /**
//  * преобразование в тип из числа в строчку требует применения метода преобразования
//  * переменная в которой число.toString();
//  */
// let a = 5;
// let b:string = a.toString();

// /**
//  * преобразование в тип через функцию конструктор требует метода .valueOf();
//  */
// let e: string = new String(a).valueOf();
// let f: boolean = new Boolean(a).valueOf();

// /**
//  * преобразование строки в число лучше использовать метод parseInt(переменная в которой стока);
//  * console.log('d :>> ', d); NaN
//  */
// let c = 'string';
// let d: number = parseInt(c);

// interface IUser {
//     name: string;
//     email: string;
//     login: string;
// }
// /**
//  * Валидные способы типизации
//  */
// const user: IUser = {
//     name: 'Michail',
//     email: 'Michail@mail.ru',
//     login: 'Michail123',
// }

// const user = {
//     name: 'Michail',
//     email: 'Michail@mail.ru',
//     login: 'Michail123',
// } as IUser

/**
 * Способ который не валиден в React.js
 * <IUser>
 */
// const user = <IUser> {
//     name: 'Michail',
//     email: 'Michail@mail.ru',
//     login: 'Michail123',
// }

// =============================== Преобразование одного обьекта к другому =======================

/**
 * тип админа
 */
// interface IAdmin {
//     name: string;
//     role: number;
// }
/**
 * Рассмотрение обьединения обьектов в один
 * ...user разворачивает свои поля в обьекте admin под капотом получается то что
 * обьект admin получит поля mail и ligin  что может привести в дальнейшем к ошибке
 * например на проверку отсутствия поля mail:
 * по этой причине этот пример является не валиднфм хотя не выдает видимых ошибок.
 */
// const admin: IAdmin = {
//     ...user,
//     role: 1,
// }

// ============================== ПРавильный способ преобразование обьекта через служебную функцию

// function userToAdmin(user: IUser): IAdmin {
//     return {
//         name: user.name,
//         role: 1,
//     }
// }

// =============================== Type Guard/Тип гвардии ======================================

// interface IUser {
//     name: string;
//     email: string;
//     login: string;
// }

// const user = {
//     name: 'Michail',
//     email: 'Michail@mail.ru',
//     login: 'Michail123',
// }

// interface IAdmin {
//     name: string;
//     role: number;
// }
// /**
//  * @function дана для рассмотрения примера использования Type Guard;
//  * Ниже обьявлена функция isString() которая подставляется в блок if для проверки на типов
//  * @param id Union
//  *
//  */
// function logId(id: string | number) {
//     if (typeof id === 'string') {
//         console.log('id: string :>> ', id)
//     } else if (typeof id === 'number') {
//         console.log('id: number :>> ', id)
//     }
// }

// /**
//  * Приметивный пример Type Guard
//  * что то напоминает кастомный хук который используется для экономии количества кода
//  * основная идея переиспользования для сжатия типов
//  * @param x string
//  * @returns
//  */
// function isString(x: string | number) : x is string {
//     return (
//         typeof x === 'string'
//     );
// }

// ============================== Пример использования Type Guard c union интерфейсов ===========================

// /**
//  * @function Type Guard выполняет проверку на ноличие поля role у обьекта user
//  * функция спрашивает является ли user isAdmin/админом имея или не имеет поле 'role'
//  * таким образом сжимая интерфейсы до нужного типа
//  * @param user
//  * @returns
//  */
// function isAdmin(user: IUser | IAdmin): user is IAdmin {
//     return 'role' in user
// }
// // console.log('isAdmin :>> ', isAdmin(user));

// /**
//  * @function  Type Guard альтернативный вариант проверки на админа
//  * @param user union
//  * @returns
//  */
// function isAdminAltrnative(user: IUser | IAdmin) {
//     return (user as IAdmin).role !== undefined;
// }

// /**
//  * @function выполняет проверку на ноличие поля role у обьекта user
//  * по средству функции Type Guard isAdmin
//  * @param user union интерфейсов
//  * @returns 'user не является админестратором'
//  */
// function setRoleZero(user: IUser| IAdmin) {
//     if (isAdmin(user)) {
//         user.role = 0;
//     } else {
//         throw new Error('user не является админестратором')
//     }
// }
//   // Error: user не является админестратором
// // setRoleZero(user);

// ============================== Упражнение2 =====================================

// interface IPayment {
//     sum: number;
//     from: number;
//     to: number;
// }

// enum PaymentStatus {
//     Success = 'success',
//     Failed = 'failed',
// }

// interface IPaymentRequest extends IPayment { }
// interface IDataSuccess extends IPayment {
//     databaseId: number;
// }

// interface IDataFailed {
//     errorMessage: string;
//     errorCode: number;
// }

// interface IResponseSuccess {
//     status: PaymentStatus.Success;
//     data: IDataSuccess;
// }

// interface IResponseFailed {
//     status: PaymentStatus.Failed;
//     data: IDataFailed;
// }

// // type f = (res: IResponseFailed | IResponseFailed) => number;
// type Res = IResponseFailed | IResponseSuccess;

// function isSuccess(res: Res): res is IResponseSuccess {
//     if (res.status === PaymentStatus.Success) {
//         return true
//     }
//     return false;
// }

// function getIdFromData(res: Res): number {
//     if (isSuccess(res)) {
//         return res.data.databaseId;
//     } else {
//         throw new Error(res.data.errorMessage)
//     }
// }

// ========================================================================================
// ============================== Class/Классы ============================================

// /**
//  * Это класс ) Для типизированного класса обязательно нужна инициализация
//  * в блоке constructor(){}
//  */
// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const user = new User('Michail');
// console.log('user.name :>> ', user.name);
// // Настройка TS конфига: меняем компеляцию с js6 в js5 поле  "target": "es2016", меняем на  "target": "es5",

// /**
//  * Создали класс без инициализации Без конструктора. На его базе создаем admin
//  * Примечание ошибка в JS нет но TS выдает: Свойство "role" не имеет инициализатора, и ему не гарантировано присваивание в конструкторе.
//  * Есть два способа убрать ошибку
//  * 1) поставить знак "!" role!: number; говоря что мы осознанно делаем эту ошибку и знаем о ней
//  * 2) Способ настройки конфига TS: "strictPropertyInitialization": true, на "strictPropertyInitialization": false,
//  */
// class Admin {
//   role: number;
// }

// const admin = new Admin();
// admin.role = 1;

// ===================================  Констрцктор =================================

// /**
//  * Это класс ) Для типизированного класса обязательно нужна инициализация
//  * в блоке constructor(){}
//  * @constructor(){} особая функция-метод зарезервированная в теле класса.
//  * возвращает класс constructor User(name: string): User
//  * Переопределить нельзя ! например: constructor(name: string): string.
//  * не может принемать ДЖИНЕРИКИ !
//  * сам constructor привязывает классу обьявленные в своем теле свойства
//  * через this.
//  * В отличии от JS в TS можно доопределить класс сделать его оверлоад (
//  *  это значит что можно дополнить сигнатуру constructor альтернотивной сигнатурой
//  * Пример: дополним сигнатуру name альтернотивной сигнатурой age
//  * )
//  */
// class User {
//   name: string;
//   age: number;
// // сигнатуры перезагрузки 1-я)
//   constructor();
// // сигнатуры перезагрузки 2-я)
//   constructor(name: string);
// // сигнатуры перезагрузки 3-я)
//   constructor(age: number);
// // сигнатуры перезагрузки 4-я)
//   constructor(name: string, age: number);
// /**
//  * последний в списке constructor является конструктором реализации/импрементации
//  * @param name все что распологается в аргументе конструктора реализации должно быть совместимо с теми конструкторами
//  * которые обьявлены выше.
//  * конструктор реализации/импрементации НЕ является публичным то есть тем который вызывается для созданеия
//  *
//  */
//   constructor(ageOrName?: string | number, age?: number) {

//     if (typeof ageOrName === 'string') {
//       this.name = ageOrName;
//     } else if (typeof ageOrName === 'number') {
//       this.age = ageOrName;
//     }
//     if (typeof age === 'number') {
//       this.age = age;
//     }

//   }
// }
// // сигнатуры перезагрузки 1-я)
// const user1 = new User();
// // сигнатуры перезагрузки 2-я)
// const user = new User('Michail');
// // сигнатуры перезагрузки 3-я)
// const user2 = new User(33);
// // сигнатуры перезагрузки 4-я)
// const user3 = new User('Michail', 33);

// console.log('user.name :>> ', user.name);

// ============================== Методы =================================================================

//

// enum PaymentStatus {
//   Holded,
//   Processed,
//   Reversed,
// }

// /**
//  * Поля содержат данные. Возможность изменять данные обеспечивается специальными функциями, являющимися частью класса: методами.
//  */
// class Payment {
//   id: number;
//   status: PaymentStatus;
//   createdAt: Date;
//   updatedAt: Date;

//   constructor(id:number) {
//     this.id = id;
//     this.createdAt = new Date(); /*цвфцвфцвфцвфцвфцвфцв*/
//     this.status = PaymentStatus.Holded;
//   }

//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime();
//   };

//   unholdPayment(): void {
//     if (this.status === PaymentStatus.Processed) {
//       throw new Error('Платеж не может быть возвращен')
//     }
//     this.status = PaymentStatus.Reversed;
//     this.updatedAt = new Date();
//   }
// }

// const payment = new Payment(1);
// payment.unholdPayment();
// const time = payment.getPaymentLifeTime();

// console.log('payment :>> ', payment);
// console.log('timtime :>> ',time);

// ================================= Getter Setter =================================

// // ==================== Пример1 =================
// // /**
// //  * Задача в этом примере присвоения текста "user-" полю объекта user
// //  * Пример
// //  * С точки зрения ООП это не правильно вынесение логики присвоения за пределы объекта
// //  * Все что относится к пользователю должно быть инкапсулировано то есть заложено в скоупе объекта
// //  */
// // class User {
// //   login: string;
// //   password: string;
// // }
// // const user = new User();
// // console.log('user :>> ', user.login = 'user-');

// //  =================== Пример2 ==================

// // /**
// //  * Задача в этом примере присвоения текста "user-" полю объекта user
// //  * Пример через метод объекта
// //  */
// // class User {
// //   login: string;
// //   password: string;

// //   getLogin = (i: string) => this.login = 'user-' + i;

// // }
// // const user = new User();
// // console.log('user :>> ', user.getLogin('login'));

// // ==================== Пример3 ====================

// /**
//  * Задача в этом примере присвоения текста "user-" полю объекта user
//  * Пример через set Сеттер
//  */
// class User {
//   _login: string;/*имена гетторов и сетторов должны отличаться от имен пелей объекта добавим _ перед именем поля*/
//   password: string;
//   /**
//    * @function с приставкой set говорит нам что через эту функцию будет назначено св-во объекту
//    * Через Сеттер происходит назначение полю обьекта _login: user.login = 'login'
//    */
//   set login(i: string) {
//     this._login = 'user-' + i
//   };

//   /*
//    некоторые правила set и get в рамках TS
//    !если нет типизации аргумента set функции то аргумент типизируется согласно возврвщенному типу get функции
//    !можно типизировать аргумент set функции union пример: (string | number)
//    !если в классе нет set функции становится редонли user.login нет взможности модифицировать.
//    !get и set не могут быть асинхронны
//    !set функции не годятся для операций с паролями, лучше использовать методы они могут быть асинхронны async/await
//   */

//   /**
//    * @function c приставкой get говорит нам что через эту функцию будет получение того
//    * что эта функция возвращает находясь в объекте
//    * !get всегда что то должен вернуть(return)
//    *
//    */
//   get login() {
//     return (
//       this._login = 'user-nologin'
//     )
//   }
// };

// const user = new User();
// user.login = 'login';
// console.log('user :>> ', user);/* user :>>  User { _login: 'user-login' } */
// console.log('user.login :>> ', user.login);/* user.login :>>  user-login */

//  =============================== implements/реализует =====================================

// interface ILogger {
//     log(...args: any[]): void;
//     error(...args: any[]): void;
// }
// /**
//  * Имплеминтация реализуется в классах interface создаются для частого переиспользования
//  * могут использоватся как все методы так и не все заложенные в interface
//  * ! при implements методы могут быть асинхронны async/await.
//  * Пример:
//  * async error(...args: any[]): Promis<void> {
//         console.log('...args :>> ', ...args);
//     }
//  */
// class Logger implements ILogger {
//     log(...args: any[]): void {
//         console.log('...args :>> ', ...args);
//     }
//     error(...args: any[]): void {
//         console.log('...args :>> ', ...args);
//     }
// }
// ============================== Пример использования имплеминтации нескольких interface
// /**
//  * Имплеминтация это типизация классов с передачей методов которые описаны в interface
//  * так же работает принцип дополнения св-в интерфейсов через запятую
//  *
//  */
// interface IPayable {
//     pay(paymentId: number): void;
//     price?: number;
// }

// interface Ideletable {
//     delete(): void;
// }

// class User implements IPayable, Ideletable {

//     delete(): void {
//         throw new Error("Method not implemented.");
//     };
//     pay(paymentId: number): void {
//         //
//     }
//     price?: number | undefined;/* не обязательный параметр */

// }

// ============================== Extends/расширяет ====================

// Extends расширение или наследование

// type PaymentStatus = 'new' | 'paid';

// class Payment {
//     id: number;
//     status: PaymentStatus = 'new';

//     constructor(id: number) {
//         this.id = id;
//     }

//     pay() {
//         this.status = 'paid';
//     }
// }
// /**
//  * Рассмотрение примсера class PersistedPayment наследует class Payment
//  * и получает его методы и св-ва тпе же имеет возможность добавления своих
//  * методов и св-в
//  */
// class PersistedPayment extends Payment {
//     databaseId: number;
//     paidAt: Date;
//     /**
//      * переоприделение конструктора должно использоваться с методом super()
//      *
//      */
//     constructor() {
//         const id = Math.random();
//         super(id);
//     }
//     /**
//      * Переопределение методов при наследовании
//      * при так скажем при переиспользовании с нужными нам аргументами получаем ошибку!
//      *
//      * Свойство "pay" в типе "PersistedPayment" невозможно присвоить тому же свойству в базовом типе "Payment".
//      * Тип "(date: Date) => void" не может быть назначен для типа "() => void".
//      *
//      * правильное использование через super нам говорит используй метод в этом классе со своей логикой
//      * для избежания и контроля над методом который может изменится или пропасть из наследования
//      * используется приставка override который покажет ошибку и ссылку на то изменение метода
//      */
//      override pay(date?: Date) {
//         super.pay();
//         if(date) {
//             this.paidAt = date;
//         }
//     }
// }
// /**
//  * при обьявлении через new class PersistedPayment().
//  * имеет всче св-ва class Payment + свои
//  * .databaseId
//  * .id
//  * .status
//  * .databaseId
//  * .paidAt
//  */
// new PersistedPayment().id;

//  =============================== Особенности наследования ==========================
// /**
//  * Порядок выполнения кода при вызове new Admin();
//  * 1) выполняется инициализация свойств классов name: string = 'user';
//  * 2) выполняется constructor(){console.log('this.name :>> ', this.name);}
//  * 3) выполняется инициализация свойства name: string = 'admin";
//  * 4) выполняется constructor(){ super() } говорит нам ну как бы наследование но на этот раз выполняц св-ва этого класса где я прописан)))
//  * 5) выполняется console.log('this.name :>> ', this.name);
//  */
// class User {
//     name: string = 'user';
//     constructor() {
//         console.log('this.name :>> ', this.name);
//     }
// };

// class Admin extends User {
//     name: string = 'admin';

//     constructor() {
//         super()
//         console.log('this.name :>> ', this.name);
//     }
// }

// new Admin();

// // ============================== Наследование от существующих class

// /**
//  * Пример new Error создание кастомного class
//  */
// class HttpError extends Error {
//     code: number;
//     constructor(message: string, code?: number) {
//         super(message);
//         throw this.code = code ?? 500;
//     }
// }

// ============================== Inheritance vs composition =================

// //  Пример проблем и плюсов работы с классами через extends

// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }
// /**
//  * Пример предпологает что мы хотим работать со списком пользователей
//  * extends Array<User> наследуемся от User заводим его в массив
//  */
// class Users extends Array<User> {
//   /**
//    * дополнительный метод (для примера)
//    * @param neme
//    * @returns итог фильтрации
//    */
//   searchByName(neme: string) {
//     return this.filter(user => user.name === neme);
//   }
//   /**
//    * оверайдить
//    */
//   override toString(): string {
//     return this.map(user => user.name).join(', ');
//   }
// }
// const users = new Users();/* !!!Внимание интересно при обьявлении константы users отображаются методы работы с массивами*/

// users.push(new User('Vasya'));/* После пуша стринги переменная получает методы toString, toLocaleString
// для получения из обьекта значения name необходимо оверайдить так скажем этот метод то есть прописывать приставку override
// и return вернет уже значение*/
// users.push(new User('Petya'));

// console.log('object :>> ', users.toString()); /* object :>>  Vasya, Petya */
// // ВЫВОД: ТАК РАБОТАЕТ НАСЛЕДОВАНИЕ МЫ ПОЛУЧИЛИ СМЕШИВАНИЕ ЛОГИКИ КОГДА НАМ НЕ НУЖНО В КЛАССЕ РЕАЛИЗОВЫВАТЬ ПОЛУЧЕНИЕ ЗНАЧЕНИЙ НО
// // МЕТОДЫ ПОЯВИЛИСЬ И БУДУТ БЫТЬ:) ТАМ ГДЕ ОНИ СОВСЕМ НЕ НУЖНЫ. СЛЕДУЮЩИЙ ПРИМЕР ПОКАЖЕТ В ЧЕМ ХОРОША КОМПОЗИЦИЯ

// /**
//  * Компазиция при обьявлении переменной const usersList = new UsersList();
//  * вызов usersList. покажет что данная переменная имеет возможность работать только с двумя методами
//  * users и push
//  */
// class UsersList {
//   users: User[];

//   push(u: User) {
//     this.push(u)
//   };
// }
// const usersList = new UsersList();
// usersList.push
// // =================================== Еще пример ===================================
// /**
//  * Некие данные
//  * для большего ужаса со своей доменной областью ))
//  */
// class Payment {
//   date: Date;
// }
// /**
//  * Плохой пример
//  */
// class UserWithPayment extends Payment {
//   name: string;
// }
// /**
//  * Хороший пример который тянет только то что мы позволим тянуть
//  */
// class UserWithPayment2 {
//   user: User;
//   payment: Payment;

//   constructor(user: User, payment: Payment) {
//     this.user = user;
//     this.payment = payment;
//   }
// }

// ============================== Видимость св-в =============================
/**
 * Свойства видимости: свойства private и protected так же работают и с методами
 */
// class Vehicle {
//   make: string; /* Публичное св-во, аналогичная запись с приставкой public make: string и доступно для изменений из вне new Vehicle().make = 'b';*/
//   private damage: string[]; /* приватное св-во закрыто для изменений из вне то есть при вызове обьекта синтаксис точки не покажет это св-во как имеющееся.
//         Приватным св-вам доступны изменения только внутри класса. Пример метод addDamages()
//      */

//   private _model: string; /* Пример приватного свойства во взаимодействии через get и set */

//   protected run: number;/* Третий модификатор св-в protected  */

//   #price: number; /* Еще один способ указать приватность но ужа по правилу JS, перед свойством обозначается решотка #. Это приватное поле родолжает быть
//   приватным даже после компеляции*/

//   /**
//    *
//    */
//   set model(model: string) {
//     this._model = model;
//   }
//   /**
//    * Через get вполне можно изменять privat свойство обьекта
//    * Метод доступен при обьявлении обьекта const modelVehicle = new Vehicle(); modelVehicle.model = 'UAZ'
//    */
//   get model() {
//     return this._model
//   }
// /**
//  * @function провиряет эквивалентность св-в внутренней #price и такого же приватногоJS свойства другого обьекта #price
//  * для примера взят обьект Vehicle эмитирует внешний обьект
//  * @param v object
//  */
//   isPriceEqual(v: Vehicle){
//     return this.#price === v.#price
//   }

//   /**
//    * @function addDamages может изменить приватное св-во damage
//    * @param damage : string
//    */
//   addDamages(damage: string) {
//     this.damage.push(damage);
//   };
// };
// /**
//  * class EuroTruck какойто еврогрузовик наследуется от Vehicle
//  * он наследует только публичные св-ва обьекта так же метод get и set
//  * приватные ему не доступны.
//  * наследуется так же свойство protected run: number; и может быть изменино внутри класса родителя
//  * так же и в классе его наследующего. Не доступно к изменению из вне.
//  */
// class EuroTruck extends Vehicle {
//   /**
//    * то что доступно при наследовании
//    * this.setDamage
//    * this.make
//    * this.model
//    * this.addDamages
//    */
//   setDamage() {
//     this.model
//   }
//   /**
//    * @function пересчитывает км в мили и присваевая значению run которое унаследовано от Vehicle
//    * @param km: number
//    */
//   setRun(km: number) {
//     this.run = km / 0.62;
//   }
// }
// ============================================= class Корзина товаров ========================================

// class Product {
//   constructor(
//     public id: number,
//     public title: string,
//     public price: number,
//   ) { }
// };

// class Delivery {
//   constructor(
//     public date: Date,
//   ) { }
// }

// class HomeDelivery extends Delivery {
//   constructor(date: Date, address: string) {
//     super(date)
//   }
// }
// class ShopDelivery extends Delivery {
//   constructor(addressId: number) {
//     super(new Date)
//   }
// };

// type DeliveryOptions = HomeDelivery | ShopDelivery;
// class Card {
//   private products: Product[] = [];
//   private delivery: DeliveryOptions;

//   public addProduct(produc: Product): void {
//     this.products.push(produc)
//   }

//   public deleteProduct(producId: number): void {
//     this.products = this.products.filter((p: Product) => p.id !== producId)
//   }

//   public getSumm(): number {
//     return this.products.map((p: Product) => p.price).reduce((p1: number, p2: number) => p1 + p2);
//   }

//   public setDelivery(delivery: DeliveryOptions) {
//     this.delivery = delivery;
//   }

//   public checkOut() {

//     if (this.products.length === 0) {
//       throw new Error('Нет товаров в корзине')
//     }

//     if (!this.delivery) {
//       throw new Error('Не указан способ доставки')
//     }
//     return { success: true }
//   }
// }

// const card = new Card();
// card.addProduct(new Product(1, 'Печенье', 50));
// card.addProduct(new Product(2, 'Пряник', 50));
// card.addProduct(new Product(3, 'Печенье', 50));
// card.deleteProduct(1);
// card.checkOut()

// console.log(' card.:>> ', card.getSumm());

// // ============================== СТатические свойства =============================

// /**
//  * class для примера типа сервис юзера которого мы вытаскиваем
//  * поле с приставкой статик
//  * 1) для доступа не требуют создания инстанса через new то есть синтаксис таков UserService.db
//  * 2) static св-во может быть приватным или защищенным private/protected static db: any;
//  * 3) static может быть и метод static getUser()
//  */
// class UserService {
// /**
//  * статикам запрещено использовать зарезервированные имена полей
//  * Статическое свойство "name" конфликтует со встроенным свойством "Function.name" функции-конструктора "UserService".
//  */
//   // static name: string = "UserService";

//   static db: any;
// /**
//  *
//  * @param id
//  * @returns UserService.db.findDyId(id); такой синтаксис обращается не к инстансу через this а к статическому св-ву db
//  *
//  */
//   static getUser(id: number) {
//     return UserService.db.findDyId(id);
//   }
// /**
//  * через конструктор можно задать данные только для инстанса
//  * @param id
//  */
//   constructor(id: number){}
// /**
//  * можно обращатся из нестатических матодов к статическим методоам внутри обьекта
//  */
//   create() {
//     UserService.db
//   }
//   /**
//    * Статик блок
//    * в блоке происходет выполнение кода сразу после обьявления класса
//    * в блоке не могут исползоваться асинхронные задачи но async выполним вне блока в статистисеском св-ве
//    * Пример static async getUser(id: number){}
//    */
//   static {
//     UserService.db = 'string'
//   }
// }

// const inst = new UserService(1);
// inst.create();

// ========================================= РАбота с This ======================================================

// /**
//  * В этой теме контролим контекст
//  * @methot getDate() использует приватный метод класса
//  *
//  */
// class Payment {

//     private date: Date = new Date();
//     /**
//      * @returns private date: Date = new Date();
//      * @param this: Payment позволит создать ошибку потери контекста
//      */
//     getDate(this: Payment) {
//         return `'class Payment:>>' ${this.date}`;
//     }
//     /**
//      * Еще способ при котором можно сохранить контекст использование стрелчной функции
//      * где бы не была вызвана эта функция она сохранит контекст того обьекта или класса в котором была создана
//      * @returns 'class Payment getDateArrow:>>' ${this.date}
//      * с стрелочной функцией может возникнуть проблема при наследовании класса от класса
//      */
//     getDateArrow = () => {
//         return `'class Payment getDateArrow:>>' ${this.date}`;
//     }

// }

// const payment = new Payment();
// /**
//  * В этом обьекте обращаемся к методу класса получаем не коректные данные, user :>>  'class Payment:>>' undefined
//  * Для получения доступа к данным из класса нужно сохранить контекст данного класса
//  * метод для сохранения контекста класса .bind(payment) в скобки вписывается тот класс или обьект контекст которого
//  * хотим сохранить что бы получить доступ к св-вам или методам этого класса
//  */
// const user = {
//     id: 1,
//     paymentDate: payment.getDate.bind(payment),
// }

// // console.log('Payment :>> ', payment.getDate());/*Payment :>>  2022-08-21T12:16:20.819Z*/
// // console.log('user :>> ', user.paymentDate()); /*user :>>  'class Payment:>>' Sun Aug 21 2022 19:23:03 GMT+0700 (Новосибирск, стандартное время)*/

// class PaymentPersistent extends Payment {
//     /**
//      * super.getDateArrow(); выбрасывает ошибку
//      * super.getDate(); дает корректные данные
//      * @returns
//      */
//     save() {
//         return super.getDate();
//     }
// }
// console.log('PaymentPersistent :>> ', new PaymentPersistent().save());

// ============================== Типизация this =========================================
// /**
//  * Привет класса по типизации this.
//  */
// class UserBuilder {
//     name: string;
// /**
//  * @function метод обьета по присвоению имени и возврату контекста этого обьекта то есть этого обьекта
//  * @param name type string
//  * @returns обьект UserBuilder
//  */
//     setName(name: string): this {
//         this.name = name;
//         return this
//     }

//     isAdmin(): this is AdminBuilder {
//         return this instanceof AdminBuilder;
//     }
// }
// /**
//  * Type Guards/тип охранников
//  * позволит точно определить кем является тот или иной обьект при наследовании
//  * полезное если убрать поле roles: string[]; тогда будет определено что обьекты идентичны и
//  * строка 1908  покажет let user: UserBuilder | AdminBuilder так нет определение какой именно это обьект
//  */
// class AdminBuilder extends UserBuilder {
//     // roles: string[];
// }

// const res = new UserBuilder().setName('Michail');
// console.log('res :>> ', res); /*res :>>  UserBuilder { name: 'Michail' }*/
// const res2 = new AdminBuilder().setName('AdminMichail')

// let user: AdminBuilder | UserBuilder = new UserBuilder();

// if(user.isAdmin()) {
//     console.log('user: AdminBuilder :>> ', user);
// } else {
//     console.log('user: UserBuilder ', user);
// }

// =============================== Абстрактные классы =================================
// /**
//  * абстрактные слассы обьявляются приставкой abstract
//  * так же могут содержать обычные и абстрактные методы и св-ва
//  * абстрактные классы нельзя инстанцировать чепрез new Controller();
//  */
// abstract class Controller {
//     abstract handle(req: any): void;
//     /**
//      * обычный метод то-есть не абстрактный
//      * @param req
//      */
//     handleWithLogs(req: any) {
//         console.log('Start');
//         this.handle(req);/* таже есть доступ к внутреннму абстрактному методу */
//         console.log('End');
//     }
// }
// /**
//  * при наследовании от абстрактного класса нужно имлиментить его абстрактные методы и св-ва иначе будет ошибка
//  * имплементация абстрактного метода  handle(req: any): void {}
//  * после создания класса который отнаследовал абстрактный класс сласс можно инстанцировать new UserController();
//  */
// class UserController extends Controller {
//     handle(req: any): void {
//         console.log('req :>> ', req);
//     }
// }

// new UserController();
// const c = new UserController();
// /**
//  * после инстанциирования теперь доступны в константе с методы как абстрактные так и обычные
//  * c.handleWithLogs
//  * c.handle
//  */
// c.handleWithLogs('Request');
// ============================== Упражнение

// abstract class Logger {
//     abstract log(message: string): void;

//     printDate(date: Date){
//         this.log(date.toString());
//     }
// }

// class MyLogger extends Logger {
//     log(message: string): void {
//         console.log(message);
//     }

//     logWihtData(message: string) {
//         this.printDate(new Date());
//         this.log(message);
//     }
// }
// const logger = new MyLogger();
// logger.logWihtData('My message');

// ================================================================== Новая глава ================================================================================================

/*Компелятор TypeScript*/
/* Проект TS начинается с файла tsconfig.json */

/**
 * настройки конфига по выбору файлов для компеляции
 * 1) Настройка принемает массив с именами файлов котрые нужно кмпелировать "files" [ "app.ts" ]
 * 2) Настройка принемает массив c именами паттернов
 * "include":[
 *    "/my-folder/app*" указывает на конкретную папку после на файл который обязательно начинается на app что после не имеет значения
 * все файлы будут скомпелированы которые находятся в этой папке
 * так же есть синтаксис который отвечает за обозначение "любой папки" двойная звездочка **
 *  ]
 * 3) Исключает файлы или даже целые папки из потока компеляции
 * "exclude" [
 *    "app.ts"
 * ]
 * 4)"extends": "./" Настройка определяет путь до другого конфига из которого берет настройки и добавляет или переопределяет
 * настройки конфига из которого поступила эта команда
 */
/*
{
    "compilerOptions": {
    },

    "files":[

    ]
}
*/
/* Две полезные настройки для например легаси проекта который не полностью на TS для включения файлов с кодом на JS в общую компеляцию
используют две команды конфига
"allowJs": true,
"checkJs": true,
 */

// ====================================== Вывод компиляции ================================================

/* Настройки в tsconfig.json для вывода компеляции. Описаны нужные и популярные настройки конфига
Секция Emit
    настройка параметр "outDir": "./build/" - создаст папку build и поместит в нее скомпелированные со всей структурой проекта файлы js
    настройка параметр "removeComments": true, - при компеляции удалит все коментарии в коде
    настройка параметр "noEmit": true - отключает отправку файлов из компиляции
    настройка параметр "noEmitOnError": true - отключает отправку файлов при появлении сообщений о каких-либо ошибках проверки типов
    настройка параметр "sourceMap": true - создает при компеляции файлы js.map который связывает компелируемый ts файл с скомпелированным файлом
        js указывая строку ошибки в ts файле
    настройка параметр "inlineSourceMap": true - Включите файлы sourcemap в исходящий JavaScript в виде комментария НЕ отправляется в продакшен! Нужно для dev для отловли бвгов на пример.
    настройка параметр "inlineSources": true, - Включите исходный код в исходные карты внутри создаваемого JavaScript НЕ отправляется в продакшен! Нужно для dev для отловли бвгов на пример.
    настройка параметр "sourceRoot": "", - Укажите корневой путь для отладчиков, чтобы найти ссылочный исходный код.
    настройка параметр "mapRoot": "",- Укажите местоположение, в котором отладчик должен размещать файлы карты вместо сгенерированных местоположений.
    настройка параметр "declaration": true, - Генерируйте файлы .d.ts из файлов TypeScript и JavaScript в вашем проекте они описывают работу js с точки зрения TS.
    настройка параметр "declarationMap": true, - Создайте исходные карты-связь для файлов d.ts.
    настройка параметр "emitDeclarationOnly": true, Выводит только файлы d.ts, а не файлы JavaScript.
    настройка параметр "declarationDir": "./", Укажите выходной каталог для сгенерированных файлов деклараций.
    @internal пишется в формате коментария слеш звездочка @internal звездочка слеш перед кодом который исключается при компеляции может все сломать ОСТОРОЖНО!
        для работы нужна настройка tsconfig.json
            stripInternal": true, - Отключите отправку объявлений, которые имеют "@internal" в своих комментариях JSDoc.
    "preserveConstEnums": true, Отключите удаление объявлений const enum в сгенерированном коде.
 */
// ======================================  Язык и окружение/Language and Environment =================================================

/* Блок настройки tsconfig.json Language and Environment
    "target": "es2016", - Установите языковую версию JavaScript для испускаемого JavaScript и включите объявления совместимых библиотек.
    "lib": [],  Укажите набор файлов объявления библиотеки, которые описывают целевую среду выполнения.
        принемает массив названий библиотек , например можно при работе в ноде не нужен "DOM" его моно не вносить и он не будет доступен
        ну и куча всего. По умолчанию включает всебя почти все , так же можно добавлять библиотеки более поздние чем указано в "target":es2016
    Настройки с преставкой jsx относятся к React и его вариантам
    "noLib": true, Отключить включение любых файлов библиотеки, включая библиотеку по умолчанию.d.ts.
    "useDefineForClassFields": true, Выдает поля класса, совместимые со стандартом ECMAScript. очень редкая опция
 */

//  =============================== Модули/Modules =============================================================================

/* Блок настройки tsconfig.json Modules
Настройки
    "module": "commonjs", - Укажите, какой код модуля генерируется.
    "rootDir": "./", - Укажите корневую папку в ваших исходных файлах.
    "baseUrl": "./", - Укажите базовый каталог для разрешения не относительных имен модулей для импорта.
        "paths"{ - Укажите набор записей, которые повторно сопоставляют импорт с дополнительными местоположениями поиска.
            @lib: ["./lib/my-lib"]
        }
        теперь импорт будет выглядить import {что то} from "@lib/что то"
    "rootDirs": [], - Разрешить обработку нескольких папок как одной при разрешении модулей.
    "typeRoots": [], /* Укажите несколько папок, которые действуют как './node_modules/@types'. переопределяет дефолтный путь './node_modules/@types'
    в которых будет искать дополнительные типы из наших библиотек
    "типы": [], - Укажите имена пакетов типов, которые будут включены без ссылок в исходном файле.
    "resolveJsonModule": true, /* Включить импорт файлов .json. Прреобразует json файлы в обьекты частая полезная опция
*/
//    ======================================= строгий режим "strict": true,  =====================================
/* 
"strict": true, - Включите все параметры строгой проверки типов.
    "noImplicitAny": true, /* Включить сообщение об ошибках для выражений и объявлений с подразумеваемым типом "any" требует явную типизацию (a:any).
        function test{

    }
    "strictNullChecks": true, - При проверке типа учитывайте "null" и "undefined".
        function test2(a:number): number | undefined{
        if(a > 0) {
           return a
        }
         return undefined  не явный undefined 
    }
    "strictFunctionTypes": true, - При назначении функций убедитесь, что параметры и возвращаемые значения совместимы с подтипами.
    Организует ошибку:
    Тип "(a: number) => number" не может быть назначен для типа "StrOrNumFunc".
  Типы параметров "a" и "a" несовместимы.
    Тип "string | number" не может быть назначен для типа "number".
      Тип "string" не может быть назначен для типа "number".ts(2322)

        function test2(a: number): number {
            return a
        }
        type StrOrNumFunc = (a: number | string) => number

        let f: StrOrNumFunc = test2

        f("string")
    "strictBindCallApply": true, - Проверьте, чтобы аргументы методов 'bind', 'call' и 'apply' соответствовали исходной функции.
    "strictPropertyInitialization": false, - Проверьте наличие свойств класса, которые объявлены, но не заданы в конструкторе.
    "noImplicitThis": true, - Включить сообщение об ошибках, когда "this" присваивается тип "any".
    "useUnknownInCatchVariables": true, - Переменные предложения catch по умолчанию как "неизвестные  'unknown' " вместо "любых 'any'".
    "alwaysStrict": true, - Убедитесь, что "use strict" всегда выдается.
*/

// ================================================= checking the code/Проверки кода ================================================

// /**
//  * Пример1
// * Настройки улучшения кода но не являющиееся "strict" режимом     
//  */
// class User {
//     name: string
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// /**
//  *"noUnusedLocals": true, - Включить сообщение об ошибках, когда локальные переменные не считываются.
//  * const defaultUsere = new User('defaultUser'); Свойство "defaultUsere" объявлено, но его значение не было прочитано.ts(6133)
//  * !Нужно быть аккуратно на пример с невер где нужна переменная которая не используется то этот варенник можно игнорить коментарием
//  * который исключает из TS следующую строчку @ts-ignore
//  */
// function createUser() {
//     // какая то логика
//     const defaultUsere = new User('defaultUser');
// }

// //"noUnusedParameters": true, - Выдает ошибку, когда параметр функции не считывается.
// /**
//  * Пример2
//  * Сокращенная запись Примера1
//  * constructor(public name: string) если в конструктор в аргумент прописать приставку public 
//  * то автомачиески аргумент прописывается в свойства как публичное
//  */
// class User {
//     constructor(private name: string) {
//         this.name = name;
//     }
// }

// // "exactOptionalPropertyTypes": true, - Интерпретируйте необязательные типы свойств так, как написано, а не добавляйте "undefined".

// /**
//  * Пример3
//  */
// class User {

//     role?: 'admin' | 'user'

//     constructor(private name: string) {
//         this.name = name;
//     }
// }

// function createUser(user: User) {
//     // логика
//     const defaultUser = new User('Michail');
//     defaultUser.role = undefined; /* Невозможно назначить тип "undefined" типу ""admin" | "user"", когда свойство "exactOptionalPropertyTypes" имеет значение "true". */
// }

// // "noFallthroughCasesInSwitch": true, 
// /* Включить отчет об ошибках для случаев сбоя в операторах switch. Сообщит об отсутствии return или break
// Случай передачи управления в операторе switch.ts(7029)
// */

// class User {

//     role?: 'admin' | 'user'

//     constructor(private name: string) {
//         this.name = name;
//     }
// }

// function createUser(user: User) {
//     // логика
//     const defaultUser = new User('Michail');
//     defaultUser.role = "admin";

//     switch(user.role){
//         case 'admin' :
//             const a = 7;

//         case 'user' :
//             return;
//     }
// }

// "allowUnreachableCode": true,
/* Отключите сообщение об ошибках для недоступного кода.
const a = 1; Невозможно повторно объявить переменную "a" с областью видимости "Блок".ts(2451)
 */

// class User {

//     role?: 'admin' | 'user'

//     constructor(private name: string) {
//         this.name = name;
//     }
// }

// function createUser(user: User) {
//     // логика
//     const defaultUser = new User('Michail');
//     defaultUser.role = "admin";

//     switch(user.role){
//         case 'admin' :
//             const a = 7;

//         case 'user' :
//             return;
//             const a = 1;
//     }
// }

// // "noUncheckedIndexedAccess": true, 
// /* Добавьте 'undefined' к типу при обращении с использованием индекса.

// */

// interface IChecks {
//     [check: string]: boolean;
// }

// const c: IChecks = { 'kpp': true };/* обьет не содержит 'drive' */
// const d = c['drive']; /* при включенном noUncheckedIndexedAccess": true. типизация покажит, что является правильной типизацией const d: boolean | undefined 
//     так как значение является строкой но не содержит конкретное значение 'drive следовательно можт быть undefined'
// */ 