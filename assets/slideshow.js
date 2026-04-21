(function () {
  const root = document.querySelector("[data-slideshow]");
  if (!root) return;

  const images = Array.from(root.querySelectorAll(".slideshow-frame img"));
  if (images.length <= 1) return;

  const prevBtn = root.querySelector("[data-prev]");
  const nextBtn = root.querySelector("[data-next]");

  let index = images.findIndex((img) => img.classList.contains("is-active"));
  if (index < 0) index = 0;

  function show(i) {
    images[index].classList.remove("is-active");
    index = (i + images.length) % images.length;
    images[index].classList.add("is-active");
  }

  function next() { show(index + 1); }
  function prev() { show(index - 1); }

  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  // Auto-advance (optional): change 4000 to whatever you want.
  const intervalMs = 4000;
  let timer = setInterval(next, intervalMs);

  // Pause on hover/focus to feel nicer
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", () => (timer = setInterval(next, intervalMs)));
})();
