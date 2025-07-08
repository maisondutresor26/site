/* empty css                                    */
import { a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_B_M4XSTg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BFr3x2kt.mjs';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { c as ctaImgSrc } from '../chunks/home-page-cta_m8-nq_4A.mjs';
export { renderers } from '../renderers.mjs';

const heroSrc = new Proxy({"src":"/_astro/4.DRWEteoH.jpg","width":4553,"height":3035,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/hero.jpg";
							}
							
							return target[name];
						}
					});

const $$HomeHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen flex items-center justify-center text-white overflow-hidden bg-navy-900" data-astro-cid-h6rwgchz> <!-- Image d'arrière-plan --> <div class="absolute inset-0 z-0" data-astro-cid-h6rwgchz> <img${addAttribute(heroSrc.src, "src")} alt="Riad de Marrakech vue de la piscine et cour intérieure" class="w-full h-full object-cover" fetchpriority="high" data-astro-cid-h6rwgchz> <div class="absolute inset-0 bg-black opacity-50" data-astro-cid-h6rwgchz></div> </div> <!-- Contenu --> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" data-astro-cid-h6rwgchz> <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6 fade-in-up" data-astro-cid-h6rwgchz>
Maison du Trésor
</h1> <p class="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 fade-in-up" data-astro-cid-h6rwgchz>
Éveillez vos sens dans la médina, un riad de charme mêlant authenticité marocaine et confort absolu
</p> <div class="flex flex-col sm:flex-row justify-center items-center gap-6 fade-in-up" data-astro-cid-h6rwgchz> <a href="/chambres" class="btn btn-primary min-w-48 text-lg" data-astro-cid-h6rwgchz>
Découvrir nos chambres
</a> <a href="/reservation" class="btn btn-outline min-w-48 text-lg" data-astro-cid-h6rwgchz>
Réserver maintenant
</a> </div> </div> <!-- Élément décoratif --> <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" data-astro-cid-h6rwgchz></div> <!-- Flèche de défilement --> <a href="#welcome" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" data-astro-cid-h6rwgchz> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8" data-astro-cid-h6rwgchz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-h6rwgchz></path> </svg> </a> </section> `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/hero/HomeHero.astro", void 0);

const img1 = new Proxy({"src":"/_astro/carousel-1.Cg93kiFQ.jpg","width":4551,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/carousel/carousel-1.jpg";
							}
							
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/carousel-2.Crek3Agw.jpg","width":4553,"height":3035,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/carousel/carousel-2.jpg";
							}
							
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/carousel-3.kJcF0tOi.jpg","width":4553,"height":3035,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/carousel/carousel-3.jpg";
							}
							
							return target[name];
						}
					});

const img4 = new Proxy({"src":"/_astro/carousel-4.BLfd5eje.jpg","width":4550,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/carousel/carousel-4.jpg";
							}
							
							return target[name];
						}
					});

