// declaration files
// note: intro -- DefinitelyTyped and @types
// see: http://definitelytyped.org/

// writing declaration files

// see folder @types/lodash/index.d.ts
// we create this as aan example and now lodash module is avaible
// when comment out in index.d.ts we can see it is missing (when hover lodash import)

import * as _ from 'lodash';

// but we can't see types
_.chunk([1, 2, 3, 4]); // [[1,2],[3,4]]
