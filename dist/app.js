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
class FeatureFlags {
    env = 'hello';
    darkMode() { return true; }
    privateMode() { return true; }
    nfswMode() { return true; }
}
export {};
