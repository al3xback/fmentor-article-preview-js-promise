import { createHeaderEl, createMainEl, createFooterEl } from './util.js';

/* initApp */
const body = document.body;

let headerEl;
let mainEl;
let footerEl;

Promise.resolve()
	.then(() => {
		return createHeaderEl();
	})
	.then((el) => {
		headerEl = el;
		return createMainEl();
	})
	.then((el) => {
		mainEl = el;
		return createFooterEl();
	})
	.then((el) => {
		footerEl = el;

		body.appendChild(headerEl);
		body.appendChild(mainEl);
		body.appendChild(footerEl);
	})
	.catch((err) => console.log(err));
