import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface UserState {
	loading: boolean;
	activity: 'burpee';
	lastCount: number;
	currentCount: number;
	currentEffort?: number;
	targetCount?: number;
}

const defaultValue: UserState = {
	loading: true,
	activity: 'burpee',
	lastCount: 0,
	currentCount: 0,
	currentEffort: undefined,
	targetCount: undefined
};

function createUserStore() {
	const initialValue = defaultValue;
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
		const stored = window.localStorage.getItem('user');
		if (stored) {
			const state = JSON.parse(stored) as UserState;
			set({ ...state, loading: false });
		}

		subscribe((value) => {
			window.localStorage.setItem('user', JSON.stringify(value));
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
		}
	};
}

export const User = createUserStore();
