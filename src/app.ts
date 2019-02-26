// record mapped type
// following the dictionary pattern

let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
	current: string;
	next: string;
}

const item: Record<keyof TrackStates, string> = {
	current: 'js2js9',
	next: '8nlksjsk'
};

// Numbers are coerced to String ...this is JavaScript
dictionary[0] = item;
