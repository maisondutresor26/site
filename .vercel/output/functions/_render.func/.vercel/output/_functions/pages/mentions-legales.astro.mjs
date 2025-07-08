/* empty css                                    */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B_M4XSTg.mjs';
import 'kleur/colors';
import { $ as $$Layout, c as contactInfo } from '../chunks/Layout_BFr3x2kt.mjs';
export { renderers } from '../renderers.mjs';

const $$MentionsLegales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mentions L\xE9gales", "description": "Mentions l\xE9gales du Riad Marrakech - Informations l\xE9gales, conditions d'utilisation et r\xE8gles applicables." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-16 md:pt-40 md:pb-24 bg-navy-600 text-white"> <div class="container mx-auto"> <h1 class="text-4xl md:text-5xl font-serif mb-4">Mentions Légales</h1> <p class="text-xl">Informations légales concernant notre établissement et l'utilisation de notre site web</p> </div> </section> <section class="py-16"> <div class="container mx-auto"> <div class="max-w-3xl mx-auto prose prose-lg"> <h2>1. Informations <!-- légales --></h2> <p> <!--  Raison sociale : [Nom de la société]<br>
          Forme juridique : [Forme juridique]<br>
          Capital social : [Montant]<br>
          Siège social : [Adresse complète]<br>
          RCS : [Numéro]<br>
          N° TVA intracommunautaire : [Numéro]<br> -->
Téléphone : ${contactInfo[1].content}<br>
Email : ${contactInfo[2].content} </p> <!--     <h2>2. Directeur de la publication</h2>
        <p>[Nom du directeur de publication]</p>

        <h2>3. Hébergeur du site</h2>
        <p>
          [Nom de l'hébergeur]<br>
          [Adresse complète]<br>
          [Téléphone]
        </p> --> <h2>2. Propriété intellectuelle</h2> <p>
Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
</p> <h2>3. Liens hypertextes</h2> <p>
Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site. Ces liens sont établis de bonne foi et le Riad Marrakech ne peut être tenu responsable des changements de contenu ultérieurs de ces sites.
</p> <h2>4. Droit applicable</h2> <p>
Les présentes mentions légales sont soumises au droit marocain. En cas de litige, les tribunaux marocains seront seuls compétents.
</p> </div> </div> </section> ` })}`;
}, "C:/Users/pc/Desktop/riad-nico/project/src/pages/mentions-legales.astro", void 0);

const $$file = "C:/Users/pc/Desktop/riad-nico/project/src/pages/mentions-legales.astro";
const $$url = "/mentions-legales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MentionsLegales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
