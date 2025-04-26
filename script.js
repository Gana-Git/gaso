function afficherMessage() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;

    // Effacer le message précédent
    document.getElementById("message").innerHTML = "";

    // Vérification des champs
    if (prenom && nom) {
        // Message personnalisé avec la blague
        document.getElementById("message").innerHTML = "Félicitations " + prenom + " " + nom + "! Tu as trouvé le bouton d'envoi, maintenant tu mérites une blague : Pourquoi le serveur a-t-il traversé la route ? Parce qu'il voulait éviter un 404. 😄";
    } else {
        document.getElementById("message").innerHTML = "Oups! Tu as oublié ton prénom ou ton nom. 😅";
    }
}
