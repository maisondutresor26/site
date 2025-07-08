import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CNzCOnWU.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_B_M4XSTg.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/pc/Desktop/riad-nico/project/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Divz9UAM.js"}],"styles":[{"type":"external","src":"/_astro/chambres.DSdjBwX4.css"},{"type":"inline","content":".fade-in-up[data-astro-cid-cawllzj6]{opacity:0;transform:translateY(30px);transition:opacity .6s ease-out,transform .6s ease-out}.fade-in-up[data-astro-cid-cawllzj6].visible{opacity:1;transform:translateY(0)}html{scroll-behavior:smooth}\n"}],"routeData":{"route":"/chambres","isIndex":false,"type":"page","pattern":"^\\/chambres\\/?$","segments":[[{"content":"chambres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chambres.astro","pathname":"/chambres","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3TFwIRRw.js"}],"styles":[{"type":"external","src":"/_astro/chambres.DSdjBwX4.css"},{"type":"inline","content":".fade-in-up[data-astro-cid-uw5kdbxl]{opacity:0;transform:translateY(30px);transition:opacity .6s ease-out,transform .6s ease-out}.fade-in-up[data-astro-cid-uw5kdbxl].visible{opacity:1;transform:translateY(0)}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DryUYhU0.js"}],"styles":[{"type":"external","src":"/_astro/chambres.DSdjBwX4.css"}],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DryUYhU0.js"}],"styles":[{"type":"external","src":"/_astro/chambres.DSdjBwX4.css"}],"routeData":{"route":"/politique-confidentialite","isIndex":false,"type":"page","pattern":"^\\/politique-confidentialite\\/?$","segments":[[{"content":"politique-confidentialite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politique-confidentialite.astro","pathname":"/politique-confidentialite","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BbfDJKiQ.js"}],"styles":[{"type":"external","src":"/_astro/chambres.DSdjBwX4.css"},{"type":"inline","content":".fade-in-up[data-astro-cid-r2s44esw]{opacity:0;transform:translateY(30px);transition:opacity .6s ease-out,transform .6s ease-out}.fade-in-up[data-astro-cid-r2s44esw].visible{opacity:1;transform:translateY(0)}\n"}],"routeData":{"route":"/reservation","isIndex":false,"type":"page","pattern":"^\\/reservation\\/?$","segments":[[{"content":"reservation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reservation.astro","pathname":"/reservation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BfqYQI76.js"}],"styles":[{"type":"external","src":"/_astro/chambres.DSdjBwX4.css"},{"type":"inline","content":".fade-in-up[data-astro-cid-ucd2ps2b]{opacity:0;transform:translateY(30px);transition:opacity .6s ease-out,transform .6s ease-out}.fade-in-up[data-astro-cid-ucd2ps2b].visible{opacity:1;transform:translateY(0)}html{scroll-behavior:smooth}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DryUYhU0.js"}],"styles":[{"type":"external","src":"/_astro/chambres.DSdjBwX4.css"},{"type":"external","src":"/_astro/index.3VZ1IfHH.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.maisondutresormarrakech.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/pc/Desktop/riad-nico/project/src/pages/chambres.astro",{"propagation":"none","containsHead":true}],["C:/Users/pc/Desktop/riad-nico/project/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/pc/Desktop/riad-nico/project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/pc/Desktop/riad-nico/project/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/Users/pc/Desktop/riad-nico/project/src/pages/politique-confidentialite.astro",{"propagation":"none","containsHead":true}],["C:/Users/pc/Desktop/riad-nico/project/src/pages/reservation.astro",{"propagation":"none","containsHead":true}],["C:/Users/pc/Desktop/riad-nico/project/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/chambres@_@astro":"pages/chambres.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/politique-confidentialite@_@astro":"pages/politique-confidentialite.astro.mjs","\u0000@astro-page:src/pages/reservation@_@astro":"pages/reservation.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dkm_Urv0.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BfqYQI76.js","/astro/hoisted.js?q=2":"_astro/hoisted.Divz9UAM.js","/astro/hoisted.js?q=0":"_astro/hoisted.BbfDJKiQ.js","/astro/hoisted.js?q=3":"_astro/hoisted.3TFwIRRw.js","@astrojs/react/client.js":"_astro/client.DflRsDf5.js","C:/Users/pc/Desktop/riad-nico/project/src/components/RiadCarousel.jsx":"_astro/RiadCarousel.DiNLF6uL.js","/astro/hoisted.js?q=4":"_astro/hoisted.DryUYhU0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/services-hero-bg.Dvgle6Ih.jpg","/_astro/carousel-4.BLfd5eje.jpg","/_astro/riad-home-hero.B9vxYsRJ.png","/_astro/riad-4.vsflRWUX.jpg","/_astro/reservation-hero-bg.iqz4ik_S.jpg","/_astro/restaurant.Bk356T5x.jpg","/_astro/4.DhHap9N8.jpg","/_astro/1.BHgE7lKP.jpg","/_astro/3.Hoii-3Yt.jpg","/_astro/2.D4i7GiYa.jpg","/_astro/2.DIpXk2eF.jpg","/_astro/1.BLgZ1Ksg.jpg","/_astro/1.JXEUMAEk.jpg","/_astro/4.CQ_QUFuf.jpg","/_astro/3.CrJUNZfh.jpg","/_astro/2.-4-EG8_r.jpg","/_astro/3.BxvyNGLA.jpg","/_astro/4.DNLUQ_3N.jpg","/_astro/1.aXEsT3e3.jpg","/_astro/2.Dat53IHQ.jpg","/_astro/3.G7dpotjQ.jpg","/_astro/4.D9rHDNef.jpg","/_astro/3.DUT6JPl6.jpg","/_astro/4.B3afLrW0.jpg","/_astro/1.Dr-I0l7O.jpg","/_astro/2.BPIwF2-H.jpg","/_astro/3.giF5SIJF.jpg","/_astro/4.BrB3UF0K.jpg","/_astro/1.Bf6dMVLb.jpg","/_astro/riad-chambre-bleu.HH7ZIZp7.jpg","/_astro/2.Dy2n2Br_.jpg","/_astro/3.u01ii4eT.jpg","/_astro/3.oXVzxFiL.jpg","/_astro/1.CAhRLRDm.jpg","/_astro/2.DrD3-rwA.jpg","/_astro/riad-1.C1GTFST2.jpg","/_astro/4.DRWEteoH.jpg","/_astro/4.CSLkmW9-.jpg","/_astro/riad-3.Bo1PvvZD.jpg","/_astro/chambre-blanche-1.DkBNOE2A.jpg","/_astro/riad-2.DwX342MZ.jpg","/_astro/chambre-jaune-1.KHHxw66a.jpg","/_astro/1.CeqQctv7.jpg","/_astro/carousel-1.Cg93kiFQ.jpg","/_astro/carousel-2.Crek3Agw.jpg","/_astro/2.DzYmf6AE.jpg","/_astro/carousel-3.kJcF0tOi.jpg","/_astro/chambres.DSdjBwX4.css","/_astro/index.3VZ1IfHH.css","/favicon.svg","/robots.txt","/images/og-image.png","/_astro/client.DflRsDf5.js","/_astro/hoisted.3TFwIRRw.js","/_astro/hoisted.BbfDJKiQ.js","/_astro/hoisted.BfqYQI76.js","/_astro/hoisted.Divz9UAM.js","/_astro/hoisted.DryUYhU0.js","/_astro/index.B_l4pjL9.css","/_astro/index.DPQbMd_r.js","/_astro/RiadCarousel.DiNLF6uL.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"8M/qmxMMnwVM1mfRXOB7KzgHEQP9+s/eE7lKuj8xHuY=","experimentalEnvGetSecretEnabled":false});

export { manifest };
