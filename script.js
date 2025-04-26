function afficherMessage() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;

    if (prenom && nom) {
        document.getElementById("message").innerHTML = 
            "Félicitations " + prenom + " " + nom + ", vous venez de débloquer l'accès à mon CV. 🚀";
        
        // Afficher le CV
        document.getElementById("cv").style.display = "block";
    } else {
        document.getElementById("message").innerHTML = 
            "Merci de remplir ton prénom et ton nom pour continuer ! 😅";

        // Cacher le CV si jamais
        document.getElementById("cv").style.display = "none";
    }
}
