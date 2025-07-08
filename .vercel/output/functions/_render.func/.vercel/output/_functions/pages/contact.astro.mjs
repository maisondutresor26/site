/* empty css                                    */
import { a as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, b as addAttribute } from '../chunks/astro/server_B_M4XSTg.mjs';
import 'kleur/colors';
import { $ as $$Layout, c as contactInfo } from '../chunks/Layout_BFr3x2kt.mjs';
import 'clsx';
import { c as ctaImgSrc } from '../chunks/home-page-cta_m8-nq_4A.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="bg-white rounded-lg shadow-md p-6 md:p-8" id="contact-form"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="form-group"> <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
Nom complet <span class="text-terracotta-500">*</span> </label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="Votre nom"> </div> <div class="form-group"> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
Email <span class="text-terracotta-500">*</span> </label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="votre@email.com"> </div> <div class="form-group md:col-span-2"> <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
Sujet <span class="text-terracotta-500">*</span> </label> <input type="text" id="subject" name="subject" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="Sujet de votre message"> </div> <div class="form-group md:col-span-2"> <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
Message <span class="text-terracotta-500">*</span> </label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocre-400 focus:border-ocre-400 transition-colors" placeholder="Votre message..."></textarea> </div> <div class="w-full"> <label class="flex items-start w-[340px]"> <input type="checkbox" name="terms" required class="mt-1 text-ocre-400 focus:ring-ocre-400 border-gray-300 rounded"> <span class="ml-2 text-sm text-gray-600 block w-full">
J'accepte les <a href="/politique-confidentialite" class="text-ocre-500 hover:text-ocre-600">politique de confidentialité</a> <span class="text-terracotta-500">*</span> </span> </label> </div> </div> <div class="mt-6"> <button type="submit" class="btn btn-primary w-full">
Envoyer le message
</button> </div> </form> `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/components/ui/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Quelle est l'heure d'arriv\xE9e et de d\xE9part ?",
      answer: "L'heure d'arriv\xE9e (check-in) est \xE0 partir de 14h00, et l'heure de d\xE9part (check-out) est jusqu'\xE0 12h00. Des arrangements sp\xE9ciaux peuvent \xEAtre faits sur demande, selon disponibilit\xE9."
    },
    {
      question: "Le petit-d\xE9jeuner est-il inclus dans le prix de la chambre ?",
      answer: "Oui, toutes nos chambres incluent un petit-d\xE9jeuner marocain traditionnel servi de 08h00 \xE0 10h00 sur la terrasse ou dans le patio, selon votre pr\xE9f\xE9rence."
    },
    {
      question: "Comment se rendre au Riad depuis l'a\xE9roport ?",
      answer: "Nous proposons un service de transfert depuis l'a\xE9roport de Marrakech. Vous pouvez \xE9galement prendre un taxi, mais nous recommandons notre service de transfert car le Riad se trouve dans la m\xE9dina o\xF9 les taxis ne peuvent pas entrer."
    },
    {
      question: "Y a-t-il un restaurant dans le Riad ?",
      answer: "Oui, notre Riad dispose d'un restaurant qui sert des plats traditionnels marocains. Les repas peuvent \xEAtre servis dans le patio, sur la terrasse ou dans votre chambre. Il est conseill\xE9 de r\xE9server vos d\xEEners \xE0 l'avance."
    },
    {
      question: "Le Riad propose-t-il des excursions ?",
      answer: "Oui, notre service de conciergerie peut organiser diverses excursions \xE0 Marrakech et dans ses environs. Nous proposons des visites guid\xE9es de la m\xE9dina, des excursions d'une journ\xE9e dans l'Atlas, \xE0 Essaouira ou dans le d\xE9sert d'Agafay."
    },
    {
      question: "Y a-t-il le Wi-Fi dans les chambres ?",
      answer: "Oui, le Wi-Fi gratuit est disponible dans tout le Riad, y compris dans les chambres, les espaces communs et la terrasse."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact", "description": "Contactez le Riad Maison du Tr\xE9sor \xE0 Marrakech pour toute question, r\xE9servation ou demande sp\xE9ciale. Nous sommes \xE0 votre \xE9coute.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white" data-astro-cid-uw5kdbxl> <div class="absolute inset-0 z-0" data-astro-cid-uw5kdbxl> <img${addAttribute(ctaImgSrc.src, "src")} alt="Téléphone vintage marocain" class="w-full h-full object-cover opacity-50" data-astro-cid-uw5kdbxl> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-astro-cid-uw5kdbxl> <div class="max-w-3xl" data-astro-cid-uw5kdbxl> <h1 class="text-4xl md:text-5xl font-serif mb-4" data-astro-cid-uw5kdbxl>Contact</h1> <p class="text-xl" data-astro-cid-uw5kdbxl>Nous sommes à votre disposition pour répondre à toutes vos questions et vous aider à planifier votre séjour.</p> </div> </div> </section>  <section class="py-16 bg-white" data-astro-cid-uw5kdbxl> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uw5kdbxl> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12" data-astro-cid-uw5kdbxl> <!-- Contact form --> <div class="order-2 lg:order-1 fade-in-up" data-astro-cid-uw5kdbxl> <h2 class="text-3xl font-serif mb-6" data-astro-cid-uw5kdbxl>Envoyez-nous un message</h2> <p class="mb-8 text-gray-700" data-astro-cid-uw5kdbxl>
Vous avez des questions sur nos chambres, nos services ou vous souhaitez réserver ? Utilisez ce formulaire pour nous contacter, nous vous répondrons dans les plus brefs délais.
</p> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-uw5kdbxl": true })} </div> <!-- Contact info --> <div class="order-1 lg:order-2 fade-in-up" data-astro-cid-uw5kdbxl> <h2 class="text-3xl font-serif mb-6" data-astro-cid-uw5kdbxl>Informations de contact</h2> <p class="mb-8 text-gray-700" data-astro-cid-uw5kdbxl>
N'hésitez pas à nous contacter par téléphone ou email, ou à venir nous rendre visite. Notre équipe multilingue est disponible pour vous répondre.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" data-astro-cid-uw5kdbxl> ${contactInfo.map((item) => renderTemplate`<div class="flex" data-astro-cid-uw5kdbxl> <div class="flex-shrink-0 mr-4 bg-terracotta-100 text-terracotta-600 rounded-full p-3 self-start" data-astro-cid-uw5kdbxl> ${item.icon === "location" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-uw5kdbxl></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-uw5kdbxl></path> </svg>`} ${item.icon === "phone" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-uw5kdbxl></path> </svg>`} ${item.icon === "phonee" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-uw5kdbxl></path> </svg>`} ${item.icon === "email" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-uw5kdbxl></path> </svg>`} ${item.icon === "clock" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-uw5kdbxl></path> </svg>`} </div> <div data-astro-cid-uw5kdbxl> <h3 class="font-medium text-lg mb-1" data-astro-cid-uw5kdbxl>${item.title}</h3> <p class="text-gray-700 mb-2" data-astro-cid-uw5kdbxl>${item.content}</p> ${item.link && renderTemplate`<a${addAttribute(item.link, "href")} class="text-terracotta-500 hover:text-terracotta-600 inline-flex items-center" data-astro-cid-uw5kdbxl> ${item.linkText} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-uw5kdbxl> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-uw5kdbxl></path> </svg> </a>`} </div> </div>`)} </div> <!-- Map --> <div class="rounded-lg overflow-hidden shadow-md h-80 fade-in-up" data-astro-cid-uw5kdbxl> <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.149582763134!2d-7.985832799999999!3d31.622866300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef3bd99a896b%3A0xd5562f93e05cd8bf!2sMaison%20Du%20Tresor%20marrakech!5e1!3m2!1sfr!2sma!4v1748169457530!5m2!1sfr!2sma" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-uw5kdbxl></iframe> </div> </div> </div> </div> </section>  <section id="faq" class="py-16 bg-sable-50" data-astro-cid-uw5kdbxl> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uw5kdbxl> <div class="max-w-3xl mx-auto" data-astro-cid-uw5kdbxl> <h2 class="text-3xl font-serif mb-6 text-center" data-astro-cid-uw5kdbxl>Questions fréquentes</h2> <p class="text-center mb-12 text-gray-700" data-astro-cid-uw5kdbxl>
Nous avons rassemblé les questions les plus courantes pour vous aider à préparer votre séjour.
</p> <div class="space-y-6" data-astro-cid-uw5kdbxl> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden fade-in-up" data-astro-cid-uw5kdbxl> <button class="faq-toggle w-full text-left px-6 py-4 focus:outline-none"${addAttribute(index, "data-index")} data-astro-cid-uw5kdbxl> <div class="flex justify-between items-center" data-astro-cid-uw5kdbxl> <h3 class="font-medium text-lg" data-astro-cid-uw5kdbxl>${faq.question}</h3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-uw5kdbxl> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-uw5kdbxl></path> </svg> </div> </button> <div class="faq-content px-6 pb-4 hidden" data-astro-cid-uw5kdbxl> <p class="text-gray-700" data-astro-cid-uw5kdbxl>${faq.answer}</p> </div> </div>`)} </div> </div> </div> </section>  <section class="py-16 bg-white" data-astro-cid-uw5kdbxl> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-uw5kdbxl> <div class="max-w-3xl mx-auto text-center fade-in-up" data-astro-cid-uw5kdbxl> <h2 class="text-3xl font-serif mb-4" data-astro-cid-uw5kdbxl>Planifiez votre séjour</h2> <p class="text-lg mb-8" data-astro-cid-uw5kdbxl>Prêt à réserver votre séjour dans notre Riad de charme ? Consultez nos disponibilités et tarifs.</p> <div class="flex flex-col sm:flex-row justify-center gap-4" data-astro-cid-uw5kdbxl> <a href="/reservation" class="btn btn-primary" data-astro-cid-uw5kdbxl>
Demander une réservation
</a> <a href="/chambres" class="btn btn-outline" data-astro-cid-uw5kdbxl>
Voir nos chambres
</a> </div> </div> </div> </section> ` })}  `;
}, "C:/Users/pc/Desktop/riad-nico/project/src/pages/contact.astro", void 0);

const $$file = "C:/Users/pc/Desktop/riad-nico/project/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
