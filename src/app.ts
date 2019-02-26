// mapped type -- partial

interface Person {
	name: string;
	age: number;
}

// custom partial type
type MyPartial<T> = { [P in keyof T]?: T[P] };

function updatePerson(person: Person, prop: Partial<Person>) {
	// can try MyPartial
	return { ...person, ...prop };
}

const person: Person = {
	name: 'Todd',
	age: 27
};

updatePerson(person, { name: 'abc' });
