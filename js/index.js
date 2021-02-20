// CONST //

const photoCamera = document.createElement('img');
const fondPhotoCamera = document.getElementById('fond-photo-camera');
fondPhotoCamera.appendChild(picture.camera);
const catalogue = document.getElementById('catalogue');


//FUNCTION //

function promiseGet() {
   return new Promise((resolve, reject) => {
        let recupHttp = new XMLHttpRequest();
        recupHttp.open('GET', 'http://localhost:3000/api/cameras');
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
})};

function insertionUrlImage(section, imgCameras){
    const newFigure = document.createElement('figure');
    section.appendChild(newFigure);
    const newImg = document.createElement('img');
    newFigure.appendChild(newImg);
    newImg.setAttribute('src',imgCameras);
    newImg.setAttribute('alt',"image caméra");
}

function insertionNom(div, nameCamera){
    const newH3 = document.createElement('h3');
    div.appendChild(newH3);
    newH3.innerHTML = nameCamera;
}

function insertionId(div, idCamera){
    const newDiv2 = document.createElement('div');
    div.appendChild(newDiv2);
    newDiv2.className = 'id_camera';
    const newP1 = document.createElement('p');
    newDiv2.appendChild(newP1);
    const newSpan = document.createElement('span');
    newP1.appendChild(newSpan);
    newSpan.innerHTML = "Numéro d'Id : ";
    const newP2 = document.createElement('p');
    newDiv2.appendChild(newP2);
    newP2.id = 'id_Cam';
    newP2.innerHTML = idTeddies;
}

function insertionCouleur(div){
    const newP3 = document.createElement('p');
    div.appendChild(newP3);
    const newSpan2 = document.createElement('span');
    newP3.appendChild(newSpan2);
    newSpan2.innerHTML = "Lentille : Personnalisable";
}
function insertionDescription(div, descriptionCamera){
    const newP4 = document.createElement('p');
    div.appendChild(newP4);
    newP4.innerHTML = descriptionCamera;
}

function insertionPrix(div3, priceCamera){
    const newDiv4 = document.createElement('div');
    div3.appendChild(newDiv4);
    newDiv4.className = 'prix_Camera';
    const newP5 = document.createElement('p');
    newDiv4.appendChild(newP5);
    newP5.innerHTML = priceCamera;
}

function insertionLienPerso(div3, idLienCamera){
    const newDiv5 = document.createElement('div');
    div3.appendChild(newDiv5);
    newDiv5.className = 'ajout_panier';
    const newP6 = document.createElement('p');
    newDiv5.appendChild(newP6);
    const newA = document.createElement('a');
    newP6.appendChild(newA);
    newA.className = 'lien_page_product';
    newA.setAttribute('href', './product.html?id=' + idLienTeddies);
    newA.innerHTML = 'Personnaliser votre caméra vintage !';
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


//APPEL DE LA FONCTION

promiseGet()
    .then(function(response) {

        picTeddy.setAttribute('src', 'http://localhost:3000/images/vcam_5.jpg');
        for(let i = 0; i < response.length; i++) {
            const newSection = document.createElement('section');
            catalogue.appendChild(newSection);
            newSection.className = 'CameraPart';
            insertImageUrl(newSection, response[i].imageUrl);
            const newDiv1 = document.createElement('div');
            newSection.appendChild(newDiv1);
            newDiv1.className = 'description_camera';
            insertionNom(newDiv1, response[i].name);
            insertionId(newDiv1, response[i]._id);
            insertionCouleur(newDiv1);
            insertionDescription(newDiv1, response[i].description);
            const newDiv3 = document.createElement('div');
            newSection.appendChild(newDiv3);
            newDiv3.className = 'tarifs';
            insertionPrix(newDiv3, [response[i].price].map(i => i / 100)+ ' ' + '€');
            insertionLienPerso(newDiv3, response[i]._id);

        }
    });
