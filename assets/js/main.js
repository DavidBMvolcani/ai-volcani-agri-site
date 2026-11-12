// Mobile menu, language preference and footer year.
(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Clear the language preference stored by an earlier version of this script.
  try { localStorage.removeItem("agri-ai-lang"); } catch (e) {}

  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
