// 1
const persone = {
	name: "Alex",
	age: 36,
};
console.log(`Name: ${persone.name}, Age:${persone.age}`);

// 2
const book = [
	{ titel: 'Властелин колец', author: 'Джон Толкин' },
	{ titel: 'Цитаты', author: 'Мао Цзе-Дун' },
	{ titel: 'Гарри Потер', author: 'Джоан Роулинг' },
	{ titel: 'Код да Винчи', author: 'Дэн Браун' },
	{ titel: 'Думай и богатей', author: 'Наполеон Хилл' },
];
book.forEach(book => {
console.log(`Название книги: ${book.titel}, Автор: ${book.author}`);
});

// 3
const rechteck = {a:10, b:35};
rechteck.s = rechteck.a * rechteck.b;
rechteck.p = (rechteck.a + rechteck.b) * 2;
console.log(rechteck);

//4
let fruits = [
	{name: 'ананас', color:'желтый'} ,
	{name: 'арбуз', color:'красный'} ,
	{name: 'абрикос', color:'желтый'} ,
	{name: 'айва', color:'красный'} ,
	{name: 'алыча', color:'желтый'} ,
]
const redFruits = fruits.filter(fruit => fruit.color === 'красный'); 
redFruits.forEach(fruit => console.log(fruit.name));

// 5
let playlist = {
	bestRock: [
		{
			name: 'Bohemian Rhapsody',
			artist: 'Queen',
		},
		{
			name: 'Smells Like Teen Spirit',
			artist: 'Nirvana',
		},
		{
			name: 'Yesterday',
			artist: 'The Beatles',
		},
		{
			name: 'Smoke on the Water',
			artist: 'Deep Purple',
		},
	],
}
playlist.bestRock.forEach(bestRock => {
	console.log(`Название песни: ${bestRock.name}, Исполнитель: ${bestRock.artist}`)
})