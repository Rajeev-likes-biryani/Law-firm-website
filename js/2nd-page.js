const viewOnceElements = document.querySelectorAll(
  '.second-page-content, .second-page-image-container, .Page-3-content, .bullet, .header-left-section, .header-right-section'
);

const revealOnce = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.15
});

viewOnceElements.forEach((element) => {
  element.classList.add('view-once');
  revealOnce.observe(element);
});
