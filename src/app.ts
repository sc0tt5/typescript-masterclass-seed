// declaration files
// note: intro -- DefinitelyTyped and @types
// see: http://definitelytyped.org/

// augmenting modules with declarations

// npm install @types/lodash
// in tsconfig.json we can add typeRoots array and use both node_modules and our customer declarations

import * as _ from 'lodash';

_.chunk([1, 2, 3, 4]); // [[1,2],[3,4]]

// provide our own log function to mixin (see @types for custom augmentation)
_.mixin({
	log(item: string) {
		console.log(':::', item);
	}
});

_.log('Hello!');
