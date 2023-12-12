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
const img = {
    tagname: 'img',
    class: '.demo',
    attributes: {
        alt: 'demo'
    }
};
const input = {
    tagname: 'input',
    attributes: {
        name: 'demo',
        type: 'text'
    }
};
