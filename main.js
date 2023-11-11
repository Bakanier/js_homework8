let person = {
    name: 'Beka',
    age: 21,
    gender: 'Мужской',
    city: 'Бишкек'
}

let { name, age, gender, city } = person

console.log('Имя:', name)
console.log('Возраст:', age)
console.log('Пол:', gender)
console.log('Город:', city)


const numbers = [1, 2, 3, 4, 5]


const [firstNumber, , , , lastNumber] = numbers

console.log('Первый элемент:', firstNumber)
console.log('Последний элемент:', lastNumber)


function getPersonInfo(personObject) {
    const { name, age } = personObject
    return { name, age }
}

const person1 = {
    name: 'Polina',
    age: 18,
    gender: 'Женский',
    city: 'Сумы'
}
  
var personInfo = getPersonInfo(person1)

console.log('Имя:', personInfo.name)
console.log('Возраст:', personInfo.age)


let a = 10
let b = 20;

[a, b] = [b, a]

console.log('a после обмена:', a)
console.log('b после обмена:', b)


const company = {
    name: 'Bandai Namco',
    address: '5-37-8, Сиба, Минато-кю, Токио, Япония',
    employees: [
      { name: 'Uluk', position: 'Разработчик' },
      { name: 'Amir', position: 'Дизайнер' }
      
    ]
}

let { name: companyName, employees: [{ name: firstEmployeeName }] } = company;

console.log('Название компании:', companyName);
console.log('Имя первого сотрудника:', firstEmployeeName);
  

let students = [
    { name: 'Влад', age: 21 },
    { name: 'Анвар', age: 20 },
    { name: 'Жетиген', age: 21 },
    { name: 'Бекназар', age: 21 },
    { name: 'Юрий', age: 21 },
    { name: 'Максат', age: 20 },
    { name: 'Ильяс', age: 22 },
    { name: 'Улукбек', age: 22 },
]

for (var student of students) {
    let { name, age } = student;
    console.log(`Имя студента: ${name}, Возраст: ${age}`);
}
  