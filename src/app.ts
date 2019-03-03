// advanced types and practices
// interfaces vs type aliases

interface Item {
	name: string;
}

interface Artist extends Item {
	songs: number;
}

interface Artist {
	getSongs(): number;
}

// type alias
type Artist2 = {
	name: string;
} & Item; // intersection type

const newArtist: Artist = {
	name: 'ABC',
	songs: 5,
	getSongs() {
		return this.songs;
	}
};
