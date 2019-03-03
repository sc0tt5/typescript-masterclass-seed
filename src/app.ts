// exploring enums
// numberic enums and reverse mappings

// enum is a data type
// actually compiles down to JS

enum Sizes {
	Small,
	Medium,
	Large
}

// if enum already exist and we modify, we need to supply the value
enum Sizes {
	ExtraLarge = 3
}

const selectedSize = 2;

// now we can call tsc in terminal to compile to JS and check what we got...
// compare side-by-side

// typescript creates a reverse mapping, which means we can
// either use as string like "Small" or a numeric value like 0 to get value

// now if we run with now... node dist/app.js ...we get 1
console.log(Sizes.Large); // for numeric value
console.log(Sizes[selectedSize]); // to return string value
