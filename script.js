const steps = [...document.querySelectorAll('[data-step]')];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function updateStairTransform() {
  const viewportH = window.innerHeight || 1;

  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();
    const progress = clamp(1 - rect.top / viewportH, 0, 1.15);
    const depthShift = (index - progress) * -38;
    const lift = (index - progress) * 28;
    const rotateX = (0.42 - progress) * 14;
    const rotateY = (index % 2 === 0 ? -1 : 1) * (0.3 - progress) * 6;

    step.style.transform = `translate3d(0, ${lift}px, ${depthShift}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    step.style.filter = `brightness(${0.75 + progress * 0.32}) saturate(${0.95 + progress * 0.2})`;
  });
}

updateStairTransform();
window.addEventListener('scroll', updateStairTransform, { passive: true });
window.addEventListener('resize', updateStairTransform);
