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
function demo(c) {
}
const colors = {
    bleu: [0, 0, 255],
    red: "#ff0000",
    green: [0, 255, 0]
};
colors.green.map(v => v / 2);
demo(colors);
export default {};
