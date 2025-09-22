  // ===============================================
  // SCRIPT POUR SCHRINKE LE HEADER
  
  
  
  // ================================
// 🚀 FONCTION THROTTLE OPTIMISÉE
// ================================
function throttle(func, delay = 16) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function (...args) {
        const currentTime = Date.now();
        
        // Si assez de temps s'est écoulé depuis la dernière exécution
        if (currentTime - lastExecTime >= delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            // Sinon, programmer l'exécution pour plus tard
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// ================================
// 📏 GESTION SCROLL HEADER OPTIMISÉE
// ================================
const header = document.getElementById('stickyIntro');

// Variables de cache pour optimiser les performances
let isScrolling = false;
let currentScrollY = 0;
let isHeaderShrunk = false;

function handleScroll() {
    currentScrollY = window.scrollY;
    
    // Éviter les manipulations DOM inutiles
    if (currentScrollY > 100 && !isHeaderShrunk) {
        header.classList.add('shrunk');
        isHeaderShrunk = true;
        console.log('🔼 Header rétréci');
    } else if (currentScrollY <= 100 && isHeaderShrunk) {
        header.classList.remove('shrunk');
        isHeaderShrunk = false;
        console.log('🔽 Header étendu');
    }
    
    isScrolling = false;
}

// ⚡ Throttle pour le scroll (16ms = ~60fps)
const handleScrollThrottled = throttle(handleScroll, 16);

// 🎯 Gestionnaire de scroll optimisé avec RAF pour la fluidité
function optimizedScrollHandler() {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            handleScrollThrottled();
        });
    }
}

// ================================
// 🚀 INITIALISATION
// ================================
if (header) {
    // Ajouter l'écouteur avec le gestionnaire optimisé
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // Appel initial pour définir l'état correct
    handleScroll();
    
    console.log('✅ Scroll handler initialisé avec throttle + RAF');
} else {
    console.warn('⚠️ Élément #stickyIntro introuvable');
}

// ================================
// 🛠️ FONCTIONS UTILITAIRES
// ================================

// Fonction pour nettoyer les event listeners si nécessaire
window.cleanupScrollHandler = function() {
    window.removeEventListener('scroll', optimizedScrollHandler);
    console.log('🧹 Scroll handler nettoyé');
};

// Fonction pour ajuster le seuil de déclenchement
window.setScrollThreshold = function(newThreshold = 100) {
    const originalHandle = handleScroll;
    
    handleScroll = function() {
        currentScrollY = window.scrollY;
        
        if (currentScrollY > newThreshold && !isHeaderShrunk) {
            header.classList.add('shrunk');
            isHeaderShrunk = true;
            console.log(`🔼 Header rétréci (seuil: ${newThreshold}px)`);
        } else if (currentScrollY <= newThreshold && isHeaderShrunk) {
            header.classList.remove('shrunk');
            isHeaderShrunk = false;
            console.log(`🔽 Header étendu (seuil: ${newThreshold}px)`);
        }
        
        isScrolling = false;
    };
    
    console.log(`🎯 Nouveau seuil défini: ${newThreshold}px`);
};

// ================================
// 📊 MONITORING PERFORMANCES
// ================================
let scrollEventCount = 0;
let scrollExecutionCount = 0;

// Intercepter pour compter les événements
const originalOptimizedHandler = optimizedScrollHandler;
optimizedScrollHandler = function() {
    scrollEventCount++;
    originalOptimizedHandler();
};

// Intercepter pour compter les exécutions
const originalHandleScroll = handleScroll;
handleScroll = function() {
    scrollExecutionCount++;
    originalHandleScroll();
};

// Fonction de diagnostic
window.getScrollStats = function() {
    return {
        scrollEvents: scrollEventCount,
        scrollExecutions: scrollExecutionCount,
        ratio: scrollEventCount > 0 ? (scrollExecutions / scrollEventCount * 100).toFixed(1) + '%' : '0%',
        currentScrollY: currentScrollY,
        isHeaderShrunk: isHeaderShrunk,
        throttleDelay: '16ms (~60fps)',
        optimizations: ['throttle', 'requestAnimationFrame', 'passive listener', 'DOM cache']
    };
};

// Reset des statistiques
window.resetScrollStats = function() {
    scrollEventCount = 0;
    scrollExecutionCount = 0;
    console.log('📊 Statistiques de scroll réinitialisées');
};