//Charger le DOM
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM chargé");
  });

//Définir les variables
let myForm = document.getElementById("myForm"); 
let firstName = document.getElementById("firstName"); 
let lastName = document.getElementById("lastName"); 
let comment = document.getElementById("comment"); 
let commentList = document.getElementById("commentList"); 
let errorMessage = document.getElementById("errorMessage"); 
console.log(firstName);
console.log(lastName);
console.log(comment);
console.log(commentList);
console.log(errorMessage);
console.log(myForm);

// Empêcher le rechargement de la page au clic du bouton
let button = document.querySelector("button");
button.addEventListener("click", event => {
        event.preventDefault();
        console.log("la page ne se recharge pas");
    });

//Au clic du bouton, envoyer les valeurs des noms et prénoms dans le "h3" de la liste des commentaires (commentList)
button.addEventListener("click", e => {
    let identity = document.getElementsByTagName("h3")[4];
    identity.innerHTML = firstName.value + " " + lastName.value;
});

//Au clic du bouton, envoyer la valeur du commentaire dans le "p" de la liste des commentaires et effacer les champs
let myComment = document.getElementById("myComment"); //myComment correspond au nouveau commentaire dans la liste des commentaires
button.addEventListener("click", ev => {
 myComment.innerHTML = comment.value + " ";
 myForm.reset();
});

//Vérifier les champs avant l'envoi du formulaire
function validatingFields (myFirstName, myLastName, myComment){
    if (firstName.value === ""){
        console.log("entrez votre prénom");
    } 
    if (lastName.value === ""){
        console.log("entrez votre nom");
    } 
    if (comment.value === ""){
        console.log("entrez votre commentaire");
    } 
};
