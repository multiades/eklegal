document.addEventListener('DOMContentLoaded', () => { // I don't check for existence, all the elements are guaranteed to exist
  const html = document.documentElement; // Scroll-locking on the html element to avoid bugs
  
  const lang = html.getAttribute('lang');

  const menuToggler = document.getElementById('menuToggler'); 

  const ariaLabels = {
    el: {
      open: "Ανάπτυξη μενού",
      close: "Σύμπτυξη μενού"
    },
    en: {
      open: "Open menu",
      close: "Close menu"
    }
  };
   
  const menuState = () => {
    const isMenuOpen = menuToggler.checked; // Initialize here for live updates 

    html.classList.toggle('menuOpen', isMenuOpen); // the state of the menuToggler decides if the class menuOpen should be added or removed
    
    // Sync menuToggler aria
    menuToggler.setAttribute('aria-label', isMenuOpen ? ariaLabels[lang].close : ariaLabels[lang].open); // If the menu is open, the label should be "Close menu" 
    menuToggler.setAttribute('aria-expaned', isMenuOpen); 
  };

  // State initialization
  menuState();

  // Listen for changes
  menuToggler.addEventListener('change', menuState);
});