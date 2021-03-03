// HOMEPAGE //

// Constantes //

const fondPhotoOurson = document.getElementById('fond-photo-ourson');
const picTeddy = document.createElement('img');
fondPhotoOurson.appendChild(picTeddy);
const catalogue = document.getElementById('catalogue');
const sectionTeddy = document.querySelector('section');

// Fonctions //

function insertDivGenérale(){
    const divGen = document.creeateElement("div");
    sectionTeddy.appendChild(divGen);
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

function insertDescription(div, descriptionTeddies){
    const newP4 = document.createElement("p");
    div.appendChild(newP4);
    newP4.innerHTML = descriptionTeddies;
}

function insertPrice(div3, priceTeddies){
    const newDiv4 = document.createElement("div");
    div3.appendChild(newDiv4);
    newDiv4.className = "";
    const newP5 = document.createElement("p");
    newDiv4.appendChild(newP5);
    newP5.innerHTML = priceTeddies;
}

function insertLienPerso(div3, idLienTeddies){
    const newDiv5 = document.createElement("div");
    div3.appendChild(newDiv5);
    newDiv5.className = "";
    const newP6 = document.createElement("p");
    newDiv5.appendChild(newP6);
    const newA = document.createElement("a");
    newP6.appendChild(newA);
    newA.className = "";
    newA.setAttribute("href", "./product.html?id=" + idLienTeddies);
    newA.innerHTML = "Personnaliser le !";
}

function serverOut() {
    const myH1 = document.getElementById('my_title');
    myH1.style.display = 'none';
    const myH2 = document.getElementById('my_second_title');
    myH2.style.display='none';
    const myFooter = document.getElementById('footer');
    myFooter.style.display ='none';
    const divServerOut = document.createElement('div');
    catalogue.appendChild(divServerOut);
    divServerOut.id = 'div_server_out';
    divServerOut.innerHTML = 'Nous revenons très bientôt';
}



    

