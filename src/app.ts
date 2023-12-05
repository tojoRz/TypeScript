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

//Les classes en typeScript

function reverse<T>(arr: readonly T[]): T[] {
  return [...arr].reverse();
}

class A {
  constructor(public a: number) {}
}

const aInstance = new A(3);
console.log(aInstance.a);

class Collection<T> {
  constructor(private items: T[]) {}

  add(items: T) {
    this.items.push(items);
    return this;
  }

  first(): T | null {
    return this.items[0] || null;
  }

  isEqual(a: this) {
    return;
  }
}

class Subscriber {
  on = (name: string, cb: Function) => {};
}

const a = new Collection([1, 2]);
const b = a.first();
