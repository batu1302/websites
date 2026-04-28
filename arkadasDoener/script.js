document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAccept = document.getElementById("cookie-accept");
  const cookieDecline = document.getElementById("cookie-decline");
  const cookieChoiceKey = "arkadas-cookie-choice";

  const setHeaderState = () => {
    if (!header) return;
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState);

  const revealElements = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  if (!prefersReducedMotion) {
    const heroSection = document.querySelector(".hero");
    const heroParallax = document.getElementById("hero-bg-parallax");
    if (heroSection && heroParallax) {
      heroSection.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 20;
        const y = (event.clientY / window.innerHeight - 0.5) * 16;
        heroParallax.style.transform = `translate(${x}px, ${y}px)`;
      });
      heroSection.addEventListener("mouseleave", () => {
        heroParallax.style.transform = "";
      });
    }
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetSelector = anchor.getAttribute("href");
      const target = targetSelector ? document.querySelector(targetSelector) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
      }
    });
  });

  const saveCookieChoice = (choice) => {
    localStorage.setItem(cookieChoiceKey, choice);
    cookieBanner?.classList.add("hidden");
  };

  if (cookieAccept) {
    cookieAccept.addEventListener("click", () => saveCookieChoice("all"));
  }
  if (cookieDecline) {
    cookieDecline.addEventListener("click", () => saveCookieChoice("necessary"));
  }

  const existingChoice = localStorage.getItem(cookieChoiceKey);
  if (existingChoice && cookieBanner) {
    cookieBanner.classList.add("hidden");
  }

  const modalOpenButtons = document.querySelectorAll("[data-open-modal]");
  const modalCloseButtons = document.querySelectorAll("[data-close-modal]");

  const closeAllModals = () => {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    });
    document.body.style.overflow = "";
  };

  modalOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-open-modal");
      const modal = modalId ? document.getElementById(modalId) : null;
      if (!modal) return;
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeAllModals);
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeAllModals();
      }
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  if (typeof L !== "undefined") {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      const location = [48.272183, 8.847526];
      const map = L.map("map", { scrollWheelZoom: false }).setView(location, 15);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 20
      }).addTo(map);

      const marker = L.marker(location).addTo(map);
      marker.bindPopup("<strong>ARKADAŞ IMBISS</strong><br>Lange Straße 44<br>72336 Balingen").openPopup();
    }
  }
});
