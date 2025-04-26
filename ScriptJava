function afficherMessage() {
    // Récupérer les valeurs des champs
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;

    // Effacer le message par défaut
    document.getElementById("message").innerHTML = "";

    // Vérifier si les champs sont remplis
    if (prenom && nom) {
        // Afficher le message personnalisé
        document.getElementById("message").innerHTML = "Bonjour " + prenom + " " + nom + ", bienvenue sur mon site web 😊";
    } else {
        // Si un des champs est vide, afficher un message d'erreur
        document.getElementById("message").innerHTML = "Veuillez entrer votre prénom et votre nom.";
    }
}
