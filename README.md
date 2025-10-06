🕹️ Simple Pong

Projet individuel réalisé dans le cadre du module JavaScript — par Arthur
Encadrant : Christophe Vallot

🎯 Objectif du projet

L’objectif de ce projet est de développer une application Web jouable reprenant le principe du jeu classique Pong, à l’aide des technologies HTML, CSS et JavaScript.

Ce projet permet de mettre en pratique :

Les bases du langage JavaScript (variables, fonctions, événements).

La manipulation du DOM et de l’élément <canvas>.

Les bonnes pratiques de structuration du code (séparation du HTML, CSS et JS).

La création d’une interface responsive et accessible.

🧰 Socle technique
Élément	Détails
Langages	JavaScript, HTML5, CSS3
IDE	Visual Studio Code
Versionnage	Git & GitHub (repository public)
Hébergement	GitHub Pages
Icônes	Font Awesome

🕹️ Fonctionnalités (Version 1 - V1)

Un bouton permet de lancer ou réinitialiser la partie.

Le score correspond à la durée de la partie en secondes.

La balle se déplace automatiquement dans l’aire de jeu.

Au lancement, la balle prend une direction aléatoire.

Le joueur contrôle la raquette avec les flèches gauche / droite ou via des commandes tactiles.

La balle rebondit sur les murs gauche, droit et haut, ainsi que sur la raquette.

Si la balle est ratée, la partie se termine et un message de fin s’affiche.

Le score est affiché en bas de l’écran.

🕹️ Fonctionnalités avancées (Version 2 - V2)

La vitesse de la balle augmente progressivement à chaque rebond (jusqu’à 5× la vitesse initiale).

La balle ne peut jamais se déplacer strictement verticalement.

Le meilleur score (plus longue durée) est enregistré dans le localStorage du navigateur.

🚀 Fonctionnalités bonus (optionnelles)

Le joueur peut choisir les couleurs du fond et des éléments du jeu, enregistrées dans le localStorage.

Le joueur peut paramétrer la vitesse d’accélération de la balle.

📱 Accessibilité et Responsivité

Le jeu est entièrement intégré dans une balise <canvas>.

La page est responsive (versions desktop et mobile).

Le code est valide W3C (HTML & CSS).

Le projet vise une accessibilité conforme à la norme WCAG AA 2.0.

🔍 Outils de vérification recommandés

Validateur HTML/CSS du W3C

Achecker – Accessibilité

Extension Wave Evaluation Tool

💾 Structure du projet
📦 simple-pong/
├── index.html        # Structure principale du jeu
├── style.css         # Feuille de style (mise en page + responsive)
├── script.js         # Logique du jeu Pong
├── assets/           # (optionnel) ressources supplémentaires (sons, icônes, etc.)
└── README.md         # Documentation du projet

🧠 Points d’apprentissage

Manipulation de l’API Canvas (dessin, mouvement, collisions).

Gestion des événements clavier et tactiles.

Utilisation du localStorage.

Application des bonnes pratiques de développement web.

Mise en place d’un projet versionné sur Git et GitHub.

👨‍💻 Auteur

Arthur — Étudiant en BUT 2 Informatique, Université de Caen
Encadrant : Christophe Vallot
