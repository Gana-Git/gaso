function afficherMessage() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;

    // Vérifier que les champs prénom et nom ne sont pas vides
    if (prenom && nom) {
        // Afficher le message de félicitations et débloquer le CV
        document.getElementById("message").innerHTML = 
            "Félicitations " + prenom + " " + nom + ", vous venez de débloquer l'accès à mon CV. 🚀";

        // Afficher le lien pour télécharger le CV
        document.getElementById("cv").style.display = "block";
    } else {
        // Si les champs sont vides, afficher un message d'erreur
        document.getElementById("message").innerHTML = 
            "Merci de remplir ton prénom et ton nom pour continuer ! 😅";

        // Cacher le CV
        document.getElementById("cv").style.display = "none";
    }
}
