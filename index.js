 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('sw.js').then(function(reg) {
 
     if(reg.installing) {
       console.log('Service worker installing');
     } else if(reg.waiting) {
       console.log('Service worker installed');
     } else if(reg.active) {
       console.log('Service worker active');
     }
   }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }
  
 

import Carte from "./Carte.js";
let cartes = Array();

remplireCarte();

// la fonction existe seulement pour creer un tableau de carte general pour tester l'exemple du site
// ici on pourrait avoir une base de donnee en JSON ou XML pour generer l'affichage du site.
function remplireCarte() {
   let pos;
   for (let i = 0; i < 8; i++) {
      let carte = new Carte();
      pos = (i+1);
      carte.id = pos;
      carte.title = '<h5 class="card-title">Photo numero ' + (pos) + '</h5>';
      carte.image = '<img src="img/img-' + (pos) + '.jpg" class="card-img-top" alt="Une image">';
      carte.bouton = '<a href="img/img-' + (pos) + '" class="btn btn-primary">Bouton numero ' + (pos) + '</a>';
      carte.desc = '<p class="card-text">Une photos pour decrire l\'image numero ' + (pos) + '</p>';
      cartes.push(carte);
   }
   createTag();
}

// avec cette fonction j'injecte les cartes une a une dans ma division du fichier index.html "carte" prevu pour les recevoir.
// c'est simple et sa pourrait etre retravailler mais sa fonctionne :). 
function createTag() {
   const affich = document.getElementById('carte');
   const sDiv = '<div class="col-md-4 my-2"><div class="card"><div class="card-body">';
   const eDiv = '</div></div></div>';
   let res = '';

   for (let i = 0; i < cartes.length; i++) {
      res += sDiv + cartes[i].image + cartes[i].title + cartes[i].desc + cartes[i].bouton + eDiv
      affich.innerHTML = res;
   }
}