// typeof acts a little different in typescript

const person = {
	name: 'Todd',
	age: 27
};

// anonymous type
type Person = typeof person; // type query
type PersonKeys = keyof Person; // name | age

type PersonTypes = Person[PersonKeys]; // types

const anotherPerson: Person = {
	name: 'John',
	age: 30
};

// JavaScript
// typeof person // 'object'
