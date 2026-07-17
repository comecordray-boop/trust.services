ASSETS — Trust Services
=======================

Déposez ici les fichiers définitifs (ils écrasent les placeholders générés).
Les noms doivent être EXACTEMENT ceux-ci — le code les référence tels quels.

PHOTOS (JPEG, déjà étalonnées : désaturées ~28 % + assombries)
  ext-front.jpg     Trois-quarts avant  (hero + galerie #1)
  ext-side.jpg      Profil              (grande image section véhicule + galerie #2)
  ext-rear3q.jpg    Trois-quarts arrière(bandeau pleine largeur + galerie #3)
  ext-rear.jpg      Face arrière        (galerie #4)
  int-dash.jpg      Poste de conduite   (vignette véhicule + galerie #5)
  det-door.jpg      Habitacle arrière   (galerie #6)
  det-armor.jpg     Vitrage blindé      (vignette véhicule + galerie #7)
  det-speaker.jpg   Audio Burmester     (galerie #8)

LOGOS (PNG, blanc détouré sur fond transparent)
  logo-lockup-white.png   Logo + texte « TRUST SERVICES » (header, footer)
  logo-mark-white.png     Monogramme « TR » seul (hero)
  logo-trust.png          Logo source d'origine (référence, non affiché)

Recommandations
  - Photos : largeur ~2000 px, qualité ~82 %, sRGB.
  - Traitement sombre : soit fourni déjà étalonné, soit laisser le filtre CSS
    `.toned` (voir src/layouts/Base.astro) l'appliquer automatiquement.
  - Régénérer les placeholders manquants : `node scripts/make-placeholders.mjs`
