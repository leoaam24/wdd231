const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const hmbrgrBtn = document.querySelector("#hmbrgrBtn");
const navigation = document.querySelector("nav")

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.textContent = document.lastModified;

hmbrgrBtn.addEventListener("click", function () {
    navigation.classList.toggle("open");
    hmbrgrBtn.classList.toggle("open");
})

