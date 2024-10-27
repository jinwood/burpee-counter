import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	console.log('page load');
};
