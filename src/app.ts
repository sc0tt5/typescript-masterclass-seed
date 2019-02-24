// typeof acts a little different in typescript

const person = {
	name: 'Todd',
	age: 27
};

// anonymous type
type Person = typeof person; // type query

const anotherPerson: Person = {
	name: 'John',
	age: 30
};

// JavaScript
// typeof person // 'object'
