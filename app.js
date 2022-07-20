"use strict";
// Простые типы
// let revenue: number= 1000;
// let bonus: number= 500;
const user = {
    name: 'Michail',
    email: 'Michail@mail.ru',
    login: 'Michail123',
};
/**
 * @function дана для рассмотрения примера использования Type Guard;
 * Ниже обьявлена функция isString() которая подставляется в блок if для проверки на типов
 * @param id Union
 *
 */
function logId(id) {
    if (typeof id === 'string') {
        console.log('id: string :>> ', id);
    }
    else if (typeof id === 'number') {
        console.log('id: number :>> ', id);
    }
}
/**
 * Приметивный пример Type Guard
 * что то напоминает кастомный хук который используется для экономии количества кода
 * основная идея переиспользования для сжатия типов
 * @param x string
 * @returns
 */
function isString(x) {
    return (typeof x === 'string');
}
// ============================== Пример использования Type Guard c union интерфейсов ===========================
/**
 * @function выполняет проверку на ноличие поля role у обьекта user
 * функция спрашивает является ли user isAdmin/админом имея или не имеет поле 'role'
 * таким образом сжимая интерфейсы до нужного типа
 * @param user
 * @returns
 */
function isAdmin(user) {
    return 'role' in user;
}
// console.log('isAdmin :>> ', isAdmin(user));
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('user не является админестратором');
    }
}
// console.log('isAdmin :>> ', setRoleZero(user));
setRoleZero(user);
