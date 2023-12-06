declare const compteur: Element | null;
declare let i: number;
declare const increment: (e: Event) => void;
/**
 * !Les classes en typeScript
 * ? Exemple
*/
/**
 * !Type vs Interface
 * *Type :
 * - Peut utiliser des types primaire
 * - ne peut être redéfinit
 *
 * *Interface :
 * - Peut être étendu
 * - Peut être implémenté
 * ? Exemple
*/
/**
 * !unknown | Tuple | Enun
 * ? Exemple
*/
declare enum STEPS {
    Intro = 0,
    Selection = 1,
    Panier = 2,
    Paiement = 3
}
declare const steps: STEPS;
