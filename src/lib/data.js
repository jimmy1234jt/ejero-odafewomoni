// cards/cards.js
const cards = [
    {
        id: 1,
        link: "link1",
        title: "titl1",
        desc: "desc1",
    },
    {
        id: 2,
        link: "link",
        title: "title2",
        desc: "desc2",
    },
    {
        id: 3,
        link: "link3",
        title: "title3",
        desc: "desc3",
    },
    {
        id: 4,
        link: "link4",
        title: "title4",
        desc: "desc4",
    },
];

export const getCards = async () => {
    return cards;
}

// export const getCard = async (id) => {
//     const card = cards.find((card) => card.id === parseInt(id))
//     return card
// }