// HOMEPAGE //

// Constantes //


const catalogue = document.getElementById('catalogue');
const sectionTeddy = document.querySelector('section');
const url = "http://localhost:3000/api/teddies";


// Fonctions //

function promiseGet() {
    return new Promise((resolve, reject) => {
        let recupHttp = new XMLHttpRequest();
        recupHttp.open("GET", url);
        recupHttp.send();
        recupHttp.onreadystatechange = function() {
            if(this.readyState === XMLHttpRequest.DONE) {
                if(this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                }else{
                    reject(recupHttp);
                }
            }
        }
    })
}




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
    newImg.setAttribute("src", "teddy picture - photo ourson");
    newImg.className = "w-50 d-block me-5";
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
    const myH1 = document.getElementById("my_title");
    myH1.style.display = "none";
    const myH2 = document.getElementById("my_second_title");
    myH2.style.display="none";
    const myFooter = document.getElementById("footer");
    myFooter.style.display ="none";
    const divServerOut = document.createElement("div");
    catalogue.appendChild(divServerOut);
    divServerOut.id = "div_server_out";
    divServerOut.innerHTML = "Nous revenons très bientôt";
}


// Appel fonctions //

promiseGet()
    .then(function(response) {

        for(let i = 0; i < response.length; i++) {
            const newSection = document.createElement("section");
            catalogue.appendChild(newSection);
            newSection.className = "";
            insertImageUrl(newSection, response[i].imageUrl);
            const newDiv1 = document.createElement("div");
            newSection.appendChild(newDiv1);
            newDiv1.className = "text-secondary";
            insertName(newDiv1, response[i].name);
            insertId(newDiv1, response[i]._id);
            insertColor(newDiv1);
            insertDescription(newDiv1, response[i].description);
            const newDiv3 = document.createElement("div");
            newSection.appendChild(newDiv3);
            newDiv3.className = "text-secondary";
            newDiv5.className = "badge bg-secondary text-wrap";
            insertPrice(newDiv3, [response[i].price].map(i => i / 100)+ ' ' + '€');
            insertLienPerso(newDiv3, response[i]._id);
            
        }
    })
    .catch(function(error) {
        serverOut();
    })


    

