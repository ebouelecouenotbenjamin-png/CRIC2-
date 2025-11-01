// Animation d'apparition du header, main et footer
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.header-flex');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  [header, main, footer].forEach(el => {
    if (el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
    }
  });
  setTimeout(() => {
    if (header) {
      header.style.transition = "all 0.8s";
      header.style.opacity = 1;
      header.style.transform = "translateY(0)";
    }
  }, 100);
  setTimeout(() => {
    if (main) {
      main.style.transition = "all 0.8s";
      main.style.opacity = 1;
      main.style.transform = "translateY(0)";
    }
  }, 400);
  setTimeout(() => {
    if (footer) {
      footer.style.transition = "all 0.8s";
      footer.style.opacity = 1;
      footer.style.transform = "translateY(0)";
    }
  }, 700);
});

// Animation sur les boutons et liens au survol
document.addEventListener("mouseover", function(e) {
  if (e.target.matches('input[type="submit"], .imma, .pp, .tt, .ss, .vv, nav a, .CSI')) {
    e.target.style.boxShadow = "0 4px 16px rgba(255,152,0,0.15)";
    e.target.style.transform = "scale(1.05)";
    e.target.style.transition = "all 0.2s";
  }
});
document.addEventListener("mouseout", function(e) {
  if (e.target.matches('input[type="submit"], .imma, .pp, .tt, .ss, .vv, nav a, .CSI')) {
    e.target.style.boxShadow = "";
    e.target.style.transform = "";
  }
});

// Animation sur les icônes réseaux sociaux
document.querySelectorAll('.reseaux svg').forEach(svg => {
  svg.style.transition = "transform 0.2s";
  svg.parentElement.addEventListener('mouseenter', () => {
    svg.style.transform = "scale(1.2) rotate(-8deg)";
  });
  svg.parentElement.addEventListener('mouseleave', () => {
    svg.style.transform = "";
  });
});

// Animation sur les actualités au survol
document.querySelectorAll('.actualite-image').forEach(card => {
  card.style.transition = "box-shadow 0.2s, transform 0.2s";
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 8px 24px rgba(10,133,96,0.15)";
    card.style.transform = "translateY(-6px) scale(1.03)";
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "";
    card.style.transform = "";
  });
});

// Bouton retour en haut animé
const btnTop = document.createElement('button');
btnTop.id = "btnTop";
btnTop.title = "Retour en haut";
btnTop.innerText = "↑";
btnTop.style.display = "none";
btnTop.style.position = "fixed";
btnTop.style.bottom = "30px";
btnTop.style.right = "30px";
btnTop.style.background = "black";
btnTop.style.color = "orange";
btnTop.style.border = " 4px solid orange";
btnTop.style.borderRadius = "50%";
btnTop.style.width = "45px";
btnTop.style.height = "45px";
btnTop.style.fontSize = "30px";
btnTop.style.cursor = "pointer";
btnTop.style.zIndex = "999";
btnTop.style.boxShadow = "0 2px 8px rgba(255,152,0,0.18)";
document.body.appendChild(btnTop);

window.addEventListener("scroll", function() {
  btnTop.style.display = (window.scrollY > 200) ? "block" : "none";
});
btnTop.addEventListener("click", function() {
  window.scrollTo({top:0, behavior:'smooth'});
  btnTop.style.transform = "scale(1.2)";
  setTimeout(() => btnTop.style.transform = "", 200);
});