# Prototypes — refonte du site

## plutonien.html

Direction retenue. Maquette HTML autonome (aucune dépendance, aucun build) :
ouvrir le fichier dans un navigateur.

**Palette** — blanc cassé `#FAFAF8`, encre `#131320`, accent violet `#6C5CE7`.
Un seul accent, mesh en fond fixe, jamais de gradient sur le texte.

**Typographie** — Sora (titres), Inter (texte), JetBrains Mono (libellés).

**Message** — l'équipe a déjà livré trois produits ensemble depuis 2020
(Heywear, Furo, SoundCheck). Elle fait de l'ingénierie *et* du produit.

**Signature** — sphère filaire en canvas dans le hero, réagit au curseur.
`prefers-reduced-motion` est respecté.

### À faire avant la mise en production
- [ ] Photos de l'équipe dans `public/team/` (`yanis.jpg`, `jonathan.jpg`,
      puis `sami.jpg` et `candice.jpg` en remplacement des monogrammes)
- [ ] Valider l'engagement « chiffrage sous 5 jours ouvrés »
- [ ] Logos clients : les remettre uniquement avec une phrase de contexte chacun
- [ ] Portage dans les composants Next.js
