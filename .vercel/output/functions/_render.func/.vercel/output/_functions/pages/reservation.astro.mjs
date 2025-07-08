/* empty css                                    */
import { a as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, b as addAttribute } from '../chunks/astro/server_B_M4XSTg.mjs';
import 'kleur/colors';
import { $ as $$Layout, c as contactInfo } from '../chunks/Layout_BFr3x2kt.mjs';
import 'clsx';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$ReservationForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="bg-white rounded-lg shadow-md p-6 md:p-8" id="reservation-form"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="form-group"> <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">
Prénom <span class="text-terracotta-500">*</span> </label> <input type="text" id="first-name" name="first-name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="Votre prénom"> </div> <div class="form-group"> <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">
Nom <span class="text-terracotta-500">*</span> </label> <input type="text" id="last-name" name="last-name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="Votre nom"> </div> <div class="form-group"> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
Email <span class="text-terracotta-500">*</span> </label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="votre@email.com"> </div> <div class="form-group"> <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
Téléphone <span class="text-terracotta-500">*</span> </label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="+33 X XX XX XX XX"> </div> <div class="form-group"> <label for="room-type" class="block text-sm font-medium text-gray-700 mb-1">
Type de chambre <span class="text-terracotta-500">*</span> </label> <select id="room-type" name="room-type" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors"> <option value="">Sélectionnez une chambre</option> <option value="suite-jasmin">Suite Jasmin</option> <option value="chambre-menthe">Chambre Menthe</option> <option value="suite-safran">Suite Safran</option> <option value="chambre-rose">Chambre Rose</option> <option value="suite-royale">Suite Royale</option> </select> </div> <div class="form-group"> <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">
Nombre de personnes <span class="text-terracotta-500">*</span> </label> <select id="guests" name="guests" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors"> <option value="1">1 personne</option> <option value="2" selected>2 personnes</option> <option value="3">3 personnes</option> <option value="4">4 personnes</option> <option value="more">Plus de 4 personnes</option> </select> </div> <div class="form-group"> <label for="check-in" class="block text-sm font-medium text-gray-700 mb-1">
Date d'arrivée <span class="text-terracotta-500">*</span> </label> <input type="date" id="check-in" name="check-in" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors"> </div> <div class="form-group"> <label for="check-out" class="block text-sm font-medium text-gray-700 mb-1">
Date de départ <span class="text-terracotta-500">*</span> </label> <input type="date" id="check-out" name="check-out" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors"> </div> <div class="form-group md:col-span-2"> <label for="special-requests" class="block text-sm font-medium text-gray-700 mb-1">
Demandes spéciales
</label> <textarea id="special-requests" name="special-requests" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="Informations supplémentaires ou demandes particulières..."></textarea> </div> </div> <div class="mt-6"> <label class="flex items-start"> <input type="checkbox" name="terms" required class="mt-1 text-ocre-400 focus:ring-ocre-400 border-gray-300 rounded"> <span class="ml-2 text-sm text-gray-600">
J'accepte les <a href="/politique-confidentialite" class="text-ocre-500 hover:text-ocre-600">politique de confidentialité</a> <span class="text-terracotta-500">*</span> </span> </label> </div> <div class="mt-6"> <button type="submit" class="btn btn-primary w-full">
Demander une réservation
</button> </div> <p class="mt-4 text-sm text-gray-600 italic"> <span class="text-terracotta-500">*</span> Champs obligatoires. Cette demande ne constitue pas une réservation définitive. Nous vous contacterons dans les 24 heures pour confirmer la disponibilité et finaliser votre réservation.
</p> </form> `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/ui/ReservationForm.astro", void 0);

const heroBgSrc = new Proxy({"src":"/_astro/reservation-hero-bg.iqz4ik_S.jpg","width":4553,"height":3035,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pc/Desktop/riad-nico/project/src/assets/reservation-hero-bg.jpg";
							}
							
							return target[name];
						}
					});

const $$Reservation = createComponent(($$result, $$props, $$slots) => {
  const reservationSteps = [
    {
      number: 1,
      title: "Demande",
      description: "Remplissez le formulaire de demande avec vos dates et pr\xE9f\xE9rences."
    },
    {
      number: 2,
      title: "Confirmation",
      description: "Nous v\xE9rifions la disponibilit\xE9 et vous envoyons une confirmation dans les 24h."
    },
    {
      number: 3,
      title: "Acompte",
      description: "Un acompte de 30% vous sera demand\xE9 pour garantir votre r\xE9servation."
    },
    {
      number: 4,
      title: "S\xE9jour",
      description: "Profitez de votre s\xE9jour au Riad ! Le solde sera r\xE9gl\xE9 \xE0 votre arriv\xE9e."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "R\xE9servations", "description": "R\xE9servez votre s\xE9jour au Riad Maison du Tr\xE9sor \xE0 Marrakech. Disponibilit\xE9s en temps r\xE9el et r\xE9servation simple, rapide et s\xE9curis\xE9e.", "data-astro-cid-r2s44esw": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white" data-astro-cid-r2s44esw> <div class="absolute inset-0 z-0" data-astro-cid-r2s44esw> <img${addAttribute(heroBgSrc.src, "src")} alt="Calendrier" class="w-full h-full object-cover opacity-50" data-astro-cid-r2s44esw> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-astro-cid-r2s44esw> <div class="max-w-3xl" data-astro-cid-r2s44esw> <h1 class="text-4xl md:text-5xl font-serif mb-4" data-astro-cid-r2s44esw>Réservation</h1> <p class="text-xl" data-astro-cid-r2s44esw>Réservez votre séjour dans notre Riad de charme au cœur de Marrakech.</p> </div> </div> </section>  <section class="py-16 bg-white" data-astro-cid-r2s44esw> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-r2s44esw> <div class="max-w-4xl mx-auto" data-astro-cid-r2s44esw> <h2 class="text-3xl font-serif mb-6 text-center" data-astro-cid-r2s44esw>Comment réserver</h2> <p class="text-center mb-12 text-gray-700" data-astro-cid-r2s44esw>
Suivez ces étapes simples pour réserver votre séjour dans notre Riad de charme.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-astro-cid-r2s44esw> ${reservationSteps.map((step) => renderTemplate`<div class="text-center fade-in-up" data-astro-cid-r2s44esw> <div class="w-12 h-12 rounded-full bg-ocre-500 text-white flex items-center justify-center mx-auto mb-4" data-astro-cid-r2s44esw> <span class="text-xl font-bold" data-astro-cid-r2s44esw>${step.number}</span> </div> <h3 class="text-xl font-medium mb-2" data-astro-cid-r2s44esw>${step.title}</h3> <p class="text-gray-600" data-astro-cid-r2s44esw>${step.description}</p> </div>`)} </div> <div class="bg-sable-50 rounded-lg p-8 shadow-md mb-12 fade-in-up" data-astro-cid-r2s44esw> <h3 class="text-xl font-medium mb-4" data-astro-cid-r2s44esw>Informations importantes</h3> <ul class="space-y-2" data-astro-cid-r2s44esw> <li class="flex items-start" data-astro-cid-r2s44esw> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-ocre-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-r2s44esw> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-astro-cid-r2s44esw></path> </svg> <span data-astro-cid-r2s44esw>Check-in : à partir de 14h00 / Check-out : jusqu'à 12h00</span> </li> <li class="flex items-start" data-astro-cid-r2s44esw> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-ocre-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-r2s44esw> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-astro-cid-r2s44esw></path> </svg> <span data-astro-cid-r2s44esw>Un acompte de 30% est demandé pour confirmer la réservation</span> </li> <li class="flex items-start" data-astro-cid-r2s44esw> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-ocre-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-r2s44esw> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-astro-cid-r2s44esw></path> </svg> <span data-astro-cid-r2s44esw>Possibilité de paiement par carte bancaire, virement ou espèces</span> </li> <li class="flex items-start" data-astro-cid-r2s44esw> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-ocre-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-r2s44esw> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-astro-cid-r2s44esw></path> </svg> <span data-astro-cid-r2s44esw>Annulation gratuite jusqu'à 7 jours avant l'arrivée</span> </li> </ul> </div> </div> </div> </section>  <section class="py-16 bg-sable-50" data-astro-cid-r2s44esw> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-r2s44esw> <div class="max-w-3xl mx-auto" data-astro-cid-r2s44esw> <h2 class="text-3xl font-serif mb-6 text-center" data-astro-cid-r2s44esw>Demande de réservation</h2> <p class="text-center mb-12 text-gray-700" data-astro-cid-r2s44esw>
Complétez ce formulaire pour vérifier la disponibilité et les tarifs pour vos dates souhaitées. Nous vous répondrons dans les 24 heures.
</p> ${renderComponent($$result2, "ReservationForm", $$ReservationForm, { "data-astro-cid-r2s44esw": true })} <div class="mt-12 text-center" data-astro-cid-r2s44esw> <p class="text-gray-700" data-astro-cid-r2s44esw>
Vous préférez réserver par téléphone ? Appelez-nous au <a${addAttribute(contactInfo[1].link, "href")} class="text-ocre-500 hover:text-ocre-600 font-medium" data-astro-cid-r2s44esw>${contactInfo[1].content}</a> </p> </div> </div> </div> </section>  <section class="py-16 bg-white" data-astro-cid-r2s44esw> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-r2s44esw> <div class="max-w-3xl mx-auto" data-astro-cid-r2s44esw> <h2 class="text-3xl font-serif mb-6 text-center" data-astro-cid-r2s44esw>Conditions de réservation</h2> <div class="space-y-8" data-astro-cid-r2s44esw> <div class="fade-in-up" data-astro-cid-r2s44esw> <h3 class="text-xl font-medium mb-3" data-astro-cid-r2s44esw>Politique d'annulation</h3> <ul class="space-y-2 list-disc pl-5 text-gray-700" data-astro-cid-r2s44esw> <li data-astro-cid-r2s44esw>Annulation gratuite jusqu'à 7 jours avant la date d'arrivée</li> <li data-astro-cid-r2s44esw>Entre 7 jours et 48h avant l'arrivée : 50% de la première nuit sera facturé</li> <li data-astro-cid-r2s44esw>Moins de 48h avant l'arrivée : 100% de la première nuit sera facturé</li> <li data-astro-cid-r2s44esw>Non-présentation (no-show) : 100% du séjour sera facturé</li> </ul> </div> <div class="fade-in-up hidden" data-astro-cid-r2s44esw> <h3 class="text-xl font-medium mb-3" data-astro-cid-r2s44esw>Politique concernant les enfants</h3> <p class="text-gray-700 mb-3" data-astro-cid-r2s44esw>
Les enfants de tous âges sont les bienvenus dans notre Riad. Nous proposons des lits d'appoint et des berceaux sur demande (selon disponibilité).
</p> <ul class="space-y-2 list-disc pl-5 text-gray-700" data-astro-cid-r2s44esw> <li data-astro-cid-r2s44esw>Enfants de 0 à 2 ans : séjour gratuit (berceau gratuit selon disponibilité)</li> <li data-astro-cid-r2s44esw>Enfants de 3 à 12 ans : 25€ par nuit pour un lit d'appoint</li> <li data-astro-cid-r2s44esw>Personnes de plus de 12 ans : 40€ par nuit pour un lit d'appoint</li> </ul> </div> <div class="fade-in-up" data-astro-cid-r2s44esw> <h3 class="text-xl font-medium mb-3" data-astro-cid-r2s44esw>Modalités de paiement</h3> <p class="text-gray-700 mb-3" data-astro-cid-r2s44esw>
Pour confirmer votre réservation, un acompte de 30% du montant total du séjour est demandé. Le solde sera à régler lors de votre arrivée au Riad.
</p> <p class="text-gray-700" data-astro-cid-r2s44esw>
Moyens de paiement acceptés : cartes bancaires (Visa, Mastercard), virements bancaires, espèces.
</p> </div> </div> </div> </div> </section> ` })}  `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/pages/reservation.astro", void 0);

const $$file = "C:/Users/pc/Desktop/riad-nico/project/src/pages/reservation.astro";
const $$url = "/reservation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reservation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
