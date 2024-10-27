import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface HistoryItem {
	date: Date;
	count: number;
	difficulty: number;
}

interface UserState {
	loading: boolean;
	activity: 'burpee';
	lastCount: number;
	currentCount: number;
	currentEffort?: number;
	targetCount?: number;
	history: HistoryItem[];
}

const defaultValue: UserState = {
	loading: true,
	activity: 'burpee',
	lastCount: 0,
	currentCount: 0,
	currentEffort: undefined,
	targetCount: undefined,
	history: []
};

function getCookie(name: string): string | null {
	if (!browser) return null;
	const cookies = document.cookie.split(';');
	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split('=').map((c) => c.trim());
		if (cookieName === name) {
			return decodeURIComponent(cookieValue);
		}
	}
	return null;
}

function setCookie(name: string, value: string, days = 7) {
	if (!browser) return;
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = `expires=${date.toUTCString()}`;
	document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}

function createUserStore() {
	const initialValue = defaultValue;
	console.log(initialValue);
	const { subscribe, set: baseSet, update } = writable<UserState>(initialValue);

	function computeCurrentCount(state: UserState) {
		if (!state.targetCount) {
			return 0;
		}
		if (state.currentCount === 0) {
			return state.targetCount / 2;
		}
		return state.currentCount;
	}

	function set(value: UserState) {
		const computedValue = {
			...value,
			currentCount: computeCurrentCount(value)
		};
		baseSet(computedValue);
	}

	if (browser) {
		const stored = getCookie('userState');
		if (stored) {
			try {
				const state = JSON.parse(stored) as UserState;
				set({ ...state, loading: false });
			} catch (e) {
				console.error('Failed to parse cookie:', e);
				set({ ...defaultValue, loading: false });
			}
		} else {
			setCookie('userState', JSON.stringify(initialValue));
		}

		subscribe((value) => {
			setCookie('userState', JSON.stringify(value));
		});
	}

	function customUpdate(updater: (state: UserState) => UserState) {
		update((state) => {
			const newState = updater(state);
			return {
				...newState,
				currentCount: computeCurrentCount(newState),
				loading: false
			};
		});
	}

	return {
		subscribe,
		set,
		update: customUpdate,
		saveHistory: (value: HistoryItem) => {
			console.log('history', value);
			customUpdate((state) => ({
				...state,
				history: [...state.history, value]
			}));
		},
		setTargetCount: (target: number) => {
			customUpdate((state) => ({
				...state,
				targetCount: target
			}));
		},
		incrementCount: () => {
			customUpdate((state) => ({
				...state,
				currentCount: state.currentCount + 1
			}));
		},
		resetCount: () => {
			customUpdate((state) => ({
				...state,
				currentCount: 0
			}));
		},
		clearState: () => {
			if (browser) {
				document.cookie = '';
			}
			set({ ...defaultValue, loading: false });
		}
	};
}

export const User = createUserStore();
