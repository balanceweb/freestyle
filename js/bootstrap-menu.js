document.addEventListener("DOMContentLoaded", () => {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  if (!navbarCollapse) return;

  /* Overlay */
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

  /* Bootstrap events */
  navbarCollapse.addEventListener("shown.bs.collapse", openMenu);
  navbarCollapse.addEventListener("hidden.bs.collapse", closeMenu);

  /* Click on overlay */
  overlay.addEventListener("click", () => {
    bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
  });

  /* Click on menu item */
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
