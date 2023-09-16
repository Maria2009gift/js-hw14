"use strict"

// =====1=====

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

user.mood = "happy"
user.hobby = "skydiving"
user.premium = false

for (const i of Object.keys(user)) {
    console.log(i, ":", user[i])
}

// =====2=====

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
// Функція повертає число — кількість властивостей.

const lenght = {
    mail: 'poly@mail.com', 
    isOnline: true, 
    score: 500
}

function countMet(obj) {
    return console.log(Object.keys(lenght).length)
}

countMet(lenght)

// =====3=====

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = ''
  
    for (const employee in employees) {
      const tasksCompleted = employees[employee]
      if (tasksCompleted > maxTasks) {
        maxTasks = tasksCompleted
        bestEmployee = employee
      }
    }
  
    console.log("Найкращий працівник:", bestEmployee)}

findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
})

// =====4=====

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її.
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary(employees) {
    let maxSalary = 0;

    let salary = Object.values(employees)
    for (const i of salary) {
        maxSalary += i
    }  
    console.log(maxSalary)
}

countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
})

// =====5=====

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products5 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
]

function getAllPropValues(arr, prop) {
    for (const i of arr) {
        console.log(i[prop])
    }
}

getAllPropValues(products5, "name")

// =====6=====

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
]

function calculateTotalPrice(allProdcuts, productName) {
    let allPrice = 0

    for (const product of allProdcuts) {
        if (product.name === productName) {
          allPrice += product.price * product.quantity;
        }
      }
      console.log(allPrice)
}

calculateTotalPrice(products, 'Радар')

