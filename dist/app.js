"use strict";
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
var STEPS;
(function (STEPS) {
    STEPS[STEPS["Intro"] = 0] = "Intro";
    STEPS[STEPS["Selection"] = 1] = "Selection";
    STEPS[STEPS["Panier"] = 2] = "Panier";
    STEPS[STEPS["Paiement"] = 3] = "Paiement";
})(STEPS || (STEPS = {}));
const steps = STEPS.Selection;
console.log(STEPS[steps]);
