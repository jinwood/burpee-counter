import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface UserState {
	activity: 'burpee';
	lastCount: number;
	currrentCount: number;
	currentEffort?: number;
	targetCount?: number;
}

const defaultValue: UserState = {
	activity: 'burpee',
	lastCount: 0,
	currrentCount: 0,
	currentEffort: undefined,
	targetCount: undefined
};

const fromStorage = browser ? window.localStorage.getItem('user') : '';
const initialValue = fromStorage ? (JSON.parse(fromStorage) as UserState) : defaultValue;

const user = writable<UserState>(initialValue);

user.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('user', JSON.stringify(value));
	}
});

export const User = writable<UserState>({
	targetCount: undefined,
	lastCount: 0,
	activity: 'burpee',
	currrentCount: 0
});
