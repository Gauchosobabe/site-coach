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






// Data centralisée pour tous les types de contenu.
const allContent = [{
    title: "PROGRAMME/COACHING SPORTIF",
    text: "C'est ici que tout commence, n'ayez pas peur d'être la meilleure version de vous même!!!",
    image: "images/programme.jpg",
    link: "coaching.html",
    dispositionClass: "coaching"
}, {
    title: "NUTRITION",
    text: "Découvrez nos plans de repas pour atteindre vos objectifs",
    image: "images/nutrition.jpg",
    link: "nutrition.html",
    dispositionClass: "nutrition"
}, {
    title: "CHALLENGE",
    text: "Maitrisez-votre alimentation, partagez car ensemble on est plus fort!!!",
    image: "images/challenge.webp",
    link: "challenge.html",
    dispositionClass: "challenge"
}];

let currentSlideIndex = 0;

function updateCarousel(index, sens = 0) {
    if (typeof index === 'number') {
        currentSlideIndex = index;
    } else {
        currentSlideIndex += sens;
        if (currentSlideIndex < 0) {
            currentSlideIndex = allContent.length - 1;
        }
        if (currentSlideIndex >= allContent.length) {
            currentSlideIndex = 0;
        }
    }

    const data = allContent[currentSlideIndex];

    const imageElement = document.getElementById("plansportif");
    const titreElement = document.getElementById("coachingTitre");
    const texteElement = document.getElementById("coachingText");
    const buttonDecouvrir = document.getElementById("decouvrir");
    const conteneurTexte = document.querySelector('.menuText');

    if (imageElement && titreElement && texteElement && buttonDecouvrir && conteneurTexte) {
        imageElement.src = data.image;
        titreElement.textContent = data.title;
        texteElement.textContent = data.text;
        buttonDecouvrir.href = data.link;

        conteneurTexte.classList.remove('coaching', 'nutrition', 'challenge');
        conteneurTexte.classList.add(data.dispositionClass);
    }
}

// Fonction pour la navigation des boutons "directs".
function updateContent(type) {
    const index = allContent.findIndex(item => item.dispositionClass === type);
    if (index !== -1) {
        updateCarousel(index);
    }
}

// Initialisation du carrousel au chargement de la page.
document.addEventListener('DOMContentLoaded', () => {
    // Liens pour les boutons "précédent" et "suivant".
    const precedentBtn = document.getElementById('precedent');
    const suivantBtn = document.getElementById('suivant');
    
    if (precedentBtn && suivantBtn) {
        precedentBtn.addEventListener('click', () => updateCarousel(null, -1));
        suivantBtn.addEventListener('click', () => updateCarousel(null, 1));
    }
    
    // Liens pour les boutons de navigation directs (button1, button2, button3)
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    if (button1) {
        button1.addEventListener('click', () => updateContent('coaching'));
    }
    if (button2) {
        button2.addEventListener('click', () => updateContent('nutrition'));
    }
    if (button3) {
        button3.addEventListener('click', () => updateContent('challenge'));
    }

    // Rotation automatique toutes les 5 secondes.
    setInterval(() => updateCarousel(null, 1), 5000);
    
    // Affichage initial du premier élément.
    updateCarousel(0);
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


document.addEventListener('DOMContentLoaded', () => {
    const togglerButton = document.getElementById('toggler');
    const menuContainer = document.querySelector('.lien');

    togglerButton.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
    });
});
const article = document.querySelectorAll('.article');
const result = document.querySelectorAll('.résultats');
const container = document.querySelectorAll('.container');
const decouvrir = document.getElementById('decouvrir');


window.addEventListener('DOMContentLoaded', () => { 
    const TL = gsap.timeline({ paused: true });

    TL.from(container, { duration: 1, y: -50, opacity: 0, ease: "power2.out", stagger: 0.3 });
    TL.from(decouvrir, { duration: 1, x: 50, opacity: 0, ease: "power2.out" }, '-=1');
    TL.from(article, { duration: 1, y: -50, opacity: 0, ease: "power2.out", stagger: 0.3 }, '-=1');
    TL.from(result, { duration: 1, y: -50, opacity: 0, ease: "power2.out", stagger: 0.3 }, '-=1');

    TL.play();
});

