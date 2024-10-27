import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Main background and surface colors
				dark: {
					'950': '#0A0A0F',
					'900': '#121218',
					'800': '#1A1A23',
					'700': '#252532',
					'600': '#2F2F3D',
					'500': '#3A3A4C',
					'400': '#4C4C61',
					'300': '#6B6B82',
					'200': '#9595AA',
					'100': '#E1E1E6'
				},
				// Primary accent color (purple/violet)
				accent: {
					'950': '#170B25',
					'900': '#2B1149',
					'800': '#421B70',
					'700': '#5C2699',
					'600': '#7633BC',
					'500': '#8F42DB',
					'400': '#A96AE4',
					'300': '#C190EC',
					'200': '#D9B7F4',
					'100': '#F0DFFB'
				},
				// Secondary accent (teal/cyan for contrast)
				azure: {
					'950': '#0B2229',
					'900': '#164450',
					'800': '#1F6270',
					'700': '#2A8494',
					'600': '#35A5B8',
					'500': '#42C7DC',
					'400': '#6AD3E4',
					'300': '#90DFEC',
					'200': '#B7EAF3',
					'100': '#DFF6F9'
				}
			}
		}
	},
	plugins: [typography]
} as Config;
