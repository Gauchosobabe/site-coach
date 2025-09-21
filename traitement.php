<?php
// On vérifie que le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer et sécuriser les données
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $message = htmlspecialchars($_POST['commentaire']);
    
    // On s'assure que les champs ne sont pas vides
    if (!empty($pseudo) && !empty($message)) {
        // Chemin vers le fichier qui stocke les commentaires
        $fichier = 'commentaires.txt';
        
        // Formater les données pour l'écriture
        $commentaire = date("d-m-Y H:i:s") . " | " . $pseudo . " | " . $message . "\n";
        
        // Ajouter le commentaire au fichier
        file_put_contents($fichier, $commentaire, FILE_APPEND | LOCK_EX);
        
        // Rediriger l'utilisateur vers la page principale
        header("Location: index.php");
        exit();
    }
}
?>