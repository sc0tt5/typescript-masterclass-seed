class MyClass {
	myMethod() {
		const foo = 123; // this variable is available in the lexical scope
		console.log('1', this);
		setTimeout(() => {
			// with an arrow function, this will come from lexical scope
			console.log(this);
		}, 0);
	}
}

const myInstance = new MyClass();
myInstance.myMethod();
