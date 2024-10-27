import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface UserState {
	activity: 'burpee';
	lastCount: number;
	currentCount: number;
	currentEffort?: number;
	targetCount?: number;
}

const defaultValue: UserState = {
	activity: 'burpee',
	lastCount: 0,
	currentCount: 0,
	currentEffort: undefined,
	targetCount: undefined
};

function createUserStore() {
	const initialValue = defaultValue;
	const store = writable<UserState>(initialValue);

	if (browser) {
		const stored = window.localStorage.getItem('user');
		if (stored) {
			store.set(JSON.parse(stored));
		}

		store.subscribe((value) => {
			window.localStorage.setItem('user', JSON.stringify(value));
		});
	}
	return store;
}

export const User = createUserStore();
