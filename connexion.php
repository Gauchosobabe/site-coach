<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style3.css" id="style">
    <link rel="stylesheet" href="navbar.css"> 
    <title>Document</title>
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
            <li><a href=""><img src="images/connexion.png" class="connexion" alt="">SE CONNECTER/ S'INSCRIRE</li></a>
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


    <div class="connecter">
        <h1>Contactez-moi !!!</h1>
<form class="form" method="POST">


       
        <div class="Email"><label class="Email"></label>
        <input type="email" name="email" required required placeholder="Votre email"></div>
        <div>
         <input type="password">   
        </div>
        
    

        


    <input class="submit" type="submit" value="CONNEXION">
    
</form></div> 
</body>
</html>