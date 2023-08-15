// # Задача 2

// Напишіть функцію, яка приймає об'єкт, який містить інформацію про користувача -
// ім'я, прізвище, електронну пошту та номер телефону. Функція повинна
// використовувати деструктуризацію для отримання імені та прізвища користувача та
// об'єкту, який містить електронну пошту та номер телефону. Функція повинна
// повертати новий об'єкт, який містить імена та прізвище користувача, а також
// масив, який містить електронну пошту та номер телефону користувача.

// Крім того, використовуйте spread та rest оператори, щоб додати додаткові
// елементи до масиву з електронною поштою та номером телефону.

// ```javascript
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  phone: '+1234567890',
};
// ```

function getUserInfo(obj){
  const {firstName , lastName, email, phone} = obj
  const newObject= {
    firstName, lastName,
    contact : []
  }
  const contactInfo = [email, phone]
  newObject.contact.push(...contactInfo)
  return newObject
}

console.log(getUserInfo(user)); 
