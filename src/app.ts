// tsconfig and compiler options
// understanding lib and es libraries

// in tsconfig, change the following to see how the code breaks/works
// "target": "es5",
// "lib": ["es6", "dom"],
Array.from(document.querySelectorAll('*'));
setTimeout(() => {}, 1);
