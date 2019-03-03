// d stands for declaration
// when we want to provide types for somethig we need to fill in the declarations
// lodash already has all declarations defined via the DefinitelyTyped project....
// but for the purpose of this demo, we will pretend they do not, so we can see how
// to define our delcarations in the event that we need to

// use typescripts declare keyword to write our own type definitions
// we declare a module because lodash is wrapped in a module
declare module 'lodash' {
	export function chunk(collection: any, size?: number): any[][];
}
