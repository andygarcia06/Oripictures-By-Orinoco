// CONST //

const photoCamera = document.createElement('img');
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
    newImg.className = "w-25 d-block m-auto"
}

function insertionNom(div, nameCamera){
    const newH3 = document.createElement('h3');
    div.appendChild(newH3);
    newH3.className = "text-secondary";
    newH3.innerHTML = nameCamera;
}

function insertionId(div, idCamera){
    const newDiv2 = document.createElement('div');
    div.appendChild(newDiv2);
    const newP1 = document.createElement('p');
    newDiv2.appendChild(newP1);
    const newSpan = document.createElement('span');
    newP1.appendChild(newSpan);
    newSpan.innerHTML = "Numéro d'Id : ";
    newSpan.className = "text-secondary";
    const newP2 = document.createElement('p');
    newDiv2.appendChild(newP2);
    newP2.innerHTML = idCamera;
}

function insertionLentille(div){
    const newP3 = document.createElement('p');
    div.appendChild(newP3);
    const newSpan2 = document.createElement('span');
    newP3.appendChild(newSpan2);
    newSpan2.innerHTML = "Lentille : Personnalisable";
    newSpan2.className = "text-secondary";
}
function insertionDescription(div, descriptionCamera){
    const newP4 = document.createElement('p');
    div.appendChild(newP4);
    newP4.innerHTML = descriptionCamera;
    newP4.className = "text-secondary";
}

function insertionPrix(div3, priceCamera){
    const newDiv4 = document.createElement('div');
    div3.appendChild(newDiv4);
    const newP5 = document.createElement('p');
    newDiv4.appendChild(newP5);
    newP5.innerHTML = priceCamera;
    nexP5.className = "text-secondary";
}

function insertionLienPerso(div3, idLienCamera){
    const newDiv5 = document.createElement('div');
    div3.appendChild(newDiv5);
    newDiv5.className = "";
    const newP6 = document.createElement('p');
    newDiv5.appendChild(newP6);
    const newA = document.createElement('a');
    newP6.appendChild(newA);
    newA.setAttribute('href', 'produit.html?id=' + idLienCamera);
    newA.innerHTML = 'Personnaliser votre caméra vintage !';
    newA.className = "btn btn-secondary text-primary"
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
    divServerOut.innerHTML = 'Nous revenons très bientôt';
}


//APPEL DE LA FONCTION

promiseGet()
    .then(function(response) {

        photoCamera.setAttribute('src', 'http://localhost:3000/images/vcam_5.jpg');
        for(let i = 0; i < response.length; i++) {
            const newSection = document.createElement('section');
            catalogue.appendChild(newSection);
            newSection.className = "";
            insertionUrlImage(newSection, response[i].imageUrl);
            const newDiv1 = document.createElement('div');
            newSection.appendChild(newDiv1);
            newDiv1.className = "";
            insertionNom(newDiv1, response[i].name);
            insertionId(newDiv1, response[i]._id);
            insertionLentille(newDiv1);
            insertionDescription(newDiv1, response[i].description);
            const newDiv3 = document.createElement('div');
            newSection.appendChild(newDiv3);
            newDiv3.className = "";
            insertionPrix(newDiv3, [response[i].price].map(i => i / 100)+ ' ' + '€');
            insertionLienPerso(newDiv3, response[i]._id);

        }
    });
