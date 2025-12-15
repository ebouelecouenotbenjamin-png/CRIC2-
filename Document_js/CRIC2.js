document.addEventListener('DOMContentLoaded', () => {
    
    /* ===================================================================
       ⚙️ CONFIGURATION CENTRALE DES ANIMATIONS
       ================================================================= */
    const config = {
        scrollThreshold: 0.15,
        staggerBase: 0.08,
        rippleDuration: 600,
        hoverScale: 1.03,
        transitionSmooth: 0.35,
        mouseTrackingEnabled: true,
        particlesEnabled: true,
        magneticButtonsEnabled: true,
    };

    /* ===================================================================
       🎨 INJECTION DE KEYFRAMES MODERNES
       ================================================================= */
    const injectModernKeyframes = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInScale {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes rippleEffect {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

            @keyframes pulse {
                0%, 100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.7;
                }
            }

            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-10px);
                }
            }

            @keyframes glow {
                0%, 100% {
                    text-shadow: 0 0 10px rgba(255, 152, 0, 0.3);
                }
                50% {
                    text-shadow: 0 0 20px rgba(255, 152, 0, 0.6);
                }
            }

            @keyframes shimmer {
                0% {
                    background-position: -1000px 0;
                }
                100% {
                    background-position: 1000px 0;
                }
            }

            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes bounceIn {
                0% {
                    opacity: 0;
                    transform: scale(0.3);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.05);
                }
                70% {
                    transform: scale(0.9);
                }
                100% {
                    transform: scale(1);
                }
            }

            @keyframes rotateIn {
                from {
                    opacity: 0;
                    transform: rotate(-10deg) scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: rotate(0) scale(1);
                }
            }

            @keyframes zoomIn {
                from {
                    opacity: 0;
                    transform: scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            @keyframes blurIn {
                from {
                    opacity: 0;
                    filter: blur(10px);
                }
                to {
                    opacity: 1;
                    filter: blur(0);
                }
            }

            @keyframes flip {
                0% {
                    transform: perspective(400px) rotateY(0);
                }
                100% {
                    transform: perspective(400px) rotateY(360deg);
                }
            }

            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes heartBeat {
                0%, 100% {
                    transform: scale(1);
                }
                14% {
                    transform: scale(1.3);
                }
                28% {
                    transform: scale(1);
                }
                42% {
                    transform: scale(1.3);
                }
                70% {
                    transform: scale(1);
                }
            }

            @keyframes swing {
                20% {
                    transform: rotate(15deg);
                }
                40% {
                    transform: rotate(-10deg);
                }
                60% {
                    transform: rotate(5deg);
                }
                80% {
                    transform: rotate(-5deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }

            @keyframes wobble {
                0%, 100% {
                    transform: translateX(0);
                }
                15% {
                    transform: translateX(-5px) rotate(-5deg);
                }
                30% {
                    transform: translateX(5px) rotate(3deg);
                }
                45% {
                    transform: translateX(-5px) rotate(-3deg);
                }
                60% {
                    transform: translateX(3px) rotate(2deg);
                }
                75% {
                    transform: translateX(-2px) rotate(-1deg);
                }
            }

            @keyframes jello {
                0%, 11.1%, 100% {
                    transform: none;
                }
                22.2% {
                    transform: skewX(-12.5deg) skewY(-12.5deg);
                }
                33.3% {
                    transform: skewX(6.25deg) skewY(6.25deg);
                }
                44.4% {
                    transform: skewX(-3.125deg) skewY(-3.125deg);
                }
                55.5% {
                    transform: skewX(1.5625deg) skewY(1.5625deg);
                }
                66.6% {
                    transform: skewX(-0.78125deg) skewY(-0.78125deg);
                }
                77.7% {
                    transform: skewX(0.390625deg) skewY(0.390625deg);
                }
                88.8% {
                    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
                }
            }
        `;
        document.head.appendChild(style);
    };

    injectModernKeyframes();

    /* ===================================================================
       🎬 SECTION 1 : ENTRANCE ANIMATIONS À LA PAGE LOAD
       Animations fluides au chargement pour les éléments principaux
       ================================================================= */
    
    const headerEl = document.querySelector('header');
    const mainEl = document.querySelector('main');
    const footerEl = document.querySelector('footer');
    
    if (headerEl) {
        headerEl.style.animation = 'fadeInScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }
    
    if (mainEl) {
        mainEl.style.animation = 'slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards';
        mainEl.style.opacity = '0';
    }
    
    if (footerEl) {
        footerEl.style.animation = 'slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards';
        footerEl.style.opacity = '0';
    }


    /* ===================================================================
       👁️ SECTION 2 : SCROLL REVEAL - IntersectionObserver Optimisé
       Détecte l'entrée des éléments dans la fenêtre et les anime
       ================================================================= */
    
    const createScrollObserver = () => {
        const observerOptions = {
            root: null,
            rootMargin: '-50px',
            threshold: config.scrollThreshold
        };

        return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animation d'apparition
                    entry.target.style.animation = `slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
                    entry.target.style.opacity = '1';
                    
                    // Effet bonus : ajoute une bordure temporaire de couleur
                    if (entry.target.classList.contains('immatriculation') || 
                        entry.target.classList.contains('service')) {
                        entry.target.style.borderLeftColor = 'var(--orange)';
                        entry.target.style.borderLeftWidth = '4px';
                    }
                    
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
    };

    const observer = createScrollObserver();
    
    // Observe tous les éléments clés
    const elementsToObserve = document.querySelectorAll(
        'section, .immatriculation, .actualite-image, .regional, .service, .Documentations, .CSI, .imma, .pp, .tt, .ss, .vv'
    );

    elementsToObserve.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.03}s`;
        observer.observe(el);
    });


    /* ===================================================================
       🎯 SECTION 3 : CASCADE STAGGER POUR GRILLES & LISTES
       Fait apparaître les éléments l'un après l'autre
       ================================================================= */
    
    const setupGridAnimations = () => {
        const grids = document.querySelectorAll(
            '.global, .structure_CRIC2, .services-grid, [class*="grid"], [class*="flex"]'
        );
        
        grids.forEach(grid => {
            Array.from(grid.children).forEach((child, index) => {
                const staggerDelay = index * config.staggerBase;
                child.style.animation = `fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${staggerDelay}s forwards`;
                child.style.opacity = '0';
                child.style.transformOrigin = 'center bottom';
            });
        });
    };
    
    setupGridAnimations();


    /* ===================================================================
       💫 SECTION 4 : RIPPLE EFFECT AMÉLIORÉ
       Effet d'onde au clic avec couleurs adaptées
       ================================================================= */
    
    const setupRippleEffect = () => {
        const rippleTargets = document.querySelectorAll(
            'button, a, .imma, .pp, .tt, .ss, .vv, nav a, [role="button"], input[type="submit"], .card'
        );

        rippleTargets.forEach(element => {
            // Assure le positionnement relatif
            if (window.getComputedStyle(element).position === 'static') {
                element.style.position = 'relative';
            }
            element.style.overflow = 'hidden';
            element.style.cursor = 'pointer';

            element.addEventListener('click', function(e) {
                // Vérifie que le clic est direct sur l'élément
                if (e.target !== this && !this.contains(e.target)) return;

                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const size = Math.max(rect.width, rect.height);

                // Crée le ripple
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.left = `${x - size / 2}px`;
                ripple.style.top = `${y - size / 2}px`;
                ripple.style.width = `${size}px`;
                ripple.style.height = `${size}px`;
                ripple.style.borderRadius = '50%';
                ripple.style.pointerEvents = 'none';
                ripple.style.animation = `rippleEffect ${config.rippleDuration}ms ease-out forwards`;
                
                // Couleur adaptée
                if (this.classList.contains('btn-orange') || this.tagName === 'BUTTON') {
                    ripple.style.background = 'radial-gradient(circle, rgba(255, 152, 0, 0.7) 0%, rgba(255, 152, 0, 0) 70%)';
                } else if (this.tagName === 'A') {
                    ripple.style.background = 'radial-gradient(circle, rgba(45, 146, 93, 0.6) 0%, rgba(45, 146, 93, 0) 70%)';
                } else {
                    ripple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)';
                }
                
                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), config.rippleDuration);
            });
        });
    };
    
    setupRippleEffect();


    /* ===================================================================
       ✨ SECTION 5 : HOVER EFFECTS PREMIUM
       Transformations smooth et shadows élégantes
       ================================================================= */
    
    const setupHoverEffects = () => {
        const hoverTargets = document.querySelectorAll(
            '.service, .actualite-image, .card, .imma, .pp, .tt, .ss, .vv, nav a, button'
        );

        hoverTargets.forEach(element => {
            // Stocke l'ombre originale
            const originalShadow = window.getComputedStyle(element).boxShadow;
            const originalTransform = window.getComputedStyle(element).transform;

            element.addEventListener('mouseenter', function() {
                this.style.transition = `all ${config.transitionSmooth}s cubic-bezier(0.34, 1.56, 0.64, 1)`;
                this.style.transform = `translateY(-6px) scale(${config.hoverScale})`;
                this.style.boxShadow = '0 20px 40px rgba(10, 133, 96, 0.2)';
                this.style.filter = 'brightness(1.05)';
            });

            element.addEventListener('mouseleave', function() {
                this.style.transform = originalTransform || 'scale(1)';
                this.style.boxShadow = originalShadow;
                this.style.filter = 'brightness(1)';
            });
        });
    };
    
    setupHoverEffects();


    /* ===================================================================
       🧲 SECTION 5.5 : MAGNETIC BUTTONS - EFFET MAGNÉTIQUE
       Les boutons suivent le curseur pour un effet captivant
       ================================================================= */
    
    const setupMagneticButtons = () => {
        if (!config.magneticButtonsEnabled) return;
        
        const magneticElements = document.querySelectorAll('button, a[role="button"], .btn, .service-btn, .cta-btn');
        
        magneticElements.forEach(element => {
            let x = 0, y = 0;
            
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                x = (e.clientX - centerX) * 0.2;
                y = (e.clientY - centerY) * 0.2;
                
                this.style.transform = `translate(${x}px, ${y}px)`;
                this.style.transition = 'none';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
                this.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
            });
        });
    };
    
    setupMagneticButtons();


    /* ===================================================================
       ✨ SECTION 5.6 : CURSOR TRACKING - SUIVI DU CURSEUR
       Ajoute des effets visuels qui suivent le curseur
       ================================================================= */
    
    const setupCursorTracking = () => {
        if (!config.mouseTrackingEnabled) return;
        
        const cursorDot = document.createElement('div');
        cursorDot.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--orange);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.6;
            box-shadow: 0 0 10px var(--orange);
            display: none;
        `;
        document.body.appendChild(cursorDot);
        
        const cursorRing = document.createElement('div');
        cursorRing.style.cssText = `
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid var(--orange);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            opacity: 0.3;
            display: none;
        `;
        document.body.appendChild(cursorRing);
        
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.display = 'block';
            cursorRing.style.display = 'block';
        });
        
        document.addEventListener('mouseleave', () => {
            cursorDot.style.display = 'none';
            cursorRing.style.display = 'none';
        });
        
        const animateCursor = () => {
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;
            ringX += (mouseX - ringX) * 0.1;
            ringY += (mouseY - ringY) * 0.1;
            
            cursorDot.style.left = `${dotX}px`;
            cursorDot.style.top = `${dotY}px`;
            cursorRing.style.left = `${ringX - 15}px`;
            cursorRing.style.top = `${ringY - 15}px`;
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
    };
    
    setupCursorTracking();


    /* ===================================================================
       🌊 SECTION 6 : SMOOTH PARALLAX AU SCROLL
       Crée un effet de profondeur légère et naturelle
       ================================================================= */
    
    const setupParallax = () => {
        const parallaxElements = document.querySelectorAll('[data-parallax], .hero-image, .bg-image');
        
        if (parallaxElements.length > 0) {
            let ticking = false;
            
            const updateParallax = () => {
                const scrollY = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    const elementY = rect.top + scrollY;
                    const speed = 0.3; // Ajuste la vitesse
                    const distance = (scrollY - elementY) * speed;
                    
                    element.style.transform = `translateY(${distance}px)`;
                });
                
                ticking = false;
            };
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }, { passive: true });
        }
    };
    
    setupParallax();


    /* ===================================================================
       📜 SECTION 7 : SMOOTH SCROLL AUX ANCRES
       Navigation fluide entre sections
       ================================================================= */
    
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Ajoute un flash d'attention
                    setTimeout(() => {
                        target.style.animation = 'pulse 0.6s ease-out';
                    }, 500);
                }
            });
        });
    };
    
    setupSmoothScroll();


    /* ===================================================================
       🔢 SECTION 8 : COUNTER ANIMATIONS
       Compte automatiquement vers un nombre cible au scroll
       ================================================================= */
    
    const setupCounters = () => {
        const counters = document.querySelectorAll('[data-count], .counter, .stat-number, [data-target]');
        
        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-count') || element.getAttribute('data-target') || element.textContent);
            
            if (isNaN(target)) return;
            
            let current = 0;
            const increment = Math.ceil(target / 50);
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = current;
                }
            }, 30);
        };
        
        // Déclenche au scroll
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => counterObserver.observe(counter));
    };
    
    setupCounters();


    /* ===================================================================
       🎨 SECTION 9 : INTERACTIVE TEXT EFFECTS
       Animations sur les textes et titres
       ================================================================= */
    
    const setupTextEffects = () => {
        // Glow effect au survol
        const glowTargets = document.querySelectorAll('h1, h2, h3, .highlight, [data-glow]');
        
        glowTargets.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transition = 'text-shadow 0.3s ease';
                this.style.textShadow = '0 0 15px rgba(255, 152, 0, 0.5), 0 0 30px rgba(255, 152, 0, 0.3)';
                this.style.color = 'var(--orange)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.textShadow = 'none';
                this.style.color = '';
            });
        });
    };
    
    setupTextEffects();


    /* ===================================================================
       🎭 SECTION 10 : BUTTON STATE ANIMATIONS
       Animations de boutons au clic et au survol
       ================================================================= */
    
    const setupButtonStates = () => {
        const buttons = document.querySelectorAll('button, a[role="button"], input[type="submit"], .btn');
        
        buttons.forEach(button => {
            button.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease-out';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'scale(1)';
            });
        });
    };
    
    setupButtonStates();


    /* ===================================================================
       📱 SECTION 11 : MOBILE OPTIMIZATIONS
       Désactive certaines animations sur mobile pour performance
       ================================================================= */
    
    if (window.innerWidth < 768) {
        // Désactive le parallax sur mobile
        document.querySelectorAll('[data-parallax], .hero-image').forEach(el => {
            el.style.transform = 'none';
        });
    }


    /* ===================================================================
       🎯 SECTION 12 : NAVIGATION ENHANCEMENTS
       Animations améliorées pour la navigation
       ================================================================= */
    
    const setupNavEnhancements = () => {
        const navItems = document.querySelectorAll('nav a, .menu-deroulant a');
        
        navItems.forEach(item => {
            // Underline animation au survol
            item.addEventListener('mouseenter', function() {
                this.style.borderBottomColor = 'var(--orange)';
                this.style.borderBottomWidth = '2px';
                this.style.paddingBottom = '2px';
                this.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.borderBottomColor = 'transparent';
            });
        });
    };
    
    setupNavEnhancements();


    /* ===================================================================
       ⬆️ SECTION 13 : SCROLL-TO-TOP BUTTON & SCROLL INDICATOR
       Bouton de retour vers le haut avec indicateur de scroll
       ================================================================= */
    
    const setupScrollToTop = () => {
        // Crée le bouton scroll-to-top
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.id = 'scroll-to-top';
        scrollToTopBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        `;
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--secondary-gradient);
            color: var(--blanc);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            z-index: 999;
            box-shadow: 0 8px 24px rgba(255, 152, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: translateY(20px);
        `;
        document.body.appendChild(scrollToTopBtn);

        // Crée l'indicateur de scroll vers le bas
        const scrollDownIndicator = document.createElement('div');
        scrollDownIndicator.id = 'scroll-down-indicator';
        scrollDownIndicator.innerHTML = `
            <div class="scroll-indicator-content">
                <span class="scroll-text">Scroll</span>
                <svg class="scroll-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        `;
        scrollDownIndicator.style.cssText = `
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
            text-align: center;
            animation: bounce 2s infinite;
        `;
        document.body.appendChild(scrollDownIndicator);

        // Ajoute les styles pour l'indicateur
        const indicatorStyle = document.createElement('style');
        indicatorStyle.textContent = `
            #scroll-down-indicator {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }

            .scroll-indicator-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }

            .scroll-text {
                color: var(--orange);
                font-size: 0.85rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                opacity: 0.8;
            }

            .scroll-arrow {
                color: var(--orange);
                animation: slideDown 1.5s ease-in-out infinite;
            }

            @keyframes slideDown {
                0%, 100% {
                    transform: translateY(0);
                    opacity: 0.6;
                }
                50% {
                    transform: translateY(8px);
                    opacity: 1;
                }
            }

            @keyframes bounce {
                0%, 100% {
                    transform: translateX(-50%) translateY(0);
                }
                50% {
                    transform: translateX(-50%) translateY(-10px);
                }
            }

            #scroll-to-top {
                display: flex !important;
            }

            #scroll-to-top:hover {
                transform: translateY(-5px) scale(1.1);
                box-shadow: 0 12px 32px rgba(255, 152, 0, 0.5);
            }

            #scroll-to-top:active {
                transform: translateY(-2px) scale(0.95);
            }

            #scroll-to-top svg {
                animation: slideUp 0.6s ease-in-out infinite;
            }

            @keyframes slideUp {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-4px);
                }
            }
        `;
        document.head.appendChild(indicatorStyle);

        // Gère la visibilité du bouton et de l'indicateur
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

            // Affiche le bouton scroll-to-top après 300px de scroll
            if (scrollPosition > 300) {
                scrollToTopBtn.style.display = 'flex';
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.transform = 'translateY(0)';
                scrollDownIndicator.style.display = 'none';
            } else {
                scrollToTopBtn.style.display = 'none';
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.transform = 'translateY(20px)';
                scrollDownIndicator.style.display = 'flex';
            }
        }, { passive: true });

        // Fonction de scroll vers le haut
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Ajoute l'effet ripple au bouton
        scrollToTopBtn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const size = Math.max(rect.width, rect.height);

            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = `${x - size / 2}px`;
            ripple.style.top = `${y - size / 2}px`;
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = `rippleEffect 600ms ease-out forwards`;
            ripple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)';

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    };

    setupScrollToTop();


    /* ===================================================================
       📋 SECTION 14 : ACCORDION FUNCTIONALITY
       Gère les accordéons interactifs de la page documentations
       ================================================================= */
    
    const setupAccordions = () => {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordionItem = this.closest('.accordion-item');
                const isActive = accordionItem.classList.contains('active');
                
                // Ferme tous les accordéons ouverts
                document.querySelectorAll('.accordion-item.active').forEach(item => {
                    if (item !== accordionItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Bascule l'accordéon actuel
                accordionItem.classList.toggle('active');
                
                // Animation du contenu
                if (!isActive) {
                    accordionItem.style.animation = 'slideDown 0.3s ease-out';
                }
            });
        });
    };
    
    setupAccordions();

    /* ===================================================================
       🎬 SYSTÈME DE DÉFILEMENT ATTRACTIF POUR LES IMAGES CRIC2
       ================================================================= */
    const initImageCarousel = () => {
        const carousel = document.querySelector('.image_cric2');
        if (!carousel) return;

        const images = carousel.querySelectorAll('img');
        if (images.length === 0) return;

        // Ajouter des événements de survol pour pause/lecture
        let isPaused = false;
        const totalDuration = 6 * images.length; // 6s par image

        carousel.addEventListener('mouseenter', () => {
            isPaused = true;
            carousel.style.animationPlayState = 'paused';
            images.forEach(img => {
                img.style.animationPlayState = 'paused';
            });
            // Ajouter un effet visuel de zoom au survol
            carousel.style.transform = 'scale(1.02)';
            carousel.style.transition = 'transform 0.3s ease-out';
        });

        carousel.addEventListener('mouseleave', () => {
            isPaused = false;
            carousel.style.animationPlayState = 'running';
            images.forEach(img => {
                img.style.animationPlayState = 'running';
            });
            carousel.style.transform = 'scale(1)';
        });

        // Ajouter des indicateurs de progression
        const createIndicators = () => {
            const indicatorContainer = document.createElement('div');
            indicatorContainer.className = 'image-carousel-indicators';
            indicatorContainer.style.cssText = `
                position: absolute;
                bottom: 15px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 8px;
                z-index: 10;
            `;

            images.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.className = 'carousel-indicator';
                indicator.style.cssText = `
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.4);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                `;

                indicator.addEventListener('click', () => {
                    // Optionnel: gérer le clic sur les indicateurs
                });

                indicatorContainer.appendChild(indicator);
            });

            carousel.appendChild(indicatorContainer);

            // Animer les indicateurs
            const updateIndicators = () => {
                const indicators = indicatorContainer.querySelectorAll('.carousel-indicator');
                let currentIndex = 0;
                setInterval(() => {
                    if (!isPaused) {
                        indicators.forEach((ind, idx) => {
                            if (idx === currentIndex % images.length) {
                                ind.style.background = 'rgba(255, 255, 255, 0.9)';
                                ind.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.6)';
                                ind.style.transform = 'scale(1.2)';
                            } else {
                                ind.style.background = 'rgba(255, 255, 255, 0.3)';
                                ind.style.boxShadow = 'none';
                                ind.style.transform = 'scale(1)';
                            }
                        });
                        currentIndex++;
                    }
                }, 12000 / images.length);
            };

            updateIndicators();
        };

        createIndicators();

        console.log('%c🎬 Carrousel d\'images activé avec ' + images.length + ' images', 
            'color: #FF9800; font-size: 12px; font-weight: bold;');
    };

    initImageCarousel();


    /* ===================================================================
       🚀 INITIALIZATION COMPLETE
       ================================================================= */
    
    console.log('%c✨ Animations CRIC2 Premium chargées avec succès!', 
        'color: #FF9800; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 152, 0, 0.3);');
    console.log('%c📱 Site optimisé pour tous les appareils et animations fluides activées', 
        'color: #0a8560; font-size: 12px; font-style: italic;');
    console.log('%c⬆️ Bouton scroll-to-top et indicateur de scroll activés', 
        'color: #FF9800; font-size: 12px; font-style: italic;');
    console.log('%c📋 Accordéons interactifs pour la page documentations activés', 
        'color: #FF9800; font-size: 12px; font-style: italic;');
});