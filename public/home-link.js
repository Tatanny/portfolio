document.querySelectorAll("[data-home-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (window.location.protocol === "file:") {
      return;
    }

    event.preventDefault();
    window.location.href = link.dataset.cleanHref || "./";
  });
});
