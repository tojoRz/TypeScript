var compteur = document.querySelector('#compteur');
var i = 0;
var increment = function (e) {
    i++;
    compteur.querySelector('span').innerText = i.toString();
};
compteur.addEventListener('click', increment);
