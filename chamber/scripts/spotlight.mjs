const spotlightSection = document.querySelector("#spotlightSection");

const ranNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

const tiers = ["Gold", "Silver"];

async function generateSpotlight() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    buildSpotlight(data);
};

function buildSpotlight(data) {
    data.forEach(function (chunk) {
        if (chunk.membershiplevel === tiers[ranNum]) {
            let card = document.createElement("div");
            let h4 = document.createElement("h4");
            let hr = document.createElement("hr");
            let img = document.createElement("img");
            let phone = document.createElement("p");
            let address = document.createElement("p");
            let membership = document.createElement("p");


            h4.textContent = chunk.businessname;
            phone.textContent = chunk.phone;
            membership.textContent = chunk.membershiplevel;
            address.textContent = chunk.address;

            card.setAttribute('class', 'card');
            img.setAttribute('src', chunk.logo);
            img.setAttribute('alt', `logo of ${chunk.businessname}`);

            card.appendChild(h4);
            card.appendChild(address)
            card.appendChild(phone);
            card.appendChild(hr);
            card.appendChild(img);
            card.appendChild(membership);



            spotlightSection.appendChild(card);
        }
    })
};

generateSpotlight();