document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // Mobile nav toggle
  // -----------------------------
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking a nav link
    document.querySelectorAll('#nav a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => navMenu.classList.add("hidden"));
    });
  }

  // -----------------------------
  // Smooth-scroll for in-page anchors (if you want native, set CSS: html { scroll-behavior: smooth; })
  // -----------------------------
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // -----------------------------
  // Reveal-on-scroll (generic)
  // -----------------------------
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(
      ".fade-in-left, .fade-in-right, .fade-in-bottom, .fade-in-up, .fade-in, .reveal"
    )
    .forEach((el) => revealObserver.observe(el));


  // -----------------------------
  // Intro font cycle → black overlay fade → staged content reveal
  // -----------------------------
  const logo = document.getElementById("logo"); // the full-screen overlay container
  if (logo) {
    const letters = logo.querySelectorAll(".logo-text"); // the 4 cells: A B D I (or whatever)
    const staged = Array.from(document.querySelectorAll(".reveal-on-intro"));
    const navbar = document.getElementById("navbar") || staged[0] || null;
    const hero = document.getElementById("hero") || staged[1] || null;

    // Lock scroll during intro
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Fonts to cycle through
    const fonts = [
      "Kodchasan",
      "Arial",
      "Verdana",
      "Helvetica",
      "Georgia",
      "Times New Roman",
      "Courier New",
      "Brush Script MT",
      "Comic Sans MS",
      "Lucida Console",
      "Tahoma",
      "Impact",
      "Trebuchet MS",
      "Futura",
    ];

    // Cycle them fast across the letters
    const step = 75; // ms per font
    fonts.forEach((font, i) => {
      setTimeout(() => {
        letters.forEach((el) => {
          el.style.fontFamily = font;
        });
      }, i * step);
    });

    // When cycle finishes, fade overlay → reveal navbar → reveal hero
    const total = fonts.length * step + 150; // + a hair for good feel

    setTimeout(() => {
      // fade overlay to transparent (styles.css should have .logo-overlay.fade-out { opacity: 0; })
      logo.classList.add("fade-out");

      // Reveal navbar immediately
      if (navbar) navbar.classList.add("show");

      // Reveal hero shortly after for a nice stagger
      setTimeout(() => {
        if (hero) hero.classList.add("show");
      }, 150);
    }, total);

    // Clean up overlay and restore scroll after fade completes
    setTimeout(() => {
      if (logo && logo.parentNode) logo.parentNode.removeChild(logo);
      document.body.style.overflow = prevOverflow || "";
    }, total + 550);
  }
});
