export default {
	scrollBehavior: async (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition;
		}
		const findEl = (hash, x) => {
			const el = document.querySelector(hash);
			if (el) {
				return el;
			}
			return new Promise((resolve) => {
				if (x > 50) {
					return resolve();
				}
				setTimeout(() => { resolve(findEl(hash, ++x || 1)); }, 100);
			});
		};
		if (to.hash) {
			const el = await findEl(to.hash);
			return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
		}
		if (to === from || (from.path === to.path && from.hash && !to.hash)) {
			return window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		return { x: 0, y: 0 };
	},
};
