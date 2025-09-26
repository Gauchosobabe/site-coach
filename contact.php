<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style2.css" id="style">
    <link rel="stylesheet" href="navbar.css">
</head>
<body>
    <nav class="navbar">
    
        <div class="logo">
            <img src="images/logo-transparent-svg.svg" alt="">
        </div>
        <button onclick="toggler()" class="hamb" id="toggler">
        <img src="../projetmanue/images/Icône Menu Mobile.png" alt="">
        </button>
        <div class="lien">
        <div class="compte">
            <ul>
            <li><a href="connexion.php"><img src="images/connexion.png" class="connexion" alt="">SE CONNECTER/ S'INSCRIRE</li></a>
            <li><a href="https://www.facebook.com/emmanuelle64.pfeiffer"><img src="images/facebook.png" alt="" class="facebook"></a>
            <a href="https://www.instagram.com/manouschka_/"><img src="images/sociale.png" alt="" class="insta"></a>
            <label class="theme-switch">
            <input type="checkbox" id="theme-toggle">
            <span class="slider round">
            <span class="icon moon">🌙</span> 
            <span class="icon sun">☀️</span> 
            </span>
            </label>
            </li>                     
        </ul>        
        </div>        
        <div class="menu">
            <ul>
                <li><a href="index.php" class="accueil">ACCUEIL</a></li>
                <li><a href="">PROGRAMMES</a></li>
                <li><a href="">NUTRITION</a></li>
                <li><a href="">RESULTATS</a></li>
                <li><a href="">CHALLENGES</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div></div>
    </nav>


    <div class="formulaire">
        <h1>Contactez-moi !!!</h1>
<form class="form" method="POST">
    <div class="gauche">

        <div class="Nom"><label for="Nom"></label>
        <input type="text" name="nom" required placeholder="Votre nom"></div>
        <div class="Email"><label class="Email"></label>
        <input type="email" name="email" required required placeholder="Votre email"></div>
        <div  class="Sujet"><label></label>
        <select class="sujet" type="sujet" name="sujet" required required placeholder="L'objet de votre demande">
            <option value="FORME" id="FORME">REMISE EN FORME</option>
            <option value="POIDS" id="POIDS">PERTE DE POIDS</option>
            <option value="NUTRITION" id="NUTRITION">NUTRITION</option>
            <option value="MASSE" id="MASSE">PRISE DE MASSE</option>
           </select></div>
        
     </div>
     <div class="droite">
        <label class="Message"></label>
        <textarea class="message" name="message" required required placeholder="Votre message"></textarea>
        
    </div>

    <input class="submit" type="submit" value="Envoyer le mail">
    
</form></div>
<?php

if (isset($_POST["message"])and filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: manuesitecoach@gmmail.com/' . "\r\n";
        $entete .= 'Reply-to: ' . $_POST['email']; 

        $message = '<h1>Message envoyé depuis la page Contact du site de mon site de coaching</h1>
        <p><b>Email : </b>' . $_POST['email'] . '<br>
        <b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

        $sujet .= $_POST['sujet'];


        $retour= mail("gauchosobabe@gmail.com", $sujet, $message, $entete);
        if($retour){
            echo "<p> Votre demande a bien été envoyée </p>";
        }
}



?>
<div class="footer">
    <div class="logo2">
        <img src="images/logo-transparent-svg.svg" alt="">
    </div>
    <div class="menu2">
        <ul>
            COACHING
            <li><a href="">PROGRAMMES</a></li>
            <li><a href="">NUTRITION</a></li>
            <li><a href="">RESULTATS</a></li>
            <li><a href="">CHALLENGES</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
    </div>
   <div class="propos"> A PROPOS
    <div class="reseau">
        <a href="https://www.facebook.com/emmanuelle64.pfeiffer"><img src="images/facebook.png" alt="" class="facebook"></a>
        <a href="https://www.instagram.com/manouschka_/"><img src="images/sociale.png" alt="" class="insta"></a>
    </div></div>
</div>
<script src="avant.js"></script>
</body>
</html>