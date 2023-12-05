const compteur = document.querySelector("#compteur");
let i = 0;

const increment = (e: Event) => {
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

class Geometry {
    static #origin: {x: number, y: number}

    static {
        Geometry.#origin = {x: 0, y:0}
    }
}
