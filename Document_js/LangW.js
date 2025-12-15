
    // Ce script ajoute la classe "active" sur le bon bouton au chargement
    Weglot.on('initialized', function() {
        var currentLang = Weglot.getCurrentLang(); // Récupère 'fr' ou 'en'
        
        // Retire la classe active de partout
        document.querySelectorAll('.wl-custom-link').forEach(el => el.classList.remove('active'));

        // Ajoute la classe active sur le bouton correspondant
        var activeBtn = document.getElementById('wl-custom-' + currentLang);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    });