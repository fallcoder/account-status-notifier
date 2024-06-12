// ce fichier contient la fonction pour générer des messages personnalisés en fonction du niveau de compte utilisateur

import {account_levels} from './accountLevels.js';

export function getUserAccountMessage(user) {
    if (!user || typeof user.name !== 'string' || typeof user.age !== 'number' || typeof user.accountLevel !== 'string') {
        return 'Invalid user data!';
    }

    let message;
    switch (user.accountLevel) {
        case account_levels.NORMAL:
            message = 'You have a normal account! Enjoy limited access with ads.';
            break;
        case account_levels.PREMIUM:
            message = 'You have a premium account! Enjoy unlimited access without ads.';
            break;
        case account_levels.MEGA_PREMIUM:
            message = 'You have a mega premium account! Enjoy all benefits including offline access and exclusive content.';
            break;
        default:
            message = 'Unknown account type!';
            break;
    }

    return `${user.name}, ${message}`;
}