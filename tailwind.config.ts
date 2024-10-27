import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		bamboo: {
			'50': '#fff9ec',
			'100': '#fff0d3',
			'200': '#ffdea5',
			'300': '#ffc66d',
			'400': '#ffa132',
			'500': '#ff840a',
			'600': '#e66100',
			'700': '#cc4d02',
			'800': '#a13c0b',
			'900': '#82330c',
			'950': '#461704'
		},

		extend: {}
	},

	plugins: [typography]
} as Config;
