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


    

