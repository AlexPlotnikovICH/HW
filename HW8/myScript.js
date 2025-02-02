// 1
function num(x, y = 7){
	return x + y;
}
console.log(num(11));

// 2
const num2 = [7, 13, 15, 9, 3, 5];
const calculateSum = (array) => {
	let sum = 0
	for (let a = 0; a < array.length; a++) {
		sum += array[a];
	}
	return sum;
}
console.log(calculateSum(num2));

// 3
let students = [   //создаю массив
	{ name: 'Alex', age: 19, course: '1-course' }, //заполняю значения массива
	{ name: 'Anna', age: 22, course: '2-course' },
	{ name: 'Anton', age: 23, course: '3-course' },
	{ name: 'Tina', age: 22, course: '2-course' },
]
let studInfo = student => { //стрелочеая функция 
	console.log( `Имя: ${student.name}, Курс: ${student.course}, Возраст: ${student.age}`//интерполяция срок для вывода объекта и свойстив
	)
} 
students.forEach(studInfo) //вывод в концоль через метод forEach