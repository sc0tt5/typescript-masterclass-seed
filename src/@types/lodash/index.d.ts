// d stands for declaration
// when we want to provide types for somethig we need to fill in the declarations
// lodash already has all declarations defined via the DefinitelyTyped project....
// but for the purpose of this demo, we will pretend they do not, so we can see how
// to define our delcarations in the event that we need to

// use typescripts declare keyword to write our own type definitions
// we declare a module because lodash is wrapped in a module

// we're augmenting, so need to import lodash itself first
import * as lodash from 'lodash';

// ...and here are our custom declarations that we will add to lodash
// this is actually an ambient module that allows us to create a contract with lodash
declare module 'lodash' {
	interface LoDashStatic {
		log(item: string): void;
	}
}
