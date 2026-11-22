const infos = document.querySelector("#infos");
const params = new URLSearchParams(window.location.search);
const fname = params.get("fname");
const lname = params.get("lname");
const postition = params.get("position");
const email = params.get("email");
const phone = params.get("phone");
const bname = params.get("business");
const level = params.get("level");
const description = params.get("bDescription");
const timestamp = params.get("timestamp");


let firstname = document.createElement("p");
let lastname = document.createElement("p");
let orgtitle = document.createElement("p");
let emailinfo = document.createElement("p");
let phoneinfo = document.createElement("p");
let businame = document.createElement("p");
let tier = document.createElement("p");
let bdesc = document.createElement("p");
let timestmp = document.createElement("p");

firstname.textContent = `First Name: ${fname}`;
lastname.textContent = `Last Name: ${lname}`;
orgtitle.textContent = `Postion: ${postition}`;
emailinfo.textContent = `Email: ${email}`;
phoneinfo.textContent = `Phone: ${phone}`;
businame.textContent = `Business Name: ${bname}`;
tier.textContent = `Membership Tier: ${level}`;
bdesc.textContent = `Business Description: ${description}`;
timestmp.textContent = `Submitted: ${timestamp}`;

infos.appendChild(firstname);
infos.appendChild(lastname);
infos.appendChild(orgtitle);
infos.appendChild(emailinfo);
infos.appendChild(phoneinfo);
infos.appendChild(businame);
infos.appendChild(tier);
infos.appendChild(bdesc);
infos.appendChild(timestmp);
