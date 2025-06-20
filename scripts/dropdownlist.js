  (function() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle function
    function toggleMenu(e) {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle("show");
      // Toggle hamburger open class
      if (isOpen) {
        menuToggle.classList.add("open");
        menuToggle.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");
      } else {
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
      }
    }

    // Click hamburger: open/close
    menuToggle.addEventListener("click", toggleMenu);

    // Clicking a link closes menu
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        // close menu
        mobileMenu.classList.remove("show");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
      });
    });

    // Clicking outside closes menu if open
    document.addEventListener("click", (e) => {
      if (!mobileMenu.classList.contains("show")) return;
      if (!mobileMenu.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove("show");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
      }
    });

    // Prevent clicks inside menu from bubbling up
    mobileMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  })();
