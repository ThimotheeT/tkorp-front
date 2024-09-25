## Test Technique TKorp - Application NextJS Partie Front

# Présentation du Projet

Ce projet est un test technique réalisé pour TKorp, consistant en une application web développée
avec NextJS et Tailwind CSS, utilisant d'abord un JSON puis à présent une API backend Nest. 
L'objectif était de créer une interface utilisateur permettant de visualiser et d'interagir 
avec des données de personnes et d'animaux.

# Fonctionnalités Principales

- Affichage paginé de la liste des personnes
- Affichage paginé de la liste des animaux
- Page de détails pour chaque personne, incluant le nombre d'animaux possédés
- Page de détails pour chaque animal, incluant les informations sur son propriétaire
- Barre de navigation pour une navigation facile entre les pages
- Design responsive pour une expérience utilisateur optimale sur tous les appareils

# Technologies Utilisées

- NextJS pour le frontend
- Tailwind CSS pour le style
- NestJS pour l'API backend

# Installation et Lancement

- Clonez ce dépôt
- Installez les dépendances du frontend : `npm install`
- Clonez l'API backend Nest : https://github.com/ThimotheeT/tkorp-back et suivre les indications de lancement
- Lancez l'application frontend en mode développement : `npm run dev`
- Ouvrez http://localhost:3001 dans votre navigateur (si vous lancez l'API en premier sur 3000)

# Structure du Projet

- components/ : Composants réutilisables (Navigation, Pagination)
- public/ : Fichiers statiques (images)
- app/ : Pages de l'application
- utils/ : Services pour interagir avec l'API backend

# Temps de Réalisation

Ce projet a été réalisé en approximativement 3 heures.

# Remarques

Ce projet a été développé dans le cadre d'un test technique.