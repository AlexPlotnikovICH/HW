// 1
const arr = ['ab', 'bc', 'cd', 'ac', 'ad'];

for(let i = 0; i< arr.length; i++) {
	console.log(arr[i]);
} 

// 2
const arr2 = [7, 13, 8, 20, 55, 11, 32, 6, 22, 4, 1, 0, 16];

for (let x = 0; x < arr2.length; x++) {
	if (arr2[x] < 20 && arr2[x] > 8) {
	console.log(arr2[x]);
	} 
}

// 3
const arr3 = [256, 356, 5897, 164, 256, 297, 675, 104, 381];

let minimum = arr3 [0];
for (let m = 1; m < arr3.length; m++){
	if (arr3[m] < minimum){
		minimum = arr3[m];
	}
}
console.log("MIN:", minimum);

// 4*
let arr4 = [70, 33, 895, 665, 456, 321, 147];
let newIndex = 3;
let newValue = 666;
arr4[newIndex] = newValue
console.log(arr4)

// 5*
const arr5 = ['пляж', 'солнце', 'море', 'отель', 'шашлыки', 'туриститческая путевка'];
let Word = arr5[0];
	for (let i = 1; i < arr5.length; i++){
		if (arr5[i].length > Word.length){
			Word = arr5[i];
		}
	}
	console.log("самое длинное слово в массиве - ", Word);






