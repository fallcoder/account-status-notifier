# Account Status Notifier
Account Status Notifier est un projet de gestion des niveaux de compte utilisateur. Ce système permet de personnaliser les messages affichés aux utilisateurs en fonction de leur niveau d'abonnement (normal, premium, mega-premium). Le projet est en cours de développement et d'autres fonctionnalités seront ajoutées à l'avenir.

# Fonctionnalités Actuelles
* **Gestion des utilisateurs:** Un ensemble d'utiulisateurs est défini avec des niveaux de comptes différents
* **Personnalisation des messages:** Les messages sont personnalisés en fonction du type de compte de chaque utilisateur

# Structure du Projet
Le projet est structuré en utilisant des modules ES6 pour une meilleure organisation et maintenabilité

## Fichiers et Dossiers
* `users.js` :  Contient les données des utilisateurs
* `getUserAccountMsg.js` : Contient la fonction pour générer des messages personnalisés en fonction du niveau de compte 
* `accountLevels.js` : Définit les différents niveaux de compte utilisateur
* `main.js` : Point d'entrée principal du projet, importe les utilisateurs et les fonctions pour afficher les messages

# Auteur
* Ce projet a été créé par Mouhamed Fall
* Email : mouhamedfall056@gmail.com
* Github : [@fallcoder](https://github.com/fallcoder)