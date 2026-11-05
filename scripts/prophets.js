const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getprophetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error(error);
    }
}

getprophetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let birthdate = document.createElement("p");
        let placebirth = document.createElement("p");
        let image = document.createElement("img");
        card.setAttribute('id', 'card');
        card.setAttribute('class', 'card');
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        h2.setAttribute('id', 'cardName');
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthdate.setAttribute('id', 'cardDate');
        placebirth.textContent = `Place of Birth: ${prophet.birthplace}`
        placebirth.setAttribute('id', 'cardPlace');
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `image of ${prophet.name} ${prophet.lastname}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');


        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(placebirth);
        card.appendChild(image);


        cards.appendChild(card);
    })
}