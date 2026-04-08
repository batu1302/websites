(function () {
  "use strict";

  var CONSENT_KEY = "dr_barbershop_legal_v1";

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      var isOpen = nav.classList.contains("is-open");
      toggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    });

    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  var cookieBanner = document.getElementById("cookie-banner");
  var cookiePrefsPanel = document.getElementById("cookie-prefs-panel");

  function readConsent() {
    try {
      var raw = window.localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function writeConsent(essentialOnly) {
    try {
      window.localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({
          essentialOnly: Boolean(essentialOnly),
          at: new Date().toISOString(),
        })
      );
    } catch (e) {
      /* ignore quota / private mode */
    }
  }

  function hideCookieBanner() {
    if (cookieBanner) {
      cookieBanner.hidden = true;
      cookieBanner.setAttribute("aria-hidden", "true");
    }
    if (cookiePrefsPanel) {
      cookiePrefsPanel.hidden = true;
    }
    document.body.classList.remove("cookie-banner-open");
  }

  function showCookieBanner(showPrefs) {
    if (!cookieBanner) return;
    cookieBanner.hidden = false;
    cookieBanner.setAttribute("aria-hidden", "false");
    document.body.classList.add("cookie-banner-open");
    if (cookiePrefsPanel) {
      cookiePrefsPanel.hidden = !showPrefs;
    }
  }

  if (cookieBanner) {
    if (readConsent()) {
      hideCookieBanner();
    } else {
      showCookieBanner(false);
    }

    cookieBanner.addEventListener("click", function (e) {
      var t = e.target;
      if (!(t instanceof Element)) return;
      var btn = t.closest("[data-cookie-action]");
      if (!btn) return;
      var action = btn.getAttribute("data-cookie-action");
      if (action === "accept-all") {
        writeConsent(false);
        hideCookieBanner();
      }
      if (action === "essential-only") {
        writeConsent(true);
        hideCookieBanner();
      }
      if (action === "toggle-prefs") {
        var open = cookiePrefsPanel && cookiePrefsPanel.hidden;
        if (cookiePrefsPanel) cookiePrefsPanel.hidden = !open;
      }
    });

    document.querySelectorAll('[data-open="cookie-settings"]').forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        showCookieBanner(true);
        var first = cookieBanner.querySelector("button, a[href]");
        if (first) first.focus();
      });
    });
  }

  var legalModals = document.querySelectorAll(".legal-modal");
  var lastFocus = null;

  function openLegalModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("legal-modal-open");
    var closeBtn = modal.querySelector(".legal-modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeLegalModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".legal-modal:not([hidden])")) {
      document.body.classList.remove("legal-modal-open");
    }
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
    lastFocus = null;
  }

  document.querySelectorAll("[data-legal-open]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var id = trigger.getAttribute("data-legal-open");
      if (id) openLegalModal(id);
    });
  });

  legalModals.forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      var t = e.target;
      if (t === modal || (t instanceof Element && t.hasAttribute("data-legal-close"))) {
        closeLegalModal(modal);
      }
    });
    modal.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLegalModal(modal);
      }
    });
  });
})();
