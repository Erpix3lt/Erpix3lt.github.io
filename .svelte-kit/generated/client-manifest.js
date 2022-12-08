export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/blog/posts/[id]": [4],
	"/blog/projects": [5],
	"/blog/[tag]": [3]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};