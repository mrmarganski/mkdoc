document.addEventListener('DOMContentLoaded', function() {
  const zoomableImages = document.querySelectorAll('.zoomable');
  const overlay = document.createElement('div');
  overlay.classList.add('zoomable-overlay');
  document.body.appendChild(overlay);

  zoomableImages.forEach(img => {
    img.addEventListener('click', function() {
      this.classList.toggle('zoomed');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll', this.classList.contains('zoomed'));
    });
  });

  overlay.addEventListener('click', function() {
    document.querySelector('.zoomable.zoomed')?.classList.remove('zoomed');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});