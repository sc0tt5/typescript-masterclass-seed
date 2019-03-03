// advanced types and practices
// interfaces vs classes

// class is more or less a blueprint for sharing information
// vs
// interface is a group of properties and methods that describe

// simple type checking
/* interface Artist {
	name: string;
} */

// can use class for type checking as well
class ArtistCreator /* implements Artist */ {
	constructor(public name: string) {}
}

function artistFactory({ name }: ArtistCreator) {
	return new ArtistCreator(name);
}

artistFactory({ name: 'Todd' });
