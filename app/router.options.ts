import type { RouterConfig } from '@nuxt/schema';

//
// This function returns a Promise that resolves with the first element that matches the provided selector.
// If no element is found within the specified wait time, the Promise resolves with null.
//
// @param {string} selector - The CSS selector of the element to find.
// @param {number} [wait=0] - The maximum time to wait for the element to appear, in milliseconds.
// @returns {Promise<Element|null>} A Promise that resolves with the found element or null if no element is found within the wait time.
//

const findEl = (selector: string, wait = 0): Promise<Element | null> => new Promise((resolve) => {
	if (document.querySelector(selector)) {
		resolve(document.querySelector(selector));
		return;
	}

	const observer = new MutationObserver(() => {
		if (document.querySelector(selector)) {
			clearTimeout(timeout);
			observer.disconnect();
			resolve(document.querySelector(selector));
		}
	});

	const timeout = setTimeout(() => {
		observer.disconnect();
		resolve(null);
	}, wait);

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
});

export default {
	scrollBehavior: async (to, from, savedPosition) => {
		if (to.hash) {
			const el = await findEl(to.hash, 5000);
			return {
				el,
				behavior: 'smooth',
				top: 0, // set offset based on fixed menu height
			};
		}

		if (savedPosition) {
			return savedPosition;
		}

		return {
			top: 0,
			left: 0,
			behavior: (from.path === to.path && from.hash !== '' && to.hash === '')
				? 'smooth'
				: 'auto',
		};
	},
} as RouterConfig;
