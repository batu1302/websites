/* =============================================================================
   DC MOBILE CARE — UI Behaviour
   ============================================================================= */

(() => {
  "use strict";

  /* ---------- Magnetic Buttons ---------- */
  document.querySelectorAll(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
      const content = btn.querySelector("span");
      if (content) content.style.transform = `translate3d(${x * 0.15}px, ${y * 0.15}px, 0)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = `translate3d(0, 0, 0)`;
      const content = btn.querySelector("span");
      if (content) content.style.transform = `translate3d(0, 0, 0)`;
    });
  });

  /* ---------- Header: scrolled state ---------- */
  const header = document.querySelector("[data-header]");
  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.classList.toggle("is-open");
    nav?.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      menuToggle?.classList.remove("is-open");
      nav.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    })
  );

  /* =============================================================================
     BEFORE / AFTER SLIDER — buttery smooth
     • Pointer Events (mouse + touch + pen) with pointer capture
     • requestAnimationFrame to coalesce updates
     • Keyboard (←/→) accessible
     ============================================================================= */
  document.querySelectorAll("[data-ba]").forEach((slider) => {
    const handle = slider.querySelector(".ba-handle");

    let rect = slider.getBoundingClientRect();
    let pos = 50;     /* % */
    let target = 50;
    let rafId = null;
    let dragging = false;

    const refreshRect = () => { rect = slider.getBoundingClientRect(); };
    refreshRect();

    const ro = new ResizeObserver(refreshRect);
    ro.observe(slider);
    window.addEventListener("scroll", refreshRect, { passive: true });

    const apply = () => {
      slider.style.setProperty("--pos", pos + "%");
      slider.setAttribute("aria-valuenow", String(Math.round(pos)));
    };
    apply();

    const tick = () => {
      /* lerp toward target → buttery smoothing */
      const diff = target - pos;
      if (Math.abs(diff) < 0.05) {
        pos = target;
        apply();
        rafId = null;
        return;
      }
      pos += diff * 0.28;
      apply();
      rafId = requestAnimationFrame(tick);
    };

    const queueUpdate = () => {
      if (rafId == null) rafId = requestAnimationFrame(tick);
    };

    const setFromClientX = (clientX) => {
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      target = pct;
      queueUpdate();
    };

    /* Pointer events (single source of truth across mouse/touch/pen) */
    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      slider.classList.add("is-active");
      slider.setPointerCapture?.(e.pointerId);
      refreshRect();
      setFromClientX(e.clientX);
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!dragging) return;
      setFromClientX(e.clientX);
    };

    const onPointerUp = (e) => {
      if (!dragging) return;
      dragging = false;
      slider.classList.remove("is-active");
      try { slider.releasePointerCapture?.(e.pointerId); } catch {}
    };

    slider.addEventListener("pointerdown", onPointerDown);
    slider.addEventListener("pointermove", onPointerMove);
    slider.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("pointercancel", onPointerUp);
    slider.addEventListener("lostpointercapture", onPointerUp);

    /* Click anywhere → snap toward that x (also covered by pointerdown) */
    handle?.addEventListener("click", (e) => e.preventDefault());

    /* Keyboard support */
    slider.addEventListener("keydown", (e) => {
      const step = e.shiftKey ? 10 : 2;
      if (e.key === "ArrowLeft")  { target = Math.max(0,   target - step); queueUpdate(); e.preventDefault(); }
      if (e.key === "ArrowRight") { target = Math.min(100, target + step); queueUpdate(); e.preventDefault(); }
      if (e.key === "Home")       { target = 0;   queueUpdate(); e.preventDefault(); }
      if (e.key === "End")        { target = 100; queueUpdate(); e.preventDefault(); }
    });

    /* Subtle "first impression" wiggle when entering viewport */
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(slider);
          let step = 0;
          const sequence = [50, 28, 72, 50];
          const next = () => {
            if (step >= sequence.length) return;
            target = sequence[step++];
            queueUpdate();
            setTimeout(next, 600);
          };
          setTimeout(next, 700);
        });
      }, { threshold: 0.4 });
      io.observe(slider);
    }
  });

  /* =============================================================================
     WIREFRAME CAR — interactive zones
     ============================================================================= */
  const stage = document.querySelector("[data-explore]");
  if (stage) {
    const zones = stage.querySelectorAll(".zone");
    const cards = stage.querySelectorAll(".zone-card");
    let activeKey = null;

    const isMobile = () => window.matchMedia("(max-width: 760px)").matches;

    const showCard = (key) => {
      if (isMobile()) return;
      cards.forEach((c) => c.classList.toggle("is-visible", c.dataset.card === key));
      zones.forEach((z) => z.classList.toggle("is-active", z.dataset.zone === key));
      activeKey = key;
    };

    const hideAll = () => {
      cards.forEach((c) => c.classList.remove("is-visible"));
      zones.forEach((z) => z.classList.remove("is-active"));
      activeKey = null;
    };

    zones.forEach((zone) => {
      const key = zone.dataset.zone;
      zone.addEventListener("pointerenter", () => showCard(key));
      zone.addEventListener("pointerleave", () => {
        if (activeKey === key) hideAll();
      });
      zone.addEventListener("focus", () => showCard(key));
      zone.addEventListener("blur",  () => { if (activeKey === key) hideAll(); });
      zone.addEventListener("click", (e) => {
        e.preventDefault();
        showCard(key);
      });
    });

    /* Auto-cycle once the user enters the section so the feature is discoverable */
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || isMobile()) return;
          io.unobserve(stage);
          const order = ["lack", "felgen", "lenkrad", "interieur"];
          let i = 0;
          const cycle = () => {
            if (i >= order.length) { hideAll(); return; }
            showCard(order[i++]);
            setTimeout(cycle, 1300);
          };
          setTimeout(cycle, 500);
        });
      }, { threshold: 0.35 });
      io.observe(stage);
    }
  }

  /* =============================================================================
     FLOATING CTA — show after the user scrolls past the hero
     ============================================================================= */
  const fab = document.querySelector("[data-floating-cta]");
  const hero = document.getElementById("hero");
  if (fab && hero) {
    const showFab = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      fab.classList.toggle("is-visible", heroBottom < 80);
    };
    showFab();
    window.addEventListener("scroll", showFab, { passive: true });
  }

  /* =============================================================================
     REVEAL ON SCROLL
     ============================================================================= */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        ro.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => ro.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* =============================================================================
     LIVE MAP CHECKPOINTS
     ============================================================================= */
  const areaChips = document.querySelectorAll(".area-chips li");
  if (areaChips.length) {
    let current = 0;
    const cycleCheckpoints = () => {
      areaChips.forEach(c => {
        c.style.borderColor = "";
        c.style.background = "";
        c.style.transform = "";
      });
      
      const chip = areaChips[current];
      if (chip) {
        chip.style.borderColor = "rgba(255,255,255,0.6)";
        chip.style.background = "rgba(255,255,255,0.1)";
        chip.style.transform = "translateY(-4px)";
      }
      
      current = (current + 1) % areaChips.length;
      setTimeout(cycleCheckpoints, 2500);
    };
    cycleCheckpoints();
  }

  /* =============================================================================
     FOOTER YEAR
     ============================================================================= */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* =============================================================================
     COOKIE BANNER
     ============================================================================= */
  const cookieBanner = document.querySelector("[data-cookie-banner]");
  const acceptBtn = document.querySelector("[data-cookie-accept]");

  if (cookieBanner && acceptBtn) {
    if (!localStorage.getItem("cookies-accepted")) {
      setTimeout(() => {
        cookieBanner.classList.add("is-visible");
      }, 2000);
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookies-accepted", "true");
      cookieBanner.classList.remove("is-visible");
    });
  }

  /* =============================================================================
     LEGAL MODALS
     ============================================================================= */
  const modalOverlay = document.querySelector("[data-modal-overlay]");
  const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
  const modalCloseBtns = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");

  const openModal = (id) => {
    const modal = document.getElementById(`modal-${id}`);
    if (!modal) return;
    modalOverlay?.classList.add("is-visible");
    modal.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modals.forEach(m => m.classList.remove("is-visible"));
    modalOverlay?.classList.remove("is-visible");
    document.body.style.overflow = "";
  };

  modalTriggers.forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.modalTrigger));
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  modalOverlay?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();
