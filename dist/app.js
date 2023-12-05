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
//Les classes en typeScript
function reverse(arr) {
    return [...arr].reverse();
}
class A {
    a;
    constructor(a) {
        this.a = a;
    }
}
const aInstance = new A(3);
console.log(aInstance.a);
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    add(items) {
        this.items.push(items);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
    isEqual(a) {
        return;
    }
}
class Subscriber {
    on = (name, cb) => { };
}
const a = new Collection([1, 2]);
const b = a.first();
