  (() => {
        const themeToggle = document.getElementById('theme-toggle');
        const stylesheetLink = document.getElementById('style');

        if(themeToggle && stylesheetLink) {
            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    stylesheetLink.href = 'darkmode.css';
                } else {
                    stylesheetLink.href = 'style.css';
                }
            });
        }
    })();



 (() => {
        // Your existing banner slider logic
        const titres = ["PROGRAMME/COACHING SPORTIF", "NUTRITION", "CHALLENGE"];
        const textes = ["C'est ici que tout commence, n'ayez pas peur d'être la meilleure version de vous même!!!", "Découvrez nos plans de repas pour atteindre vos objectifs", "Maitrisez-votre alimentation, partagez car ensemble on est plus fort!!!"];
        const slides = ["programme.jpg", "nutrition.jpg", "challenge.WEBP"];
        const liens = ["coaching.html", "nutrition.html", "challenge.html"];
        const dispositions = ["coaching", "nutrition", "challenge"];
        let numero = 0;
        
        // Correct way to select buttons for this carousel
        const precedentBtn = document.getElementById('precedent');
        const suivantBtn = document.getElementById('suivant');

        function ChangeSlide(sens) {
            numero += sens;
            if (numero < 0) {
                numero = slides.length - 1;
            }
            if (numero > slides.length - 1) {
                numero = 0;
            }
            
            const imageElement = document.getElementById("plansportif");
            const titreElement = document.getElementById("coachingTitre");
            const texteElement = document.getElementById("coachingText");
            const boutonDecouvrir = document.getElementById("decouvrir");
            const conteneurTexte = document.querySelector('.menuText');

            imageElement.src = "images/" + slides[numero];
            titreElement.textContent = titres[numero];
            texteElement.textContent = textes[numero];
            
            boutonDecouvrir.onclick = () => {
                window.location.href = liens[numero];
            };
            
            if (dispositions[numero] === 'nutrition') {
                conteneurTexte.classList.add('nutritionText');
            } else {
                conteneurTexte.classList.remove('nutritionText');
            }
            if (dispositions[numero] === 'challenge') {
                conteneurTexte.classList.add('challengeText');
            } else {
                conteneurTexte.classList.remove('challengeText');
            }
        }
        
        // Event listeners for the main banner slider
        if (precedentBtn && suivantBtn) {
            precedentBtn.addEventListener('click', () => ChangeSlide(-1));
            suivantBtn.addEventListener('click', () => ChangeSlide(1));
        }

        setInterval(() => ChangeSlide(1), 5000);
        ChangeSlide(0);





    })();


// Données centralisées pour tous les types de contenu
const allContent = {
    programme: {
        image: "images/programme.jpg",
        text: "C'est ici que tout commence, n'ayez pas peur d'être la meilleure version de vous même!!!",
        title: "PROGRAMME/COACHING SPORTIF",
        link: "coaching.html",
        dispositionClass: "coaching"
    },
    nutrition: {
        image: "images/nutrition.jpg",
        text: "Découvrez nos plans de repas pour atteindre vos objectifs",
        title: "NUTRITION",
        link: "nutrition.html",
        dispositionClass: "nutrition"
    },
    challenge: {
        image: "images/challenge.webp",
        text: "Maitrisez-votre alimentation, partagez car ensemble on est plus fort!!!",
        title: "CHALLENGE",
        link: "challenge.html",
        dispositionClass: "challenge"
    }
};

// Fonction unique pour gérer toutes les mises à jour de contenu
function updateContent(type) {
    const data = allContent[type];
    if (!data) return;

    const myImageElement = document.getElementById("plansportif");
    const myTextElement = document.getElementById("coachingText");
    const myTitreElement = document.getElementById("coachingTitre");
    const buttonDecouvrir = document.getElementById("decouvrir");
    // Changement ici : le sélecteur est maintenant '.menuText'
    const conteneurTexte = document.querySelector('.menuText'); 

    if (myImageElement && myTextElement && myTitreElement && buttonDecouvrir && conteneurTexte) {
        myImageElement.src = data.image;
        myTextElement.textContent = data.text;
        myTitreElement.textContent = data.title;
        buttonDecouvrir.href = data.link;

        // Réinitialise toutes les classes spécifiques avant d'ajouter la nouvelle
        conteneurTexte.classList.remove('coaching', 'nutrition', 'challenge');
        conteneurTexte.classList.add(data.dispositionClass);
    }
}

