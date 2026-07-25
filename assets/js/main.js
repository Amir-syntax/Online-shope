document.addEventListener("DOMContentLoaded", () => {
  const row = document.querySelector(".blog .row");
  const cards = document.querySelectorAll(".blog .col-blog");

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;
  let interval;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 20;

    row.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
  }

  function nextSlide() {
    index++;

    if (index > cards.length - 4) {
      index = 0;
    }

    updateSlider();
  }

  function prevSlide() {
    index--;

    if (index < 0) {
      index = cards.length - 4;
    }

    updateSlider();
  }

  function startAuto() {
    interval = setInterval(nextSlide, 3000);
  }

  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  window.addEventListener("resize", updateSlider);

  startAuto();
});
