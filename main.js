// ce fichier est le point d'entrée principal de l'application

import { users } from "./users.js";
import { getUserAccountMessage } from "./getUserAccountMsg.js";

// ustilisation de map pour créer un tableau de messages personnalisés pour chaque utilisateur
let messages = users.map(user => getUserAccountMessage(user));

// affichage des messages
messages.forEach(message => console.log(message));
