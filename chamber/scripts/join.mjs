const membershipTier = document.querySelectorAll(".sbs");
const membershipModal = document.querySelector('#membershipModal');
const timestamp = document.querySelector('#timestamp');
const date = new Date;

let tierData;



function displayTierInfo(tierData) {
    membershipModal.showModal();
    let tierName = document.createElement('h2');
    let cost = document.createElement('p');
    let benefits = document.createElement('p');
    let closeBtn = document.createElement('button');
    let orderedList = document.createElement('ol');

    tierName.textContent = tierData.tier;
    cost.textContent = `Cost: ${tierData.cost}`;
    (tierData.benefits).forEach(function (chunk) {
        let list = document.createElement('li');
        list.textContent = chunk;
        orderedList.appendChild(list);
    })

    closeBtn.setAttribute('id', 'modalCloseBtn');

    benefits.textContent = "Benifits:"
    closeBtn.textContent = "Close"

    closeBtn.addEventListener('click', () => {
        membershipModal.close();
        membershipModal.replaceChildren();
    });

    membershipModal.appendChild(tierName);
    membershipModal.appendChild(cost);
    membershipModal.appendChild(benefits);
    membershipModal.appendChild(orderedList);
    membershipModal.appendChild(closeBtn);


}

async function getTierData() {
    const response = await fetch("../data/tiers.json");
    tierData = await response.json();
    if (!response.ok) {
        throw new Error('Trouble in fetching data');
    }
}



membershipTier.forEach((chunk) => {
    const radio = chunk.querySelector('input[type="radio');
    radio.addEventListener('change', () => {
        switch (chunk.dataset.tier) {
            case "np":
                displayTierInfo(tierData[0]);
                break;
            case "bronze":
                displayTierInfo(tierData[1]);
                break;
            case "silver":
                displayTierInfo(tierData[2]);
                break;
            case "gold":
                displayTierInfo(tierData[3]);
                break;
            default:
                console.log('Selected Tier is Not Recognized');
        }
    })
}
)

timestamp.value = date.toString();


getTierData();


