let firstName = "Alex";
let lastName = "Plotnikov";
let greeting = firstName + ' ' + lastName;
console.log(greeting);
// ----------------------------------------

let month = 3;
let season;
if (month === 12 || month === 1 || month ===2){
    season = "Zima"}
else if (month >= 3 && month <=5){
    season = "Vesna"}
else if (month >= 6 && month <=8){
    season = "Leto"}
else if (month >=9 && month <=11){
    season = "Osen'"}
else { 
    season = "FALSE DATE"}
    console.log(season);
// ----------------------------------------

let sentencePart1 = "Чем усерднее я учусь,";
let sentencePart2 = "тем впечатляющее выглядит результат!";
let completeSentence = sentencePart1 + ' ' + sentencePart2;
console.log(completeSentence);
// -----------------------------------------

let dayOfWeek = 8;
switch (dayOfWeek) {
	case 1:
		console.log('Понедельник');
		break;
	case 2:
		console.log('Вторник');
		break;
	case 3:
		console.log('Среда');
		break;
	case 4:
		console.log('Четверг');
		break;
	case 5:
		console.log('Пятница');
		break;
	case 6:
		console.log('Суббота');
		break;
	case 7:
		console.log('Воскресение');
		break;
    default:
        console.log ("Укажите значения от 1-7!!!");
}
