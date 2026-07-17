# Trust Services

Site vitrine bilingue (FR / EN) pour **Trust Services** — mise à disposition
d'une Mercedes-Benz Classe S 580 blindée, avec ou sans chauffeur, à Paris et à
l'international.

Construit avec **[Astro](https://astro.build)** : statique, rapide, sans
JavaScript superflu.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
```

## Scripts

| Commande            | Effet                                            |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Serveur de développement                         |
| `npm run build`     | Build de production dans `dist/`                 |
| `npm run preview`   | Prévisualise le build                            |

## Structure

```
src/
  i18n/content.ts        Contenu bilingue (une source de vérité FR + EN)
  layouts/Base.astro     <head>, polices, styles globaux, design tokens
  components/
    Site.astro           Assemble toutes les sections + reveal au scroll
    Header.astro         En-tête sticky (nav + bascule de langue)
    Hero.astro           Section d'accroche
    Strip.astro          Bande d'arguments
    Vehicle.astro        Le véhicule + grille photos (ouvre la galerie)
    Services.astro       Les 3 missions
    Band.astro           Bandeau pleine largeur
    Quote.astro          Formulaire de devis (soumission mailto)
    Footer.astro         Pied de page
    Lightbox.astro       Visionneuse plein écran (clavier, miniatures)
  pages/
    index.astro          FR — /
    en/index.astro       EN — /en/
public/assets/           Photos + logos (voir assets/README.txt)
scripts/
  make-placeholders.mjs  Génère des placeholders sombres si des assets manquent
```

## Internationalisation

- **FR** à la racine (`/`), **EN** sous `/en/`.
- Tout le texte vit dans `src/i18n/content.ts`. La bascule de langue (header /
  footer) est un simple lien entre les deux routes — aucun JavaScript requis.

## Images

Les vraies photos et logos se déposent dans `public/assets/` sous les noms
exacts listés dans [`public/assets/README.txt`](public/assets/README.txt). Des
placeholders sombres sont fournis pour que la mise en page soit visible avant
livraison des visuels ; ils sont écrasés par les fichiers définitifs.

Les photos sont attendues **déjà étalonnées** (désaturées + assombries). Si ce
n'est pas le cas, le filtre CSS `.toned` (dans `src/layouts/Base.astro`)
applique un rendu sombre équivalent.

## Formulaire de devis

Le formulaire ouvre le client mail du visiteur pré-rempli vers
`contact@trust-services.fr` puis affiche une confirmation. **Pour la
production**, brancher un vrai envoi (Formspree, API ou fonction serverless) —
voir le `<script>` dans `src/components/Quote.astro`.

## Déploiement

Sortie statique (`dist/`) : déployable sur Netlify, Vercel, Cloudflare Pages ou
tout hébergeur statique. Aucune configuration serveur nécessaire.
