// typeof acts a little different in typescript

const person = {
	name: 'Todd',
	age: 27
};

// anonymous type
type Person = typeof person; // type query
type PersonKeys = keyof Person; // name | age
type PersonTypes = Person[PersonKeys]; // types

// generic types T and K
// lookup type
function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
	name: 'John',
	age: 30
};

// JavaScript
// typeof person // 'object'
