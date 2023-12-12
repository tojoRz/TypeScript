const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
compteur?.addEventListener("click", increment);
/**
 * !Les classes en typeScript
 * ? Exemple
*/
// function reverse<T>(arr: readonly T[]): T[] {
//     return [...arr].reverse();
//   }
//   class A {
//     constructor(public a: number) {}
//   }
//   const aInstance = new A(3);
//   console.log(aInstance.a);
//   class Collection<T> {
//     constructor(private items: T[]) {}
//     add(items: T) {
//       this.items.push(items);
//       return this;
//     }
//     first(): T | null {
//       return this.items[0] || null;
//     }
//     isEqual(a: this) {
//       return a.items === this.items ;
//     }
//   }
//   class SubCollection<T> extends Collection<T> {
//       a =3
//   }
//   class Subscriber {
//     on = (name: string, cb: Function) => {};
//   }
//   const a = new Collection([1, 2]);
//   const b = new Collection([2, 2]);
//   a.isEqual(b);
// class Point {
//     x = 0
//     y = 0
// }
// class Geometry {
//     x = 0
//     y = 0
//     surface = 0
// }
// function getX(p: Point) {
//     return p.x
// }
// getX(new Geometry());
// abstract class Geometry {
//     x = 0
//     y = 0
//     abstract surface(): number
// }
// class Triangle extends Geometry {
//     x = 2
//     y = 2
//     surface(): number {
//         return 3
//     }
// }
// class Geometry {
//     static #origin: {x: number, y: number}
//     static {
//         Geometry.#origin = {x: 0, y:0}
//     }
// }
// class Geometry {
//   static #origin: {x: number, y: number}
//   constructor(x: number, y: number) {
//   }
//   surface() {
//     return 6
//   }
// }
// class Triangle {
//   constructor(x: number, y: number) {
//   }
//   surface() {
//     return 3
//   }
// }
// type InstantiableShape = {
//   new (x: number, y:number): {
//     surface: () => number
//   }
// }
// function shapeGenerator(shapeType: InstantiableShape, x: number, y:number){
//   return new shapeType(x, y).surface()
// }
// shapeGenerator(Geometry, 10, 20)
// shapeGenerator(Triangle, 10, 20)
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
// interface Point {
//   x:number
//   y:number
// }
// class TwoDimensionPoint implements Point {
//   x = 0
//   y = 0
// }
/**
 * !unknown | Tuple | Enun
 * ? Exemple
*/
// type ListItem = [string, number]
// const a: ListItem = ['tomate', 2]
// const b: ListItem = ['banane', 3]
// function merge<T extends unknown[], U extends unknown[]> (a: T, b: U): [...T, ...U] {
//   return [...a, ...b]
// }
// const c = merge(a, b)
// enum STEPS {
//   Intro,
//   Selection,
//   Panier,
//   Paiement,
// }
// const steps: STEPS = STEPS.Selection
// console.log(STEPS[steps])
/**
 * !Les fichiers de declaration
 * ? Exemple
*/
// export class Point {
//   x = 0
//   y = 0
//   move (x: number, y:number) {
//     this.x += x
//     this.y += y
//     return this
//   }
// }
// window.ga('send', {
//   hitType: 'event',
//   eventCategory: 'Category'
// })
// import scrollTo from 'scroll-to'
// scrollTo ( 500 , 1200 , {  
//   ease : ' out-bounce ' , 
//   duration : 1500 
// } ) ;
/**
 * !Types utilitaires
 * ? Exemple
*/
// 1er exemple:
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
//2ème exemple:
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
//2ème exemple:(Maped Types)
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
import Alpine from 'alpinejs';
Alpine.data('myComponent', function (initial = 0) {
    return {
        compteur: initial,
        increment() {
            this.compteur += 1;
        },
        decrement() {
            this.compteur -= 1;
            if (this.compteur < 0) {
                this.$el.style.display = "none";
            }
        }
    };
});
Alpine.start();
