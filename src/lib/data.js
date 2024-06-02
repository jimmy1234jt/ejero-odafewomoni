// cards/cards.js
const cards = [
    {
        id: 1,
        link: "https://primeries.com/",
        title: "Primeries store",
        desc: "E-commerce store built and managed with shopify",
        tool: "Shopify",
        img: "/Primeries.png",
    },
    {
        id: 2,
        link: "https://beautiful-tulumba-62a41e.netlify.app/",
        title: "Mixy Treats Website",
        desc: "A fully responsive Bakery website ",
        tool: "React & CSS",
        img: "/mixy.png",

    },
    {
        id: 3,
        link: "https://moonlit-croissant-3ffa53.netlify.app/",
        title: "Shopify Admin Page Clone",
        desc: "A replica of the shopify admin page",
        tool: "HTML, CSS, Javascript",
        img: "/shopifyclone.png",

    },
    {
        id: 4,
        link: "link4",
        title: "Simple Login/Sign Up Page",
        desc: "Simple login/sign up page with error message",
        tool: "React & CSS",
        img: "/login-page.png",


    },
    {
        id: 5,
        link: "https://musical-maamoul-de1d39.netlify.app/",
        title: "Geolocation tracker",
        desc: "A location tracker with a profile",
        tool: "React ,CSS , Tailwind, Nodejs",
        img: "/login-page.png",


    },
];

export const getCards = async () => {
    return cards;
}

// export const getCard = async (id) => {
//     const card = cards.find((card) => card.id === parseInt(id))
//     return card
// }