// tsconfig and compiler options
// performance bundling and tslib

// npm i tslib --save
// by using tslib it gives us a much more performant bundle size

// tsconfig
// "noEmitHelpers": true, *NOTE: no longer needed when using importHelpers true
// "importHelpers": true,

// noEmitHelpers prevent the __extend from appearing at top of each
// then we use tslib which includes extend and other helpers

export class App {}
