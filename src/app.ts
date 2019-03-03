// generics and overloads
// function generics

// generics are not unique to typescript, they exist in other languages

// generic types

class Pizza {
	constructor(private name: string, private price: number) {}
}

// using a generic type <T> allows more flexibility
class List<T> {
	private list: T[];

	addItem(item: T): void {
		this.list.push(item);
	}

	getList(): T[] {
		return this.list;
	}
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));

const pizzas = list.getList();

// another...
class Coupon {
	constructor(private name: string) {}
}

const anotherList = new List();

anotherList.addItem(new Coupon('PIZZA25'));
