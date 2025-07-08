import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CKVPJ_oD.mjs';
import { manifest } from './manifest_Dkm_Urv0.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/chambres.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/mentions-legales.astro.mjs');
const _page4 = () => import('./pages/politique-confidentialite.astro.mjs');
const _page5 = () => import('./pages/reservation.astro.mjs');
const _page6 = () => import('./pages/services.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/chambres.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/mentions-legales.astro", _page3],
    ["src/pages/politique-confidentialite.astro", _page4],
    ["src/pages/reservation.astro", _page5],
    ["src/pages/services.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
