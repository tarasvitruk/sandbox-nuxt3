import { createGtm, useGtm } from '@gtm-support/vue-gtm';

export default defineNuxtPlugin((nuxtApp) => {
	const gtmEnabled = (nuxtApp.$config.public.gtmEnabled === 'true');
	const gtmDebug = (nuxtApp.$config.public.gtmDebug === 'true');

	const cookiePerformance = useCookie('cookie-performance');
	window.dataLayer = window.dataLayer || [];
	if (cookiePerformance.value) {
		window.dataLayer.push({ event: 'CookiesUpdated', cookiesAccepted: 'performance:1' });
	}
	else {
		window.dataLayer.push({ event: 'CookiesUpdated', cookiesAccepted: 'performance:0' });
	}

	nuxtApp.vueApp.use(createGtm({
		id: nuxtApp.$config.public.gtm,
		defer: false,
		compatibility: false,
		enabled: gtmEnabled,
		debug: gtmDebug,
		loadScript: true,
		vueRouter: useRouter(),
		trackOnNextTick: false,
	}));

	// const gtm = useGtm();
	// console.log(gtm);
	// if (cookiePerformance.value) {
	// 	gtm?.trackEvent({ event: 'CookiesUpdated', cookiesAccepted: 'performance:1' });
	// }
});
