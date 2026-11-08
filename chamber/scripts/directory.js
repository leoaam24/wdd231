const cards = document.querySelector("#cards");
const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");
const cardContainer = document.querySelector(".cards");


async function displayBusinessnes() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    buildDirectory(data);
}


displayBusinessnes();

const buildDirectory = (data) => {

    data.forEach((chunk) => {
        let card = document.createElement('div');
        let cardInfo = document.createElement('div');
        let businessName = document.createElement('h3');
        let businessLogo = document.createElement('img');
        let businessEmail = document.createElement('p');
        let businessPhone = document.createElement('p');
        let businessUrl = document.createElement('p');
        let emailField = document.createElement('span');
        let phoneField = document.createElement('span');
        let urlField = document.createElement('span');


        //Fill-out info from data chunk
        businessName.textContent = chunk.businessname;
        businessEmail.textContent = chunk.email;
        businessPhone.textContent = chunk.phone;
        businessUrl.textContent = chunk.website;

        //creating fields
        emailField.innerHTML = `<strong>EMAIL:</strong>`;
        emailField.appendChild(businessEmail);
        phoneField.innerHTML = `<strong>PHONE:</strong>`;
        phoneField.appendChild(businessPhone);
        urlField.innerHTML = `<strong>URL:</strong>`;
        urlField.appendChild(businessUrl);

        //Fill-out logo
        businessLogo.setAttribute('src', chunk.logo);
        businessLogo.setAttribute('alt', `${chunk.businessname} logo`);
        businessEmail.setAttribute('width', '200');
        businessEmail.setAttribute('height', '200');

        //Adding IDs
        card.setAttribute('class', 'card');
        cardInfo.setAttribute('class', 'cardInfo');

        //Adding Classes
        card.classList.add('grid');
        cardInfo.classList.add('grid');

        //Append Elements
        card.appendChild(businessName);
        card.appendChild(cardInfo);

        cardInfo.appendChild(businessLogo);
        cardInfo.appendChild(emailField);
        cardInfo.appendChild(phoneField);
        cardInfo.appendChild(urlField);

        cards.appendChild(card);

    })
};

gridBtn.addEventListener('click', function () {
    const allCards = document.querySelectorAll(".card");
    const allCardInfo = document.querySelectorAll(".cardInfo");

    allCards.forEach(function (card) {
        if (card.classList.toggle('list')) {
            card.classList.remove('list');
            card.classList.add('grid');
        } else {
            card.classList.add('grid');
        }

    });

    allCardInfo.forEach(function (card) {
        if (card.classList.toggle('list')) {
            card.classList.remove('list');
            card.classList.add('grid');
        } else {
            card.classList.add('grid');
        }

    });

    if (cardContainer.classList.toggle('list')) {
        cardContainer.classList.remove('list');
        cardContainer.classList.add('grid');
    } else {
        cardContainer.classList.add('grid');
    }

})

listBtn.addEventListener('click', function () {
    const allCards = document.querySelectorAll(".card");
    const allCardInfo = document.querySelectorAll(".cardInfo");
    allCards.forEach(function (card) {
        if (card.classList.toggle('grid')) {
            card.classList.remove('grid');
            card.classList.add('list');
        } else {
            card.classList.add('list');
        }
    });

    allCardInfo.forEach(function (card) {
        if (card.classList.toggle('grid')) {
            card.classList.remove('grid');
            card.classList.add('list');
        } else {
            card.classList.add('list');
        }
    });

    if (cardContainer.classList.toggle('grid')) {
        cardContainer.classList.remove('grid');
        cardContainer.classList.add('list');
    } else {
        cardContainer.classList.add('list');
    }


})


