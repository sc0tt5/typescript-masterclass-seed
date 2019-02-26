// pick mapped type
// similar as lodash pluck
interface Person {
	name: string;
	age: number;
	address: {};
}

// this mirrors built-in Pick
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

const person: Pick<Person, 'name' | 'age'> = {
	name: 'Todd',
	age: 27
};
