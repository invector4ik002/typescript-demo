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


enum PaymentStatus {
  Holded,
  Processed,
  Reversed,
}
class Payment {
  id: number;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;

  constructor(id:number) {
    this.id = id;
    this.createdAt = new Date();
    this.status = PaymentStatus.Holded;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  };

  unholdPayment(): void {
    if (this.status === PaymentStatus.Processed) {
      throw new Error('Платеж не может быть возвращен')
    }
    this.status = PaymentStatus.Reversed;
    this.updatedAt = new Date();
  }
}

const payment = new Payment(1);
payment.unholdPayment();
const time = payment.getPaymentLifeTime();

console.log('payment :>> ', payment);
console.log('timtime :>> ',time);