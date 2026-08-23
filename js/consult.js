const viewOnceElements = document.querySelectorAll(
  '.consult-page-content, .consult-page-form'
);

const revealOnce = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.style.animationTimeline = 'auto';
    entry.target.style.animationRange = 'normal';
    entry.target.style.animationPlayState = 'running';
    observer.unobserve(entry.target);
  });
});

viewOnceElements.forEach((element) => {
  element.style.animationDuration = '1s';
  element.style.animationPlayState = 'paused';
  revealOnce.observe(element);
});
