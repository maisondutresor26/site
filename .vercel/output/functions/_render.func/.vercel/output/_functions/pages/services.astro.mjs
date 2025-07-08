/* empty css                                    */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B_M4XSTg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BFr3x2kt.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const heroBgSrc = new Proxy({"src":"/_astro/services-hero-bg.Dvgle6Ih.jpg","width":4552,"height":3035,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/services-hero-bg.jpg";
							}
							
							return target[name];
						}
					});

const piscineImg = new Proxy({"src":"/_astro/riad-home-hero.B9vxYsRJ.png","width":1494,"height":990,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/riad-home-hero.png";
							}
							
							return target[name];
						}
					});

const petitDejImg = new Proxy({"src":"/_astro/restaurant.Bk356T5x.jpg","width":4553,"height":3035,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/restaurant.jpg";
							}
							
							return target[name];
						}
					});

const dinnerImg = new Proxy({"src":"/_astro/carousel-4.BLfd5eje.jpg","width":4550,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/dinner-prive.jpg";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      id: "piscine",
      title: "Piscine",
      description: "Profitez de notre piscine traditionnelle au c\u0153ur du patio pour vous rafra\xEEchir apr\xE8s une journ\xE9e d'exploration",
      longDescription: "Notre piscine au c\u0153ur du patio int\xE9rieur est l'\xE2me du Riad. Entour\xE9e de colonnes traditionnelles, elle vous offre un havre de fra\xEEcheur apr\xE8s vos explorations urbaines. Les transats et parasols vous invitent \xE0 la d\xE9tente, tandis que le service de boissons est disponible tout au long de la journ\xE9e.",
      image: piscineImg.src
    },
    {
      id: "petit-dejeuner",
      title: "Petit D\xE9jeuner",
      description: "Commencez votre journ\xE9e avec un authentique petit d\xE9jeuner marocain pr\xE9par\xE9 avec des produits frais et locaux",
      longDescription: "Notre petit d\xE9jeuner traditionnel vous propose une s\xE9lection des meilleurs produits marocains. Savourez des msemen (cr\xEApes feuillet\xE9es), du pain maison, des confitures artisanales, du miel d'argan, des amandes grill\xE9es et une s\xE9lection de th\xE9s marocains. Tous nos produits sont frais, locaux et pr\xE9par\xE9s chaque matin.",
      image: petitDejImg.src
    },
    {
      id: "diner-prive",
      title: "D\xEEner Priv\xE9",
      description: "Une exp\xE9rience gastronomique exclusive dans une atmosph\xE8re intimiste et \xE9l\xE9gante",
      longDescription: "Notre D\xEEner Priv\xE9 vous offre une exp\xE9rience culinaire personnalis\xE9e dans un cadre raffin\xE9 et r\xE9serv\xE9 uniquement \xE0 vos invit\xE9s. Notre chef \xE9labore un menu sur mesure \xE0 partir des meilleurs produits locaux et saisonniers, accompagn\xE9 d'une s\xE9lection de vins marocains et internationaux.",
      image: dinnerImg.src
    }
  ];
  const faqs = [
    {
      question: "Quels sont les horaires du spa et du hammam ?",
      answer: "Le spa et le hammam sont ouverts tous les jours de 10h \xE0 20h. Les soins se font sur r\xE9servation, id\xE9alement 24h \xE0 l'avance pour garantir votre cr\xE9neau pr\xE9f\xE9r\xE9."
    },
    {
      question: "Le petit-d\xE9jeuner est-il inclus dans le prix de la chambre ?",
      answer: "Oui, toutes nos chambres incluent un petit-d\xE9jeuner marocain traditionnel servi de 08h00 \xE0 10h00, au choix dans le patio, sur la terrasse ou dans votre chambre."
    },
    {
      question: "Proposez-vous des transferts a\xE9roport ?",
      answer: "Oui, nous organisons des transferts priv\xE9s depuis et vers l'a\xE9roport de Marrakech. Le service est disponible 24h/24 sur r\xE9servation pr\xE9alable."
    },
    {
      question: "Quels types d'excursions proposez-vous ?",
      answer: "Nous proposons une vari\xE9t\xE9 d'excursions : visites guid\xE9es de la m\xE9dina, excursions dans l'Atlas, journ\xE9e \xE0 Essaouira, escapade dans le d\xE9sert d'Agafay, et bien d'autres. Chaque excursion peut \xEAtre personnalis\xE9e selon vos souhaits."
    },
    {
      question: "Les repas sont-ils servis toute la journ\xE9e ?",
      answer: "Notre restaurant est ouvert de 12h \xE0 22h30. En dehors de ces horaires, un service de snacking l\xE9ger est disponible 24h/24."
    },
    {
      question: "Peut-on r\xE9server des soins spa \xE0 l'avance ?",
      answer: "Oui, nous recommandons de r\xE9server vos soins spa au moment de votre r\xE9servation de chambre pour garantir la disponibilit\xE9. Vous pouvez \xE9galement r\xE9server pendant votre s\xE9jour selon les disponibilit\xE9s."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nos Services", "description": "Explorez les services du Riad Maison du Tr\xE9sor \xE0 Marrakech : piscine, hammam, excursions et soins bien-\xEAtre pour un s\xE9jour inoubliable.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white" data-astro-cid-ucd2ps2b> <div class="absolute inset-0 z-0" data-astro-cid-ucd2ps2b> <img${addAttribute(heroBgSrc.src, "src")} alt="Téléphone vintage marocain" class="w-full h-full object-cover opacity-40" loading="lazy" data-astro-cid-ucd2ps2b> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-astro-cid-ucd2ps2b> <div class="max-w-3xl" data-astro-cid-ucd2ps2b> <h1 class="text-4xl md:text-5xl font-serif mb-4" data-astro-cid-ucd2ps2b>Services</h1> <p class="text-xl" data-astro-cid-ucd2ps2b>Profitez d’une expérience unique au coeur de Marrakech : petit déjeuner traditionnel, dîner privé au coucher du soleil, hammam relaxant, piscine rafraîchissante et bien plus encore…</p> </div> </div> </section>  <section class="py-16 bg-white" data-astro-cid-ucd2ps2b> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ucd2ps2b> <div class="space-y-24" data-astro-cid-ucd2ps2b> ${services.map((service, index) => renderTemplate`<div${addAttribute(service.id, "id")} class="flex flex-col lg:flex-row gap-12 items-center scroll-mt-24" data-astro-cid-ucd2ps2b> <div${addAttribute(`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`, "class")} data-astro-cid-ucd2ps2b> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-[400px] object-cover rounded-lg shadow-luxury" loading="lazy" data-astro-cid-ucd2ps2b> </div> <div${addAttribute(`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`, "class")} data-astro-cid-ucd2ps2b> <h2 class="text-3xl font-semibold font-serif mb-4" data-astro-cid-ucd2ps2b>${service.title}</h2> <p class="text-gray-600 mb-6" data-astro-cid-ucd2ps2b>${service.longDescription}</p> <a href="/contact" class="btn btn-primary" data-astro-cid-ucd2ps2b>
En savoir plus
</a> </div> </div>`)} </div> </div> </section>  <section class="py-16 bg-cream-50" data-astro-cid-ucd2ps2b> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ucd2ps2b> <div class="max-w-3xl mx-auto" data-astro-cid-ucd2ps2b> <h2 class="text-3xl font-serif mb-6 text-center" data-astro-cid-ucd2ps2b>Questions fréquentes</h2> <p class="text-center mb-12 text-gray-700" data-astro-cid-ucd2ps2b>
Nous avons rassemblé les questions les plus courantes concernant nos services.
</p> <div class="space-y-6" data-astro-cid-ucd2ps2b> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden" data-astro-cid-ucd2ps2b> <button class="faq-toggle w-full text-left px-6 py-4 focus:outline-none"${addAttribute(index, "data-index")} data-astro-cid-ucd2ps2b> <div class="flex justify-between items-center" data-astro-cid-ucd2ps2b> <h3 class="font-medium text-lg" data-astro-cid-ucd2ps2b>${faq.question}</h3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-ucd2ps2b> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-ucd2ps2b></path> </svg> </div> </button> <div class="faq-content px-6 pb-4 hidden" data-astro-cid-ucd2ps2b> <p class="text-gray-700" data-astro-cid-ucd2ps2b>${faq.answer}</p> </div> </div>`)} </div> </div> </div> </section>  <section class="py-16 bg-white" data-astro-cid-ucd2ps2b> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ucd2ps2b> <div class="max-w-3xl mx-auto text-center" data-astro-cid-ucd2ps2b> <h2 class="text-3xl font-serif mb-4" data-astro-cid-ucd2ps2b>Besoin d'informations supplémentaires ?</h2> <p class="text-lg mb-8" data-astro-cid-ucd2ps2b>Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à organiser votre séjour.</p> <div class="flex flex-col sm:flex-row justify-center gap-4" data-astro-cid-ucd2ps2b> <a href="/contact" class="btn btn-primary" data-astro-cid-ucd2ps2b>
Nous contacter
</a> <a href="/reservation" class="btn btn-outline" data-astro-cid-ucd2ps2b>
Réserver maintenant
</a> </div> </div> </div> </section> ` })}  `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/pages/services.astro", void 0);

const $$file = "C:/Users/pc/Desktop/riad-nico/project/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