// Définit le contenu par défaut au premier chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    updateContent('programme');
});


document.addEventListener('DOMContentLoaded', () => {

    // --- Module 1 : Gestion du thème (dark/light mode) ---
    (() => {
        const themeToggle = document.getElementById('theme-toggle');
        const stylesheetLink = document.getElementById('style');
        const themePreference = localStorage.getItem('theme');

        if (themeToggle && stylesheetLink) {
            // Appliquer le thème sauvegardé, si il existe
            if (themePreference) {
                stylesheetLink.href = themePreference === 'dark' ? 'darkmode.css' : 'style.css';
                themeToggle.checked = themePreference === 'dark';
            }

            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    stylesheetLink.href = 'darkmode.css';
                    localStorage.setItem('theme', 'dark');
                } else {
                    stylesheetLink.href = 'style.css';
                    localStorage.setItem('theme', 'light');
                }
            });
        }
    })(); // <-- Il manquait cette parenthèse et cette accolade
});





document.addEventListener("DOMContentLoaded", () => {
    // --- Initialisation des éléments du Carrousel ---
    const track = document.querySelector(".carte");
    const precedent = document.getElementById("prev");
    const suivant = document.getElementById("next");
    
    // Si un des éléments est manquant, le script s'arrête.
    if (!track || !precedent || !suivant) {
        console.error("Les éléments du carrousel sont introuvables. Vérifiez les classes et IDs.");
        return;
    }

    const images = track.querySelectorAll("img");
    const CLONE_COUNT = 6; // Adapter ce nombre en fonction de la fluidité souhaitée
    const intervalTime = 5000;
    const transitionDuration = 500;
    const transitionEffect = `transform ${transitionDuration / 1000}s ease-in-out`;

    if (images.length < CLONE_COUNT) {
        console.error(`Le carrousel nécessite au moins ${CLONE_COUNT} images.`);
        return;
    }

    // --- Clonage des images pour la boucle ---
    const originalImages = Array.from(images);
    const originalImageCount = originalImages.length;
    let index = CLONE_COUNT;

    for (let i = originalImageCount - CLONE_COUNT; i < originalImageCount; i++) {
        const clone = originalImages[i].cloneNode(true);
        track.prepend(clone);
    }

    for (let i = 0; i < CLONE_COUNT; i++) {
        const clone = originalImages[i].cloneNode(true);
        track.appendChild(clone);
    }
    
    const allImages = track.querySelectorAll("img");
    let imageWidth = allImages[0].clientWidth;
    let autoScrollInterval;

    // --- Fonctions du Carrousel ---
    function updateCarouselPosition() {
        track.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    function slide(direction) {
        if (track.classList.contains('is-transitioning')) return;
        
        track.classList.add('is-transitioning');
        track.style.transition = transitionEffect;
        
        if (direction === 'suivant') {
            index++;
        } else {
            index--;
        }

        updateCarouselPosition();
    }

    function startAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => slide('suivant'), intervalTime);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // --- Logique de bouclage ---
    track.addEventListener('transitionend', () => {
        track.classList.remove('is-transitioning');
        
        if (index >= allImages.length - CLONE_COUNT) {
            track.style.transition = 'none';
            index = CLONE_COUNT; 
            track.offsetWidth;
            updateCarouselPosition();
        } else if (index < CLONE_COUNT) {
            track.style.transition = 'none';
            index = originalImageCount;
            track.offsetWidth;
            updateCarouselPosition();
        }
    });

    // --- Écouteurs d'événements ---
    suivant.addEventListener("click", () => { stopAutoScroll(); slide('suivant'); startAutoScroll(); });
    precedent.addEventListener("click", () => { stopAutoScroll(); slide('precedent'); startAutoScroll(); });
    
    window.addEventListener('resize', () => {
        imageWidth = allImages[0].clientWidth;
        updateCarouselPosition();
    });

    // --- Initialisation ---
    updateCarouselPosition();
    startAutoScroll();
});




  