// mapped type

interface Person {
	name: string;
	age: number;
}

const person: Person = {
	name: 'Todd',
	age: 27
};

// make this person immutable
// T is a generic type
function freezePerson<T>(obj: T): Readonly<T> {
	return Object.freeze(obj); // freeze creates readonly
}

const newPerson = freezePerson(person);
// newPerson.age = '30'; // this won't work because of readonly

// this is what it would look like if we wrote our own readonly
type MyReadonly<T> = {
	readonly // keyof returns a string union
	[P in keyof T]: T[P]
};

function myFreezePerson<T>(obj: T): MyReadonly<T> {
	return Object.freeze(obj); // freeze creates readonly
}
