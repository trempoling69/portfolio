console.log("%cBienvenue sur mon portfolio !", "color:red")
console.log("%cSi vous avez besoin d'informations supplémentaires n'hésitez pas à me contacter", "color:white")
console.log("%ccontact@romain-mourieras.fr", "background-color:grey")
//*EFFET NAVBAR APPARITION ET CHANGEMENT DE SECTION
let navContainer = document.querySelector(".navbarContainer");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      if (entry.target.className == "home" && intersecting) {
        navContainer.style.display = "none";
      }
      if (entry.target.className == "apropos" && intersecting) {
        navContainer.style.display = "flex";
        document
          .querySelector(".navListe :nth-child(2)")
          .classList.add("active");
        document
          .querySelector(".navListe :nth-child(3)")
          .classList.remove("active");
        document
          .querySelector(".navListe :nth-child(4)")
          .classList.remove("active");
      }
      if (entry.target.className == "sticky" && intersecting) {
        navContainer.style.display = "flex";
        document
          .querySelector(".navListe :nth-child(2)")
          .classList.remove("active");
        document
          .querySelector(".navListe :nth-child(4)")
          .classList.remove("active");
        document
          .querySelector(".navListe :nth-child(3)")
          .classList.add("active");
      }
      if (entry.target.className == "contact" && intersecting) {
        navContainer.style.display = "flex";
        document
          .querySelector(".navListe :nth-child(2)")
          .classList.remove("active");
        document
          .querySelector(".navListe :nth-child(3)")
          .classList.remove("active");
        document
          .querySelector(".navListe :nth-child(4)")
          .classList.add("active");
      }
    });
  },
  {
    threshold: 0.15, // permet d'indiquer la zone à partir de laquelle l'élément devient 'visible'
  }
);
observer.observe(document.querySelector(".home"));
observer.observe(document.querySelector(".apropos"));
observer.observe(document.querySelector(".sticky"));
observer.observe(document.querySelector(".contact"));

//*CURSEUR
var curseur = document.querySelector("#cursor");
var cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", (e) => {
  var x = e.clientX;
  var y = e.clientY;
  curseur.style.top = `${y}px`;
  curseur.style.left = `${x}px`;
});
const elements = document.querySelectorAll("#linav");

for(const element of elements){
    element.addEventListener("mouseover", ()=>{
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    const width = rect.width + parseInt(style.marginLeft) + parseInt(style.marginRight);
    const height = rect.height + parseInt(style.marginTop) + parseInt(style.marginBottom);
    console.log(width, height);
    cursor.style.height = `${height + 20}px`
  })
  element.addEventListener("mouseout", ()=>{
    cursor.style.height = `30px`
  })
}


//*EFFET ECRITURE
//ECRITURE
function typeEffect(element, speed, callback) {
  element.style.display = "inline-block"
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
      if (typeof callback === "function") {
        callback();
      }
    }
  }, speed);
}

//SUPPRESSION
function suppEffect(element, speed, callback) {
  var text = element.innerHTML;
  var i = text.length;
  var timer = setInterval(function () {
    if (i >= 0) {
      text = text.slice(0, -1);
      element.innerHTML = text;
      i--;
    } else {
      element.style.display = "none"
      clearInterval(timer);
      if (typeof callback === "function") {
        callback();
      }
    }
  }, speed);
}

// REGLAGE GENERAUX
var speed = 100;
var titre = document.querySelector(".monNom");
var firsttext = document.querySelector(".text1");
var secondtext = document.querySelector(".text2");
var delay = titre.innerHTML.length * speed + speed;

//ECRITURE NOM
typeEffect(titre, speed);

//LANCEMENT ANIM ALTERNER TEXTE
setTimeout(function () {
  alternate();
}, delay);

//DELAI POUR SUPPRIMER TEXTE
var delaiattente = firsttext.innerHTML.length * speed + 3000;

//FONTION QUI ALTERNE LES ECRITURE ET GERE L'ECRITURE ET LA SUPPRESSION
let alternate = () => {
  // Définit une fonction interne qui exécutera tous les effets de frappe et de suppression
  const runEffects = () => {
    typeEffect(firsttext, speed, () => {
      // Affiche le texte pendant un certain temps avant de le faire disparaître
      setTimeout(() => {
        suppEffect(firsttext, speed, () => {
          secondtext.textContent = "Etudiant";
          typeEffect(secondtext, speed, () => {
            // Affiche le texte pendant un certain temps avant de le faire disparaître
            setTimeout(() => {
              firsttext.textContent = "Developpeur web junior";
              suppEffect(secondtext, speed, () => {
                // Appelle la fonction récursivement
                alternate();
              });
            }, delaiattente);
          });
        });
      }, delaiattente);
    });
  };

  // Exécute les effets immédiatement
  runEffects();
};

//*ETOILE FILANTE
const shootingStarsContainer = document.getElementById("homecontainer");
//FONTION QUI CREE UNE ETOILE FILANTE
function addShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star", "animated", "hidden");

  // position aléatoire
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  shootingStar.style.left = x + "px";
  shootingStar.style.top = y + "px";

  // Ajoute l'étoile filante au conteneur
  shootingStarsContainer.appendChild(shootingStar);

  // Affiche l'étoile filante après un délai d'attente de 1 seconde
  setTimeout(() => {
    shootingStar.classList.remove("hidden");
  }, 1000);

  // Supprime l'étoile filante au bout de 6 secondes
  setTimeout(() => {
    shootingStarsContainer.removeChild(shootingStar);
  }, 6000);
}
//AJOUTE UNE ETOILE TOUTES LES 5 SECONDES
setInterval(addShootingStar, 5000);

//*FUSEE ANIM 
var fuseeoff = document.getElementById("fuseeoff")
var fuseetakeoff = document.getElementById("fuseetakeoff")
var cursorfusee = document.querySelector("cursorfusee")
fuseeoff.addEventListener("mouseover", (e)=>{
  e.stopPropagation();
  curseur.classList.remove("cursor")
  curseur.classList.add("cursorfusee")
})
fuseeoff.addEventListener("mouseout", (e)=>{
  e.stopPropagation();
  curseur.classList.remove("cursorfusee")
  curseur.classList.add("cursor")
})
fuseeoff.addEventListener("click", ()=>{
  fuseeoff.classList.add("fuseeneardecolle");
  setTimeout(()=>{
    fuseeoff.style.display = "none"
    fuseetakeoff.classList.add("fuseedecollage")
  },1000)
  
  setTimeout(()=>{
    fuseeoff.classList.remove("fuseeneardecolle")
    fuseetakeoff.classList.remove("fuseedecollage")
    fuseeoff.style.display = "block"
  }, 5000)
})

//*SCROLL HORIZONTAL PROJET

if(window.innerWidth < 1024){

}else{
  const spaceHolder = document.querySelector(".space-holder");
  const horizontal = document.querySelector(".horizontal");
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  
  function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 200; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
  }
  
  window.addEventListener("scroll", () => {
    const sticky = document.querySelector(".sticky");
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
  });
  
  window.addEventListener("resize", () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  });
  
}





