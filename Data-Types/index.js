// 1) String
let age = "20" // String

// convertation types
let newage = Number(age) //Number

// 2) Number

// let age = 20 // Number

// let name = "Salom"+20 //Salom20 

console.log("type of age before convert: "+ typeof(age))
console.log("type of age after convert: "+ typeof(newage))

// console.log("name: ", name);

// 3) Boolean

// true
// false

// 4) Array

let students = [
    "Anusha",
    "Navruz",
    "Navruz1",
    "Navruz2",
    "Navruz3",
    "Navruz4",
]

let prices = [
    2, 3, 400, 500
]
console.log(students[4]);

// 5) Object

let products = {
    "gelos": "Одежды",
    "korvon": "Всё есть",
    "defacto": "Что-то"
}

let cherry1 = {
    "testy": "Sweet",
    "color": "Red"
}


let cherry2 = {
    "testy": "Sweet",
    "color": "Darkblue"
}

let vegetables = []


console.log("Vegetables has "+vegetables.length +" elements");


// vegetables.length Возвращает длину массива
// vegetables.push(some element) Добавляет новый элемент в массив 
// vegetables.pop(some element) Удаляет последнего элемента

vegetables.push(cherry1)
vegetables.push(cherry2)

console.log("Vegetables has "+vegetables.length +" elements");

vegetables.pop(cherry1)

console.log("Vegetables has "+vegetables.length +" elements");
