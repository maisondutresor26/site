import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_B_M4XSTg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$1 = createAstro("https://www.maisondutresormarrakech.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/chambres", label: "Chambres" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/reservation", label: "R\xE9servation" }
  ];
  function isActive(path) {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  }
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300" id="main-header"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between py-4"> <a href="/" class="text-2xl md:text-3xl font-serif text-white font-bold">
Maison du Trésor
</a> <nav class="hidden md:block"> <ul class="flex space-x-8"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`text-white hover:text-ocre-400 transition-colors duration-300 ${isActive(item.href) ? "font-medium border-b-2 border-ocre-400" : ""}`, "class")}> ${item.label} </a> </li>`)} </ul> </nav> <button class="md:hidden text-white" id="mobile-menu-toggle" aria-label="Menu"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile menu --> <div id="mobile-menu" class="md:hidden bg-navy-900/95 backdrop-blur-sm absolute w-full left-0 top-full transform -translate-y-full transition-transform duration-300 ease-in-out z-20 opacity-0 invisible"> <nav class="container mx-auto px-4 py-4"> <ul class="space-y-4"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(`block py-2 text-white hover:text-ocre-400 transition-colors duration-300 ${isActive(item.href) ? "font-medium text-ocre-400" : ""}`, "class")}> ${item.label} </a> </li>`)} </ul> </nav> </div> </header> `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/Header.astro", void 0);

const contactInfo = [
  {
    icon: "location",
    title: "Adresse",
    content: " N °26 sabt ben doud, Riad Zitoun Lakdim, Marrakech 40000",
    link: "https://maps.app.goo.gl/jGbMpJp1MiZnMRyJ6",
    linkText: "Voir sur la carte",
  },
  {
    icon: "phone",
    title: "Téléphone Fixe",
    content: "+212 524 37 51 13",
    link: "tel:+212524375113",
    linkText: "Nous appeler",
  },
  {
    icon: "email",
    title: "Email",
    content: "maisondutresor26@gmail.com",
    link: "mailto:maisondutresor26@gmail.com",
    linkText: "Nous écrire",
  },
  {
    icon: "clock",
    title: "Réception",
    content: "Ouverte 24h/24, 7j/7",
    link: null,
    linkText: null,
  },
  {
    icon: "phonee",
    title: "Téléphone",
    content: "+212 633 570 241",
    link: "tel:+212633570241",
    linkText: "Nous appeler",
  },
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { name: "TripAdvisor", url: "https://www.tripadvisor.fr/Hotel_Review-g293734-d19186515-Reviews-Maison_Du_Tresor-Marrakech_Marrakech_Safi.html", icon: "tripadvisor" },
    { name: "Booking", url: "https://www.booking.com/hotel/ma/maison-du-tresor.fr.html", icon: "booking" }
  ];
  const footerLinks = [
    { title: "Navigation", links: [
      { label: "Accueil", href: "/" },
      { label: "Chambres", href: "/chambres" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "R\xE9servation", href: "/reservation" }
    ] },
    { title: "Informations", links: [
      { label: "\xC0 propos", href: "/#about" },
      { label: "FAQ", href: "/contact#faq" },
      { label: "Mentions l\xE9gales", href: "/mentions-legales" },
      { label: "Politique de confidentialit\xE9", href: "/politique-confidentialite" }
    ] },
    { title: "Contact", links: [
      { label: contactInfo[2].content, href: contactInfo[2].link },
      { label: contactInfo[1].content, href: contactInfo[1].link },
      { label: contactInfo[0].content, href: "/contact" }
    ] }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-16 pb-8"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Logo et description --> <div class="lg:col-span-1"> <a href="/" class="text-2xl font-serif font-bold mb-4 inline-block">
Maison du Trésor
</a> <p class="text-gray-400 mt-4">
Découvrez notre Riad traditionnel au cœur de Marrakech, un havre de paix alliant authenticité marocaine et confort moderne pour un séjour inoubliable.
</p> <div class="flex space-x-4 mt-6 items-center"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-ocre-400 transition-colors duration-300"> ${social.icon === "facebook" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path> </svg>`} ${social.icon === "instagram" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg>`} ${social.icon === "tripadvisor" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> <path d="M20 6.009h-2.829C15.211 4.675 12.813 4 10 4s-5.212.675-7.171 2.009H0c.428.42.827 1.34.993 2.04A4.954 4.954 0 0 0 0 11.008c0 2.757 2.243 5 5 5a4.97 4.97 0 0 0 3.423-1.375L10 17l1.577-2.366A4.97 4.97 0 0 0 15 16.01c2.757 0 5-2.243 5-5 0-1.112-.377-2.13-.993-2.96.166-.7.565-1.62.993-2.04zm-15 8.4c-1.875 0-3.4-1.525-3.4-3.4s1.525-3.4 3.4-3.4 3.4 1.525 3.4 3.4-1.525 3.4-3.4 3.4zm5-3.4a5.008 5.008 0 0 0-4.009-4.9C7.195 5.704 8.53 5.5 10 5.5s2.805.204 4.009.61A5.008 5.008 0 0 0 10 11.008zm5 3.4c-1.875 0-3.4-1.525-3.4-3.4s1.525-3.4 3.4-3.4 3.4 1.525 3.4 3.4-1.525 3.4-3.4 3.4zM5 8.86c-1.185 0-2.15.964-2.15 2.15s.965 2.15 2.15 2.15 2.15-.964 2.15-2.15-.965-2.15-2.15-2.15zm0 2.791a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm10-2.791c-1.185 0-2.15.964-2.15 2.15s.965 2.15 2.15 2.15 2.15-.964 2.15-2.15-.965-2.15-2.15-2.15zm0 2.791a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3z"></path> </svg>`} ${social.icon === "booking" && renderTemplate`<span class="font-bold text-[24px]">B.</span>`} <span class="sr-only">${social.name}</span> </a>`)} </div> </div> <!-- Colonnes de liens --> ${footerLinks.map((column) => renderTemplate`<div> <h3 class="text-lg font-medium mb-4">${column.title}</h3> <ul class="space-y-2"> ${column.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-ocre-400 transition-colors duration-300"> ${link.label} </a> </li>`)} </ul> </div>`)} </div> <div class="border-t border-gray-800 mt-12 pt-8"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-gray-500 text-sm">
&copy; ${currentYear} Riad Marrakech. Tous droits réservés.
</p> </div> </div> </div> </footer>`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/Footer.astro", void 0);

const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner" class="fixed bottom-0 left-0 w-full bg-white shadow-luxury-lg p-4 z-50 transform transition-transform duration-300"> <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"> <div class="text-sm text-gray-700"> <p>
Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant votre navigation, vous acceptez notre utilisation des cookies.
        Pour en savoir plus, consultez notre <a href="/politique-confidentialite" class="text-gold-500 hover:text-gold-600">politique de confidentialité</a>.
</p> </div> <button id="accept-cookies" class="btn btn-primary whitespace-nowrap">
J'accepte
</button> </div> </div> `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/CookieBanner.astro", void 0);

const $$Astro = createAstro("https://www.maisondutresormarrakech.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "D\xE9couvrez notre Riad de charme au coeur de Marrakech pour un s\xE9jour authentique combinant tradition marocaine et confort moderne." } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta --><title>${title} | Riad Maison du Trésor Marrakech</title><meta name="title"${addAttribute(`${title} | Riad Maison du Tr\xE9sor Marrakech`, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><meta property="og:url" content="https://www.maisondutresormarrakech.com/"><meta property="og:title"${addAttribute(`${title} | Riad Maison du Tr\xE9sor Marrakech`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="https://www.maisondutresormarrakech.com/images/og-image.jpg"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(`${title} | Riad Maison du Tr\xE9sor Marrakech`, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="https://www.maisondutresormarrakech.com/images/og-image.jpg"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="font-sans text-gray-800 min-h-screen flex flex-col bg-cream-50"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "CookieBanner", $$CookieBanner, {})} <!-- Floating WhatsApp Icon --> <a href="https://wa.me/212633570241" target="_blank" rel="noopener noreferrer" class="floating-whatsapp"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="#25D366"> <path d="M16.001 2.003c-7.73 0-14 6.268-14 13.998a13.9 13.9 0 002.062 7.236L2 30l6.948-2.02a13.93 13.93 0 007.053 1.856h.001c7.73 0 14-6.27 14-14.001 0-3.736-1.455-7.243-4.098-9.885A13.933 13.933 0 0016.001 2.003zm0 25.546a11.512 11.512 0 01-5.866-1.599l-.42-.248-4.124 1.2 1.233-4.017-.273-.414a11.53 11.53 0 01-1.782-6.125c0-6.364 5.179-11.546 11.566-11.546 3.089 0 5.993 1.204 8.173 3.383a11.453 11.453 0 013.393 8.163c0 6.364-5.179 11.546-11.566 11.546zm6.273-8.616c-.344-.172-2.031-1-2.348-1.114-.316-.115-.547-.172-.777.172-.23.344-.888 1.115-1.09 1.34-.201.23-.402.258-.746.086s-1.457-.537-2.778-1.714c-1.027-.916-1.72-2.05-1.92-2.395-.201-.344-.021-.53.152-.702.156-.155.344-.402.516-.603.172-.201.23-.344.344-.573.115-.229.057-.43-.029-.602-.086-.172-.777-1.872-1.064-2.558-.28-.672-.564-.582-.777-.592l-.662-.012c-.229 0-.601.086-.916.43s-1.2 1.172-1.2 2.856 1.229 3.31 1.4 3.537c.172.229 2.42 3.696 5.872 5.183.821.354 1.463.566 1.962.723.824.263 1.574.226 2.166.137.66-.099 2.031-.83 2.32-1.632.287-.802.287-1.487.201-1.63-.086-.144-.315-.23-.66-.401z"></path> </svg> </a>  </body></html>`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $, contactInfo as c };
