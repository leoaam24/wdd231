const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const hmbrgrBtn = document.querySelector("#hmbrgrBtn");
const navigation = document.querySelector("nav");
const mediaQuery = window.matchMedia('(min-width: 768px)');
const date = new Date();
const visited = date.getTime();
const lastVisit = localStorage.getItem('lastVisit');
const visitorStatus = document.querySelector('#visitorStatus');


if (Math.abs(lastVisit - date.getTime()) < 24 * 60 * 60 * 1000) {
    visitorStatus.replaceChildren();
    visitorStatus.style.display = "flex";
    let message = document.createElement('p');
    let button = document.createElement('button');

    button.setAttribute('class', 'messageBtn');
    message.textContent = "Back so soon! Awesome!";
    localStorage.setItem('lastVisit', visited);
    visitorStatus.appendChild(message);
    visitorStatus.appendChild(button);
} else if (Math.abs(lastVisit - date.getTime()) > 24 * 60 * 60 * 1000 && lastVisit) {
    visitorStatus.replaceChildren();
    visitorStatus.style.display = "flex";
    let message = document.createElement('p');
    let button = document.createElement('button');

    button.setAttribute('class', 'messageBtn');
    message.textContent = `You last visted ${Math.floor((Math.abs(lastVisit - visited) / 86_400_000))} day/s.`;
    localStorage.setItem('lastVisit', visited);
    visitorStatus.appendChild(message);
    visitorStatus.appendChild(button);
} else {
    visitorStatus.replaceChildren();
    let message = document.createElement('p')
    let button = document.createElement('button');
    visitorStatus.style.display = "flex";
    message.textContent = "Welcome! Let us know if you have any questions."
    button.setAttribute('class', 'messageBtn');
    localStorage.setItem('lastVisit', visited);
    visitorStatus.appendChild(message);
    visitorStatus.appendChild(button);
}


const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.textContent = document.lastModified;

hmbrgrBtn.addEventListener("click", function () {
    navigation.classList.toggle("open");
    hmbrgrBtn.classList.toggle("open");
})

mediaQuery.addEventListener('change', function () {
    if (!navigation.classList.toggle('open')) {
        navigation.classList.add('open');
    }
})

if (visitorStatus) {
    const messageBtn = document.querySelector(".messageBtn");

    messageBtn.addEventListener('click', () => {
        visitorStatus.style.opacity = 0
        messageBtn.style.cursor = 'auto';
    });
}





