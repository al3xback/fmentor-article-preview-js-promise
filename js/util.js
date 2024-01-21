const createElementAttribute = (name, value) => {
	return {
		name,
		value,
	};
};

const createElement = (tag, className, text, attributes) => {
	const newElement = document.createElement(tag);
	if (className) {
		newElement.className = className;
	}
	newElement.textContent = text || '';
	if (attributes && attributes.length > 0) {
		for (const attr of attributes) {
			newElement.setAttribute(attr.name, attr.value);
		}
	}
	return newElement;
};

const createHeaderEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else {
			const headerEl = createElement('header');

			const headerTitleEl = createElement(
				'h1',
				'sr-only',
				'Article preview component'
			);

			headerEl.appendChild(headerTitleEl);

			resolve(headerEl);
		}
	});
};

const createCardEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else if (typeof createElementAttribute === 'undefined') {
			reject(new Error('createElementAttribute is not defined!'));
		} else {
			const cardEl = createElement('article', 'card');

			/* card image */
			const cardImageWrapperEl = createElement('div', 'card__image');

			const cardImageInnerEl = createElement('div', 'card__image-inner');

			const cardImageEl = createElement('img', null, null, [
				createElementAttribute('src', './images/drawers.jpg'),
				createElementAttribute('alt', ''),
				createElementAttribute('width', 280),
				createElementAttribute('height', 278),
			]);

			cardImageInnerEl.appendChild(cardImageEl);

			cardImageWrapperEl.appendChild(cardImageInnerEl);

			/* card content */
			const cardContentEl = createElement('div', 'card__content');

			/* card title */
			const cardTitleEl = createElement(
				'h2',
				'card__title',
				'Shift the overall look and feel by adding these wonderful touches to furniture in your home'
			);

			/* card description */
			const cardDescriptionEl = createElement(
				'p',
				'card__desc',
				"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete."
			);

			/* card author */
			const cardAuthorEl = createElement('div', 'card__author');

			const cardAuthorImageWrapperEl = createElement(
				'div',
				'card__author-img-box'
			);

			const cardAuthorImageEl = createElement(
				'img',
				'card__author-img',
				null,
				[
					createElementAttribute('src', './images/avatar.jpg'),
					createElementAttribute('alt', 'Michelle Appleton'),
					createElementAttribute('width', 40),
					createElementAttribute('height', 40),
				]
			);

			cardAuthorImageWrapperEl.appendChild(cardAuthorImageEl);

			const cardAuthorInfoEl = createElement('div', 'card__author-info');

			const cardAuthorNameEl = createElement(
				'h3',
				'card__author-name',
				'Michelle Appleton'
			);

			const cardAuthorPostDateEl = createElement(
				'p',
				'card__author-post-date',
				'28 Jun 2020'
			);

			cardAuthorInfoEl.appendChild(cardAuthorNameEl);
			cardAuthorInfoEl.appendChild(cardAuthorPostDateEl);

			cardAuthorEl.appendChild(cardAuthorImageWrapperEl);
			cardAuthorEl.appendChild(cardAuthorInfoEl);

			/* card share */
			const cardShareEl = createElement('div', 'card__share');

			const cardShareCheckboxEl = createElement(
				'input',
				'card__share-checkbox'
			);
			cardShareCheckboxEl.type = 'checkbox';
			cardShareCheckboxEl.name = 'toggle';
			cardShareCheckboxEl.id = 'share-toggle';

			const cardShareBoxEl = createElement('div', 'card__share-box');

			const cardShareActionEl = createElement(
				'div',
				'card__share-action'
			);

			const cardShareActionTextEl = createElement(
				'span',
				'card__share-action-txt',
				'Share'
			);

			const cardShareActionButtonListEl = createElement(
				'ul',
				'card__share-action-buttons'
			);

			const shareActionButtons = ['facebook', 'twitter', 'pinterest'];

			for (const shareActionButton of shareActionButtons) {
				const cardShareActionButtonItemEl = createElement('li');

				const cardShareActionButtonItemLinkEl = createElement(
					'a',
					null,
					null,
					[
						createElementAttribute('href', '#'),
						createElementAttribute(
							'title',
							`Share on ${shareActionButton}`
						),
					]
				);

				const cardShareActionButtonItemLinkIconEl = createElement(
					'i',
					`icon-${shareActionButton}`
				);
				cardShareActionButtonItemLinkIconEl.ariaHidden = 'true';

				cardShareActionButtonItemLinkEl.appendChild(
					cardShareActionButtonItemLinkIconEl
				);

				cardShareActionButtonItemEl.appendChild(
					cardShareActionButtonItemLinkEl
				);

				cardShareActionButtonListEl.appendChild(
					cardShareActionButtonItemEl
				);
			}

			cardShareActionEl.appendChild(cardShareActionTextEl);
			cardShareActionEl.appendChild(cardShareActionButtonListEl);

			const cardShareToggleButtonEl = createElement(
				'label',
				'btn btn--icon btn--share-toggle'
			);
			cardShareToggleButtonEl.htmlFor = 'share-toggle';
			cardShareToggleButtonEl.innerHTML =
				'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"></svg>';

			const cardShareToggleButtonIconEl = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'path'
			);
			cardShareToggleButtonIconEl.setAttribute('fill', 'currentColor');
			cardShareToggleButtonIconEl.setAttribute(
				'd',
				'M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
			);

			cardShareToggleButtonEl.firstElementChild.appendChild(
				cardShareToggleButtonIconEl
			);

			cardShareBoxEl.appendChild(cardShareActionEl);
			cardShareBoxEl.appendChild(cardShareToggleButtonEl);

			cardShareEl.appendChild(cardShareCheckboxEl);
			cardShareEl.appendChild(cardShareBoxEl);

			cardContentEl.appendChild(cardTitleEl);
			cardContentEl.appendChild(cardDescriptionEl);
			cardContentEl.appendChild(cardAuthorEl);
			cardContentEl.appendChild(cardShareEl);

			cardEl.appendChild(cardImageWrapperEl);
			cardEl.appendChild(cardContentEl);

			resolve(cardEl);
		}
	});
};

const createMainEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else {
			const mainEl = createElement('main');

			const mainContainerEl = createElement('div', 'container');

			createCardEl()
				.then((el) => {
					mainContainerEl.appendChild(el);

					mainEl.appendChild(mainContainerEl);

					resolve(mainEl);
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
};

const createFooterEl = () => {
	return new Promise((resolve, reject) => {
		if (typeof createElement === 'undefined') {
			reject(new Error('createElement is not defined!'));
		} else if (typeof createElementAttribute === 'undefined') {
			reject(new Error('createElementAttribute is not defined!'));
		} else {
			const footerEl = createElement('footer');

			const footerContainerEl = createElement('div', 'container');

			const footerTextEl = createElement('p', null, 'Challenge by ');

			const footerTextLinkCreatorEl = createElement(
				'a',
				'btn btn--link',
				'Frontend Mentor',
				[
					createElementAttribute(
						'href',
						'https://www.frontendmentor.io?ref=challenge'
					),
					createElementAttribute('rel', 'noopener'),
					createElementAttribute('target', '_blank'),
				]
			);

			const footerTextLinkCoderEl = createElement(
				'a',
				'btn btn--link',
				'al3xback',
				[
					createElementAttribute(
						'href',
						'https://github.com/al3xback'
					),
					createElementAttribute('rel', 'noopener'),
					createElementAttribute('target', '_blank'),
				]
			);

			footerTextEl.appendChild(footerTextLinkCreatorEl);
			footerTextEl.append('. Coded by ');
			footerTextEl.appendChild(footerTextLinkCoderEl);

			footerContainerEl.appendChild(footerTextEl);

			footerEl.appendChild(footerContainerEl);

			resolve(footerEl);
		}
	});
};

export { createHeaderEl, createMainEl, createFooterEl };