const RiadCarousel = () => {
  const images = [img1, img2, img3, img4];
  useEffect(() => {
    const arrowColor = "#dfbc6f";
    const arrows = document.querySelectorAll(
      ".swiper-button-prev, .swiper-button-next"
    );
    arrows.forEach((el) => {
      el.style.color = arrowColor;
    });
    const dots = document.querySelectorAll(".swiper-pagination-bullet");
    dots.forEach((dot) => {
      dot.style.background = "#ccc";
    });
    const activeDot = document.querySelector(
      ".swiper-pagination-bullet-active"
    );
    if (activeDot) activeDot.style.background = arrowColor;
    const swiperContainer = document.querySelector(".swiper");
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.on("slideChange", () => {
        dots.forEach((dot) => dot.style.background = "#ccc");
        const active = swiperContainer.querySelector(
          ".swiper-pagination-bullet-active"
        );
        if (active) active.style.background = arrowColor;
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative fade-in-up", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 2e3, disableOnInteraction: false },
        pagination: { clickable: true },
        navigation: true,
        className: "w-full rounded-lg shadow-xl",
        children: images.map((img, i) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: img.src,
            alt: `Slide ${i + 1}`,
            className: "w-full h-auto rounded-lg"
          }
        ) }, i))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 w-24 h-24 bg-ocre-400 rounded-lg -z-10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -left-6 w-24 h-24 border-2 border-bleu-500 rounded-lg -z-10" })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section id="welcome" class="section-padding bg-white"> <div class="container mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Text Column --> <div class="fade-in-up"> <h2 class="section-title">Bienvenue chez la Maison du Tr\xE9sor</h2> <p class="text-lg mb-6">\nNich\xE9 au coeur de la m\xE9dina de Marrakech, notre riad "Maison du Tr\xE9sor" vous invite \xE0 vivre un s\xE9jour unique alliant charme traditionnel et confort moderne.\n</p> <p class="mb-6">\nPoussez la porte et d\xE9couvrez un oasis de calme : patios baign\xE9s de lumi\xE8re, zelliges artisanaux, fontaines apaisantes et atmosph\xE8re chaleureuse loin de l\u2019agitation des souks.\n</p> <p class="mb-8">\nId\xE9al pour explorer les merveilles de Marrakech ou vous ressourcer au soleil, notre \xE9quipe d\xE9vou\xE9e s\u2019engage \xE0 faire de votre s\xE9jour une exp\xE9rience marocaine authentique et inoubliable.\n</p> <a href="/#about" class="btn btn-primary">En savoir plus</a> </div> <!-- \u2705 Swiper Carousel --> ', ` </div> </div> </section> <!-- \u2705 Swiper Initialization --> <script type="module" client:load>
  import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'

  Swiper.use([Navigation, Pagination, Autoplay])

  new Swiper('#carousel', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
<\/script>`])), maybeRenderHead(), renderComponent($$result, "RiadCarousel", RiadCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/pc/Desktop/riad-nico/project/src/components/RiadCarousel.jsx", "client:component-export": "default" }));
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/home/Welcome.astro", void 0);

const riad1Src = new Proxy({"src":"/_astro/riad-1.C1GTFST2.jpg","width":4551,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/notre-riad-hp/riad-1.jpg";
							}
							
							return target[name];
						}
					});

const riad2Src = new Proxy({"src":"/_astro/riad-2.DwX342MZ.jpg","width":4551,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/notre-riad-hp/riad-2.jpg";
							}
							
							return target[name];
						}
					});

const riad3Src = new Proxy({"src":"/_astro/riad-3.Bo1PvvZD.jpg","width":4550,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/notre-riad-hp/riad-3.jpg";
							}
							
							return target[name];
						}
					});

const riad4Src = new Proxy({"src":"/_astro/riad-4.vsflRWUX.jpg","width":4551,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/notre-riad-hp/riad-4.jpg";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="section-padding bg-sable-50"> <div class="container mx-auto"> <div class="text-center mb-12"> <h2 class="section-title mx-auto">Notre Riad</h2> <p class="max-w-2xl mx-auto text-lg">Découvrez l'histoire et les valeurs qui font de notre établissement un lieu unique à Marrakech</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="order-2 lg:order-1 fade-in-up"> <div class="grid grid-cols-2 gap-4"> <img${addAttribute(riad1Src.src, "src")} alt="Architecture du Riad" class="rounded-lg shadow-md h-48 w-full object-cover"> <img${addAttribute(riad2Src.src, "src")} alt="Détail de décoration marocaine" class="rounded-lg shadow-md h-48 w-full object-cover"> <img${addAttribute(riad3Src.src, "src")} alt="Salon marocain" class="rounded-lg shadow-md h-48 w-full object-cover"> <img${addAttribute(riad4Src.src, "src")} alt="Terrasse du Riad" class="rounded-lg shadow-md h-48 w-full object-cover"> </div> </div> <div class="order-1 lg:order-2 fade-in-up"> <h3 class="text-2xl font-serif mb-4 text-bleu-600">Vivez l’authenticité d’un riad marocain rénové</h3> <p class="mb-4">
Au coeur de Marrakech, notre riad "Maison du Trésor" allie charme traditionnel et confort moderne pour vous offrir un séjour chaleureux et authentique.
</p> <p class="mb-4">
Découvrez un patio lumineux avec une fontaine apaisante, entouré de zelliges artisanaux, de boiseries finement travaillées et d’un tadelakt aux teintes chaudes qui racontent l’art marocain.
</p> <p class="mb-6">
Notre équipe locale passionnée vous réserve un accueil sincère et vous guide vers les trésors cachés de Marrakech, loin des sentiers battus.
</p> </div> </div> </div> </section>`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/home/About.astro", void 0);

const blueRoomSrc = new Proxy({"src":"/_astro/riad-chambre-bleu.HH7ZIZp7.jpg","width":4551,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/notre-riad-hp/riad-chambre-bleu.jpg";
							}
							
							return target[name];
						}
					});

const whiteRoomSrc = new Proxy({"src":"/_astro/chambre-blanche-1.DkBNOE2A.jpg","width":4553,"height":3035,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/rooms/chambre-blanche-1.jpg";
							}
							
							return target[name];
						}
					});

