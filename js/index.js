// HOMEPAGE //

// Constantes //

const fondPhotoOurson = document.getElementById('fond-photo-ourson');
const picTeddy = document.createElement('img');
fondPhotoOurson.appendChild(picTeddy);
const catalogue = document.getElementById('catalogue');
const sectionTeddy = document.querySelector('section');

// Fonctions //

function insertDivGenérale(){
    const divGén = document.creeateElement("div");
    sectionTeddy.appendChild(divGén);
    divGén.className = "";
}

function insertImageUrl(section, imageTeddies){ 
    const newFigure = document.createElement("figure");
    section.appendChild(newFigure);
    const newImg = document.createElement("img");
    newFigure.appendChild(newImg);
    newImg.setAttribute("src", imageTeddies);
    newImg.setAttribute("src", "teddy picture - photo ourson")
}

function insertName(div, nameTeddies){
    const newH3 = document.createElement("h3");
    div.appendChild(newH3);
    newH3.innerHTML = nameTeddies; 
}

function insertId(div, idTeddies){
    const newDiv2 = document.createElement("h3");
    div.appendChild(newDiv2);
    newDiv2.className = "";
    const newP1 = document.createElement("p");
    newDiv2.appendChild(newP1);
    const newSpan = document.createElement("span");
    newP1.appendChild(newSpan);
    newSpan.innerHTML = "Numero d'id : ";
    const newP2 = document.createElement("p");
    newDiv2.appendChild(newP2);
    newP2.className = "";
    newP2.innerHTML = idTeddies;
}


function insertColor(div){
    const newP3 = document.createElement("p");
    div.appendChild(newP3);
    const newSpan2 = document.createElement("span");
    newP3.appendChild(newSpan2);
    newSpan2.innerHTML = "Couleur : Modifiable";
}


    

