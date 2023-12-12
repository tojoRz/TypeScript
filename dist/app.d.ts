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
/**
 * import type {PickByValue} from 'utility-types'
class FeatureFlags {
  env = 'hello'
  darkMode () {return true}
  privateMode () {return true}
  nfswMode () {return true}
}

type OptionFlags<T> = {
  +readonly [key in keyof PickByValue <T, () => any> as `is${ Capitalize < string & key > }`]: T[key] extends () => any ? ReturnType<T[key]> : never
}

type A = OptionFlags<FeatureFlags>

 */
/**
 * !L'Opérateur satisfies
 * ? Exemple
*/
/**
 * type Colors = Record<string, [number, number, number] | string>

function demo (c: Colors){

}

const colors = {
  bleu: [0, 0, 255],
  red: "#ff0000",
  green: [0, 255,0]
} satisfies Colors

colors.green.map(v => v/2)

demo(colors)

export default {}
 */
/**
 * !AlpineJs
 * ? Exemple
*/
/**
 * import Alpine from 'alpinejs'

Alpine.data('myComponent', function (initial: number = 0 ) {
  return {
    compteur: initial,
    increment () {
      this.compteur += 1
    },
    decrement () {
      this.compteur -= 1
      if ( this.compteur < 0 ) {
        this.$el.style.display = "none"
      }
    },
    getCompteur () {
      return this.compteur
    }
  }
})
Alpine.start();
 */
/**
 * !Forme conditionnel
 * ? Exemple
*/
type HTMLAttributes = {
    img: {
        alt: string;
    };
    input: {
        type?: 'text' | 'number';
        name?: string;
    };
    textarea: {
        name?: string;
        cols?: number;
    };
};
type HTMLNode<TagName> = {
    tagname: TagName;
    class?: string;
    id?: string;
    attributes?: TagName extends keyof HTMLAttributes ? HTMLAttributes[TagName] : never;
};
type ValueOf<T> = T[keyof T];
type HTMLShapes = {
    [key in keyof HTMLAttributes]: HTMLNode<key>;
};
type HTMLShape = ValueOf<HTMLShapes>;
declare const img: HTMLShape;
declare const input: HTMLShape;
