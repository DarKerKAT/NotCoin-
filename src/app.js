import './app.css';

import App from './App.svelte';

window.addEventListener("contextmenu", function (e) {
	import.meta.env.PROD ? e.preventDefault() : void 0;
});

const app = new App({
	target: document.body,
});

export default app;
