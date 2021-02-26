////////////////////// PARAMETRE DE REQUETE URL //////////////////////

const str = window.location;
const url = new URL(str);
const idUrl = url.searchParams.get("id");



////////////////////// FUNCTIONS //////////////////////

function promiseGet() {
    return new Promise((resolve, reject) => {
        let recoverHttp = new XMLHttpRequest();
        recoverHttp.open('GET', 'http://localhost:3000/api/cameras/'+ idUrl);
        recoverHttp.send();
        recoverHttp.onreadystatechange = function() {
            if(this.readyState === XMLHttpRequest.DONE) {
                if(this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                }else {
                    reject(XMLHttpRequest);
                }
            }
        }
    })
    

}

function insertionPhoto(section, camera) {
    const nouvelleFigure = document.createElement('figure');
    section.appendChild(nouvelleFigure);
    const nouvellePhoto = document.createElement('img');
    nouvelleFigure.appendChild(nouvellePhoto);
    nouvellePhoto.setAttribute('src', teddy.imageUrl);
}
function insertionNom(description, camera) {
    const nomCamera = document.createElement('h3');
    description.appendChild(nomCamera);
    nomCamera.innerHTML = camera.name;
}
function insertionId(description, camera) {
    const divId = document.createElement('div');
    description.appendChild(divId);
    divId.className = '';
    const paragraphNumId = document.createElement('p');
    divId.appendChild(paragraphNumId);
    const nouveauSpan = document.createElement('span');
    paragraphNumId.appendChild(newSpan);
    nouveauSpan.innerHTML = "Numéro d'Id : ";
    const paragraphId = document.createElement('p');
    divId.appendChild(paragraphId);
    paragraphId.innerHTML = camera._id;
}
function insertionLentille(description, cameraLentille) {
    const divCouleur = document.createElement('div');
    description.appendChild(divCouleur);
    divCouleur.className =""; 
    const labelCouleur = document.createElement('label');
    divColor.appendChild(labelCouleur);
    labelCouleur.innerHTML = 'Sélectionner votre Couleur préférée : ';
    const selectLentille = document.createElement('select');
    labelColor.appendChild(selectLentille);
    selectLentille.id = 'choose_color';
    
    for(let i = 0; i < cameraColors.length; i +=1){
        const secondeOption = document.createElement('option');
        selectLentille.appendChild(secondeOption);
        secondeOption.setAttribute('value', cameraColors[i]);
        secondeOption.setAttribute('required', '');
        secondeOption.innerHTML = cameraColors[i];
    }
}
function insertionDescription(description, camera) {
    const paragrapheDescription = document.createElement('p');
    description.appendChild(paragrapheDescription);
    paragrapheDescription.className = 'divDescript';
    paragrapheDescription.innerHTML = camera.description;
}
function insertionButtonCart(section, camera) {
    const divRate = document.createElement('div');
    section.appendChild(divRate);
    divRate.className = "";
    const divPrix = document.createElement('div');
    divRate.appendChild(divPrix);
    divPrix.className = "";
    const paragraphePrix = document.createElement('p');
    divPrice.appendChild(paragraphePrix);
    paragraphePrix.innerHTML = [camera.price].map(price => price / 100) + ' ' + '€';
    const buttonValide = document.createElement('button')
    divRate.appendChild(buttonValid);
    buttonValide.className ="";
    buttonValide.setAttribute('type', 'submit');
    buttonValide.innerHTML = "Ajouter au Panier";
}


////////////////////// APPEL DES FONCTIONS //////////////////////

promiseGet()
    .then(function(response) {
        const pageProduit = document.getElementById('page_product');
        const sectionPrincipale = document.createElement('section');
        pageProduit.appendChild(sectionPrincipale);
        sectionPrincipale.className = "";
        insertPicture(sectionPrincipale, response);
        const descriptionCamera = document.createElement('div');
        sectionPrincipale.appendChild(descriptionCamera);
        descriptionCamera.className = "";
        insertName(descriptionCamera, response);
        insertId(descriptionCamera, response);
        insertColor(descriptionCamera,response.colors);
        const choisirLentille = document.querySelector('select');
        choisirLentille.addEventListener('change', function(e) { //evenement pour voir la lentille choisi
            console.log(choisirLentille.value);
        })
        insertDescription(descriptionCamera, response);
        insertButtonCart(sectionPrincipale, response);

        
        /////////// EVENEMENTS ///////////
        const addCart = document.querySelector('button');
        addCart.addEventListener('click', function(e) { //evenement 'click' pour l'envoi au local storage
            let cameraChoisit = {
                picture: response.imageUrl,
                firstName: response.name,
                theId: response._id,
                color: chooseColor.value,
                price: response.price,
            }
            const cameraAjoutée = localStorage.getItem('product');
            if(cameraAjoutée) {
                let camerasPanier = JSON.parse(cameraAjoutée);
                camerasPanier.push(cameraChoisit);
                localStorage.setItem('product', JSON.stringify(camerasPanier));
                alert('Ajouté au panier !');
            } else {
                camerasPanier = [];
                camerasPanier.push(cameraChoisit);
                localStorage.setItem('product', JSON.stringify(camerasPanier));
                alert('Ajouté au panier !');
            }
        })
    })
    .catch(function(error) {
        console.log(error);
    })