const yellowRoomSrc = new Proxy({"src":"/_astro/chambre-jaune-1.KHHxw66a.jpg","width":4551,"height":3034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/rooms/chambre-jaune-1.jpg";
							}
							
							return target[name];
						}
					});

const $$RoomPreview = createComponent(($$result, $$props, $$slots) => {
  const rooms = [
    {
      id: "blue",
      name: "Chambre Blue",
      description: "Chambre cosy avec lit double, id\xE9ale pour un s\xE9jour romantique ou une escapade d\xE9tente.",
      image: blueRoomSrc.src,
      price: 110,
      features: ["Lit double confortable", "Ambiance apaisante", "Parfaite pour couples"]
    },
    {
      id: "blanche",
      name: "Chambre Blanche",
      description: "Chambre lumineuse avec lit double et terrasse priv\xE9e pour savourer le calme de la m\xE9dina.",
      image: whiteRoomSrc.src,
      price: 130,
      features: ["Terrasse priv\xE9e", "Lit double", "Lumi\xE8re naturelle"]
    },
    {
      id: "jaune",
      name: "Chambre Jaune",
      description: "Chambre ensoleill\xE9e avec lit double, situ\xE9e \xE0 deux pas de la piscine pour un acc\xE8s facile.",
      image: yellowRoomSrc.src,
      price: 125,
      features: ["Proximit\xE9 piscine", "Lit double confortable", "D\xE9coration chaleureuse"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="rooms-preview" class="section-padding bg-white"> <div class="container mx-auto"> <div class="text-center mb-12 fade-in-up"> <h2 class="section-title mx-auto">Nos Chambres</h2> <p class="max-w-3xl mx-auto text-lg">Chaque chambre reflète l’âme du Maroc, mêlant savoir-faire artisanal, confort moderne et atmosphère apaisante pour un séjour unique au cœur de Marrakech.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${rooms.map((room, index) => renderTemplate`<div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-up"${addAttribute(`--delay: ${index + 2}`, "style")}> <div class="relative overflow-hidden h-64"> <img${addAttribute(room.image, "src")}${addAttribute(room.name, "alt")} class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"> <div class="absolute bottom-0 left-0 bg-ocre-400 text-white p-2 bg-[#dfbc6f] text-[12px]">
À partir de ${room.price}€ / nuit
</div> </div> <div class="p-6"> <h3 class="text-xl font-serif font-medium mb-2">${room.name}</h3> <p class="text-gray-600 mb-4">${room.description}</p> <ul class="mb-6 space-y-2"> ${room.features.map((feature) => renderTemplate`<li class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-ocre-500" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul> <div class="flex justify-between items-center"> <a${addAttribute(`/chambres#${room.id}`, "href")} class="text-ocre-500 hover:text-ocre-600 font-medium">
En savoir plus
</a> <a href="/reservation" class="btn btn-outline text-sm py-2 px-4">
Réserver
</a> </div> </div> </div>`)} </div> <div class="text-center mt-12 fade-in-up"> <a href="/chambres" class="btn btn-primary">
Voir toutes nos chambres
</a> </div> </div> </section>`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/home/RoomPreview.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: "pool",
      title: "Piscine",
      description: "D\xE9tendez-vous dans notre piscine au c\u0153ur du patio, id\xE9ale pour se rafra\xEEchir apr\xE8s une journ\xE9e dans les souks de Marrakech."
    },
    {
      icon: "spa",
      title: "Hammam & Spa",
      description: "Vivez un moment de bien-\xEAtre absolu avec notre hammam traditionnel et nos soins \xE0 base d\u2019huiles essentielles marocaines."
    },
    {
      icon: "restaurant",
      title: "Restaurant",
      description: "Savourez une cuisine marocaine revisit\xE9e aux accents m\xE9diterran\xE9ens, pr\xE9par\xE9e chaque jour avec des produits frais du march\xE9."
    },
    {
      icon: "wifi",
      title: "Wi-Fi Gratuit",
      description: "Connectivit\xE9 assur\xE9e avec notre Wi-Fi haut d\xE9bit, disponible dans toutes les chambres et les espaces communs."
    },
    {
      icon: "breakfast",
      title: "Petit-d\xE9jeuner",
      description: "D\xE9marrez votre matin\xE9e avec un petit-d\xE9jeuner marocain copieux, servi sur notre terrasse baign\xE9e de soleil."
    },
    {
      icon: "excursion",
      title: "Excursions",
      description: "Partez \xE0 la d\xE9couverte du Maroc gr\xE2ce \xE0 nos excursions personnalis\xE9es vers le d\xE9sert, l\u2019Atlas ou les tr\xE9sors cach\xE9s de la r\xE9gion."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services-preview" class="section-padding bg-bleu-50"> <div class="container mx-auto"> <div class="text-center mb-12 fade-in-up"> <h2 class="section-title mx-auto">Nos Services</h2> <p class="max-w-2xl mx-auto text-lg">Découvrez nos services authentiques et attentifs qui feront de votre séjour une expérience inoubliable à Marrakech.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service, index) => renderTemplate`<div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 fade-in-up"${addAttribute(`--delay: ${index + 2}`, "style")}> <div class="flex items-start mb-4"> <div class="flex-shrink-0 mr-4"> ${service.icon === "pool" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-bleu-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.5S6 3 12 3s9 6.5 9 6.5-3 6.5-9 6.5-9-6.5-9-6.5z"></path> </svg>`} ${service.icon === "spa" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-bleu-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m2.879 2.879l-2.879-2.879M12 12l-7 7"></path> </svg>`} ${service.icon === "restaurant" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-bleu-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>`} ${service.icon === "wifi" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-bleu-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.246-3.905 14.15 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path> </svg>`} ${service.icon === "breakfast" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-bleu-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg>`} ${service.icon === "excursion" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-bleu-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path> </svg>`} </div> <div> <h3 class="text-xl font-serif font-medium mb-2">${service.title}</h3> <p class="text-gray-600">${service.description}</p> </div> </div> </div>`)} </div> <div class="text-center mt-12 fade-in-up"> <a href="/services" class="btn btn-primary">
Découvrir tous nos services
</a> </div> </div> </section>`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/home/Services.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Val\xE9rie FO",
      origin: "Paris, France",
      image: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80",
      comment: "Emplacement parfait \xE0 5 minutes de la place Jemaa El Fna.  Nouv avons pu visiter la ville et les souks tout \xE0 pied. Le personnel est tr\xE8s professionnel et \xE0 l'\xE9coute de nos demandes.  Nous (2 couples) avons s\xE9journ\xE9 dans la suite (2 belles chambres avec un salon commun). Bon petit d\xE9jeuner (sal\xE9 et sucr\xE9, vrai jus d'orange, tout fait maison).",
      rating: 5
    },
    {
      name: "Matthias M",
      origin: "Madrid, Espagne",
      image: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80",
      comment: "Vraiment un super endroit au coeur de Marrakech. Le personnel \xE9tait super, toujours pr\xEAt \xE0 vous aider pour tout, de la r\xE9servation de man\xE8ges au partage d'informations sur les lieux. Les chambres \xE9taient propres, le petit d\xE9jeuner \xE9tait d\xE9licieux et l'emplacement \xE9tait tr\xE8s calme, d'autant plus qu'il se trouve dans la m\xE9dina. Je reviendrai!",
      rating: 5
    },
    {
      name: "Nath Es",
      origin: "Bruxelles, Belgique",
      image: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80",
      comment: "Excellent s\xE9jour dans ce riad. Mustafa et son \xE9quipe est aux petits soins \xE0 l'int\xE9rieur et vous conseille pour organiser vos activit\xE9s sur Marrakech. Un rooftop \xE0 couper le souffle avec vue \xE0 360 sur Marrakech et les montagnes",
      rating: 5
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-padding bg-terracotta-50 relative overflow-hidden"> <!-- Motif décoratif --> <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"> <div class="absolute top-0 left-0 w-full h-full" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTkgMEg2MHYxMGgtOVYwaDh6TTAgMGgxMHY5SDBWMHpNNTAgMGgxMHY5SDUwVjB6TTEwIDBoMTB2OUgxMFYwek0yMCAwaDEwdjlIMjBWMHpNMzAgMGgxMHY5SDMwVjB6TTQwIDBoMTB2OUg0MFYwek0wIDEwaDEwdjlIMHYtOXpNNTAgMTBoMTB2OUg1MHYtOXpNMTAgMTBoMTB2OUgxMHYtOXpNMjAgMTBoMTB2OUgyMHYtOXpNMzAgMTBoMTB2OUgzMHYtOXpNNDAgMTBoMTB2OUg0MHYtOXpNMCAyMGgxMHY5SDB2LTl6TTUwIDIwaDEwdjlINTB2LTl6TTEwIDIwaDEwdjlIMTB2LTl6TTIwIDIwaDEwdjlIMjB2LTl6TTMwIDIwaDEwdjlIMzB2LTl6TTQwIDIwaDEwdjlINDB2LTl6TTAgMzBoMTB2OUgwdi05ek01MCAzMGgxMHY5SDUwdi05ek0xMCAzMGgxMHY5SDEwdi05ek0yMCAzMGgxMHY5SDIwdi05ek0zMCAzMGgxMHY5SDMwdi05ek00MCAzMGgxMHY5SDQwdi05ek0wIDQwaDEwdjlIMHYtOXpNNTAgNDBoMTB2OUg1MHYtOXpNMTAgNDBoMTB2OUgxMHYtOXpNMjAgNDBoMTB2OUgyMHYtOXpNMzAgNDBoMTB2OUgzMHYtOXpNNDAgNDBoMTB2OUg0MHYtOXpNMCA1MGgxMHY5SDB2LTl6TTUwIDUwaDF2OUg1MHYtOXpNMTAgNTBoMTB2OUgxMHYtOXpNMjAgNTBoMTB2OUgyMHYtOXpNMzAgNTBoMTB2OUgzMHYtOXpNNDAgNTBoMTB2OUg0MHYtOXoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPgo=')"></div> </div> <div class="container mx-auto relative z-10"> <div class="text-center mb-12 fade-in-up"> <h2 class="section-title mx-auto">Ce que disent nos hôtes</h2> <p class="max-w-2xl mx-auto text-lg">Des expériences authentiques racontées par ceux qui nous ont fait confiance</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${testimonials.map((testimonial, index) => renderTemplate`<div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 fade-in-up"${addAttribute(`--delay: ${index + 2}`, "style")}> <div class="flex items-center mb-4"> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")} class="w-12 h-12 rounded-full mr-4 object-cover"> <div> <h3 class="font-medium text-medium">${testimonial.name}</h3> </div> </div> <div class="mb-4"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<span${addAttribute(i < testimonial.rating ? "text-ocre-400" : "text-gray-300", "class")}>★</span>`)} </div> <blockquote class="italic text-gray-700 mb-4">
"${testimonial.comment}"
</blockquote> </div>`)} </div> <div class="flex justify-center items-center mt-12 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto fade-in-up"> <div class="flex-shrink-0 mr-6 hidden md:block"> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-ocre-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"></path> </svg> </div> <div> <div class="flex mb-4"> <div class="ml-4"> <p class="font-medium">Note moyenne sur TripAdvisor</p> <div class="flex"> <span class="text-ocre-400 text-xl">★★★★★</span> <span class="ml-2 text-lg font-medium">4.8/5</span> </div> </div> </div> <a href="https://www.tripadvisor.fr/Hotel_Review-g293734-d19186515-Reviews-Maison_Du_Tresor-Marrakech_Marrakech_Safi.html" target="_blank" rel="noopener noreferrer" class="text-bleu-500 hover:text-bleu-600 font-medium flex items-center">
Voir tous les avis
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </section>`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/home/Testimonials.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 relative"> <!-- Arrière-plan --> <div class="absolute inset-0 z-0 "> <img${addAttribute(ctaImgSrc.src, "src")} alt="Vue panoramique de Marrakech" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black opacity-40 "></div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto text-center text-white"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 fade-in-up">
Vivez l’authenticité de Marrakech dans un Riad d’exception
</h2> <p class="text-lg md:text-xl mb-8 fade-in-up">
Séjournez dans un cadre raffiné, alliant charme traditionnel, confort moderne et hospitalité marocaine. Réservez dès maintenant votre escapade inoubliable au cœur de la Médina.
</p> <div class="flex flex-col sm:flex-row justify-center items-center gap-4 fade-in-up"> <a href="/reservation" class="btn bg-ocre-400 hover:bg-ocre-500 text-white min-w-40">
Réserver votre séjour
</a> <a href="/contact" class="btn bg-white hover:bg-gray-100 text-gray-800 min-w-40">
Parler avec notre équipe
</a> </div> </div> </div> </section>`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/home/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Accueil", "description": "Bienvenue au Riad Maison du Tr\xE9sor \xE0 Marrakech, un havre de paix au c\u0153ur de la m\xE9dina. D\xE9couvrez l\u2019hospitalit\xE9 marocaine authentique." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeHero", $$HomeHero, {})} ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "RoomPreview", $$RoomPreview, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/pages/index.astro", void 0);

const $$file = "C:/Users/pc/Desktop/riad-nico/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
