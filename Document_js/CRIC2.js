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
    };

    
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
                        entry.target.classList.contains('service') ||
                        entry.target.classList.contains('CSI')) {
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
            '.service, .actualite-image, .CSI, .card, .imma, .pp, .tt, .ss, .vv, nav a, button'
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
       🚀 INITIALIZATION COMPLETE
       ================================================================= */
    
    console.log('%c✨ Animations CRIC2 Premium chargées avec succès!', 
        'color: #FF9800; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 152, 0, 0.3);');
    console.log('%c📱 Site optimisé pour tous les appareils et animations fluides activées', 
        'color: #0a8560; font-size: 12px; font-style: italic;');
});