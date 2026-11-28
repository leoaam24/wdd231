import { intersetareas } from "../data/interestareas.mjs";


buildAreaCards(intersetareas);

function buildAreaCards(data) {

    data.forEach((chunk) => {

        let card = document.createElement("div");
        let areaTitle = document.createElement("h2");
        let address = document.createElement("address");
        let img = document.createElement("img");
        let descp = document.createElement("p");
        let btn = document.createElement("button");
        let fig = document.createElement("figure");

        card.setAttribute('class', 'interestCard');
        areaTitle.setAttribute('class', 'interestTitle');
        address.setAttribute('class', 'interestAddress');
        img.setAttribute('class', 'interestImg');
        img.setAttribute('alt', `photo of ${chunk.name}`);
        descp.setAttribute('class', 'interestDescription');
        btn.setAttribute('class', 'interestBtn');

        areaTitle.textContent = chunk.name;
        address.textContent = chunk.address;
        img.setAttribute('src', chunk.imageUrl);
        descp.textContent = chunk.description;
        btn.textContent = 'Learn More';

        fig.appendChild(img);
        card.appendChild(areaTitle);
        card.appendChild(address);
        card.appendChild(fig);
        card.appendChild(descp);
        card.appendChild(btn);

        areasContainer.appendChild(card);


    })

}