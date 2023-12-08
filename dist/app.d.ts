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
/**
 * !Les fichiers de declaration
 * ? Exemple
*/
/**
 * !Types utilitaires
 * ? Exemple
*/
/**
 * class Poisons {

}

class Chat {

}


type AnimalOptions = { nager: any } | { sauter: any }
type AnimalFromOption<T> = T extends {nager: any} ? Poisons : Chat

function generator<T extends AnimalOptions >( options: T): AnimalFromOption<T>
{
  if ("nager" in options ){
    return new Poisons()
  } else {
    return new Chat()
  }
}

const a = generator({nager:'aze'})
 */
/**
 * class Poisons {
  cri () {
    return false
  }
}

class Chat {
  cri () {
    return 'miaouu'
  }
}

type AnimalCri<T> = T extends { cri : () => infer U} ? U : never

type A = AnimalCri<Poisons>
type B = AnimalCri<Chat>
 */
declare class FeatureFlags {
    env: string;
    darkMode(): boolean;
    privateMode(): boolean;
    nfswMode(): boolean;
}
type OptionFlags<T> = {
    +readonly [key in keyof T as `get${string & key}`]: T[key] extends () => boolean ? boolean : never;
};
type A = OptionFlags<FeatureFlags>;
