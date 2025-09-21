<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" id="style">
    <link rel="stylesheet" href="navbar.css">
    <meta description="Site internet de la coach Pfeiffer Emmmmanuelle basé en région Bordelaise">
    <title>Site D'Emmanuelle Pfeiffer, coach sportif et en nutrition basé en région Bordelaise</title>
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
                <li><a href="" class="accueil">ACCUEIL</a></li>
                <li><a href="">PROGRAMMES</a></li>
                <li><a href="">NUTRITION</a></li>
                <li><a href="">RESULTATS</a></li>
                <li><a href="">CHALLENGES</a></li>
                <li><a href="contact.php">CONTACT</a></li>
            </ul>
        </div></div>
    </nav>

    <div class="container">
        <img src="images/programme.jpg" alt="" class="coaching" id="plansportif">
        <div class="menuText">
        <h1  id="coachingTitre">PROGRAMME/COACHING SPORTIF</h1><br><br>
        <p id="coachingText">C'est ici que tout commence, n'ayez pas peur d'être la meilleure version de vous même!!!</p><br><br>
        <button id="decouvrir">DECOUVIR</button>
    </div>
        <div id="precedent" onclick="ChangeSlide(-1)">&lt;</div>
        <div id="suivant" onclick="ChangeSlide(1)">&gt;</div>
        <div class="button">
        <button class="slider-button" id="button1" onclick="updateContent('programme')"></button>
        <button class="slider-button" id="button2" onclick="updateContent('nutrition')"></button>
        <button class="slider-button" id="button3" onclick="updateContent('challenge')"></button>
    </div>

    </div>

        <article class="article">
            <div class="info">
                <img src="images/manue.jpg" class="manue" alt="Présentation de la coach Emmanuelle PFEIFFER">
                <h2>PFEIFFER Emmanuelle</h2>
                <p>Envie de reprendre votre santé en main ? Je suis là pour vous. Mes connaissances (Diplômée d'ÉTAT) ainsi que la puissance de mon expérience personnelle vont vous aider à atteindre vos objectifs.
                    N'attendez pas demain pour être en bonne santé. Sur Mérignac et en Gironde, je vais vous accompagner et vous montrer que vous en êtes capable !
                    La bonne ambiance est mon crédo, vos résultats mon cadeau.
                </p>
            </div>
                <div class="info2">            
                <h2> TRANSFORMATION</h2>
                <p>Perdre des kilos, gagner de la masse musculaire, se tonifier, se remettre en forme... Quel que soit l'objectif que vous vous fixez, j'y répondrai.
                </p>
            </div>
            <div class="info3">    
                <h2>Coaching personnalisé</h2>
                <p>Diététique, coaching, suivi en ligne, challenge de groupe... Tout est optimisé afin d'atteindre vos objectifs tout en respectant votre rythme de vie. Ici, vous serez accompagné et soutenu.
                </p>
    </div>
</article><br>
<div class="résultats">
    <h3>AVANT/APRES</h3>
    <div class="carte">
        <img src="images/Avant Après Gain Musculaire.png" alt="" >
        <img src="images/Avant Après Perte de Poids.png" alt="" >
        <img src="images/Avant Après Remise en Forme Homme.png" alt="" >
        <img src="images/Avant Après Remise en Forme.png" alt="" >
        <img src="images/Avant Après Amélioration Flexibilité et Posture.png" alt="" >
        <img src="images/Avant Après Remise en Forme Post-Grossesse.png" alt="" >
        <img src="images/Avant Après Remise en Forme Senior.png" alt="" >
    </div>
    <button id="prev">&lt;</button>
    <button id="next">&gt;</button>
</div>
       
<article class="blog">
     <div class="blogArticle">
        <h4>ARTICLE</h4>

    <div class="card">
        <div class="card-item"><img src="images/Article sur la Marche.png" alt="" ><p>Les bienfaits de la marche.</p></div>
        <div class="card-item"><img src="images/Article sur le Renforcement Musculaire.png" alt="" ><p> L'importance du muscle sur la gestion du poids</p></div>
        <div class="card-item"><img src="images/Article sur le Sommeil.png" alt="" ><p>Le sommeil, un allier de poids</p> </div>
        <div class="card-item"><img src="images/Article sur les Compléments Alimentaires.png" alt="" ><p> Quel compléments prendre suivant votre pratique</p></div>
        <div class="card-item"><img src="images/Article sur les Protéines.png" alt="" ><p> La protéine, nutriment trop peu utilisé</p></div>

    </div>
    
    <button id="plus">+ D'ARTICLES</button>
     </div>
</article><br>

<div class="contenaire">
    <h1>Laissez un commentaire</h1>

    <form action="traitement.php" method="post" class="form">
        <label for="pseudo" class="pseudo">Pseudo</label>
        <input type="text" placeholder="Pseudo" id="pseudo" name="pseudo">

        <label for="commentaire" class="com">Commentaire</label>
        <textarea name="commentaire" id="commentaire"></textarea>

        <button type="submit" class="submit">Envoyer</button>
    </form>

    <h2>Derniers commentaires</h2>

    <div class="list">
        <?php
        $fichier= "commentaires.txt";
        if(file_exists($fichier) && filesize($fichier) > 0) {
            $lignes = file($fichier, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

            $lignes_inverse = array_reverse($lignes);

            foreach ($lignes_inverse as $lignes){
                $parties = explode("|", $lignes);
                if (count($parties) == 3) {
                    $date = $parties[0];
                    $pseudo = $parties[1];
                    $message = $parties[2];

                    echo "<div class='commentaire'>";
                    echo "<p>$message</p>";
                    echo "<div class='commentaire-meta'> Posté par $pseudo le $date</div>";
                    echo "</div>"; 
                }
            }
        } else {
            echo "<p>Aucun commentaire pour le moment.</p>";
        }
        ?>
    </div>
</div>
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

<script src="script.js"></script>
</body>
</html>


