document.addEventListener("DOMContentLoaded", function() {
  const textContainer = document.getElementById('scrollingText');
  
  // 1. On clone le contenu (le h2)
  const clone = textContainer.innerHTML;
  
  // 2. On ajoute le clone à la suite du texte original
  textContainer.innerHTML += clone;
  
  // 3. On ajoute la classe CSS qui lance l'animation
  // On le fait ici pour être sûr que le texte est doublé avant de lancer le mouvement
  textContainer.classList.add('animate');
});