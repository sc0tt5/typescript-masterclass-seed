// type guards
// literal type guards and "in" operator

// in operator
// does the window object have a property called localStorage
const exists = 'localStorage' in window;

class Song {
	kind: 'song';
	constructor(public title: string, public duration: number) {}
}

class Playlist {
	kind: 'playlist';
	constructor(public name: string, public songs: Song[]) {}
}

// user defined type guard
// if this function returns true then we are dealing with a song -- item is Song
function isSong(item: any) {
	return 'title' in item;
}

function getItemName(item: Song | Playlist) {
	// if (isSong(item)) {
	if (item.kind === 'song') {
		return item.title;
	}
	return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name:', songName);

const playlistName = getItemName(new Playlist('The Best Songs', [new Song('The Man', 300000)]));
console.log('Playlist name:', playlistName);
