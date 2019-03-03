// declaration files

// emitting declaration files from tsc

// add to tsconfig.json declaration true
// this will auto-gnenerate your typings
// run tsc in terminal, open dist to see app.d.ts
// also, set types directory in like "declarationDir": "./@types",

export class Foo {
	constructor(public name: string) {}
	bar(age: number) {}
}
