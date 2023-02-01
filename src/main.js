import App from './App.svelte';
//https://www.nike.com/es/hombre

const cards = document.querySelectorAll("#ciclp-app > div > div:nth-child(5) .grid-row .grid-col .slider li.slide");


cards.forEach((card, i) => {
    console.log(card);
    const img = card.querySelector("img").src;
    const title = card.querySelector("div > a > div > div > h4").innerText;
    const price = card
        .querySelector(".price-wrapper > span").innerText;
    const link = card
        .querySelector("div > a").href
    const myProduct = { img, title, price, link };

    const app = new App({
        target: card,
        props: {
            dataProduct: myProduct
        }
    });

});




export default app;