// required mapped type and modifiers
// ...opposite of partial type
interface Person {
	name: string;
	age?: number;
}

// create custom map type
// this is to demo the required type...same as below
type MyRequired<T> = {
	-readonly // if any are optional readonly then remove with minus
	// if any are optional then remove question mark with minus
	// minus modifier new to TS 2.8
	[P in keyof T]-?: T[P]
};

function printAge(person: Required<Person>) {
	return `${person.name} is ${person.age}`;
}

const person: Required<Person> = {
	name: 'Todd',
	age: 27
};

const age = printAge(person);
