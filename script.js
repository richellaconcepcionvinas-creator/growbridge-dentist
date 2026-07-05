// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Before / after slider
const baFrame = document.querySelector('.ba-frame');
const baDivider = document.getElementById('baDivider');
const baAfter = document.getElementById('baAfter');
let dragging = false;

function setSlider(percent) {
  percent = Math.min(100, Math.max(0, percent));
  baAfter.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  baDivider.style.left = `${percent}%`;
}

function positionFromEvent(e) {
  const rect = baFrame.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  return ((clientX - rect.left) / rect.width) * 100;
}

baDivider.addEventListener('mousedown', () => dragging = true);
baDivider.addEventListener('touchstart', () => dragging = true);
window.addEventListener('mouseup', () => dragging = false);
window.addEventListener('touchend', () => dragging = false);
window.addEventListener('mousemove', e => { if (dragging) setSlider(positionFromEvent(e)); });
window.addEventListener('touchmove', e => { if (dragging) setSlider(positionFromEvent(e)); });
baFrame.addEventListener('click', e => setSlider(positionFromEvent(e)));

// Services carousel
const track = document.getElementById('serviceCards');
document.getElementById('prevService').addEventListener('click', () => {
  track.scrollBy({ left: -200, behavior: 'smooth' });
});
document.getElementById('nextService').addEventListener('click', () => {
  track.scrollBy({ left: 200, behavior: 'smooth' });
});

// Doctor flip cards
document.querySelectorAll('.doctor-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
