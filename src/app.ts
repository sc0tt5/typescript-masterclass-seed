// generics and overloads
// function overloads

// when trying to migrate from JS to TS...

// utility functions, pure functions

// start: overloads
// we are using the union type -- string | T[] -- so...
function reverse<T>(str: string): string;
function reverse<T>(arr: T[]): T[];
// end: overloads
// note: these are virutal...overloads do not compile down to javascript...simply for type checking purposes.
// because we are "overloading" on top of typescript we are telling the function
// that we have multiple ways we can use and get different results back

// the actual function
function reverse<T>(somethingOrArray: string | T[]): string | T[] {
	// with function overloads we can define different arguments that we pass in and
	// the different return types
	if (typeof somethingOrArray === 'string') {
		// reverse<T> string
		return somethingOrArray
			.split('')
			.reverse()
			.join('');
	}
	return somethingOrArray.slice().reverse(); // slice to make copy
}

reverse('Pepporoni'); // string
reverse(['bacon', 'pepporoni', 'chili', 'mushrooms']); // array of strings
reverse([1, 2, 3, 4]); // array of numbers...because of generic type
