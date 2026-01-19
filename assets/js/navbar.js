document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar.fixed-top");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (!navbar || !navbarCollapse) return;

  /* =========================
     Navbar height (auto)
     ========================= */
  const setNavbarHeight = () => {
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${navbar.offsetHeight}px`,
    );
  };

  setNavbarHeight();
  window.addEventListener("resize", setNavbarHeight);

  /* =========================
     Overlay
     ========================= */
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);

  const openMenu = () => {
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  };

  navbarCollapse.addEventListener("shown.bs.collapse", openMenu);
  navbarCollapse.addEventListener("hidden.bs.collapse", closeMenu);

  /* Click on overlay */
  overlay.addEventListener("click", () => {
    bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
  });

  /* Click outside navbar (fallback) */
  document.addEventListener("click", (e) => {
    if (
      navbarCollapse.classList.contains("show") &&
      !navbar.contains(e.target)
    ) {
      bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
    }
  });

  /* Click on menu link */
  document.querySelectorAll(".navbar-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
    });
  });

  /* ESC */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
    }
  });
});
