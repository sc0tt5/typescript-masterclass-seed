// exploring enums
// string enums and inlining members

// new feature in TS, these don't have to be numeric
// we could use string values...
const enum Sizes {
	Small = 'small',
	Medium = 'medium',
	Large = 'large'
}
// note: add const in front to create an inline member...
// this avoids a lot of uneccessary code when compiled to JS
// test by comparing compiled JS side-by-side node dist/app.js
// remove const // add const ...see the difference

let selected: Sizes = Sizes.Small;

// we can use the enum as the function argument type (Sizes)
function updateSize(size: Sizes): void {
	selected = size;
}

updateSize(Sizes.Large);

console.log(selected); // we get the string value lowercase "large"
