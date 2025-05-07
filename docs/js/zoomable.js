document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.md-typeset img');
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  document.body.appendChild(overlay);

  images.forEach((img) => {
    img.addEventListener('click', () => {
      const clonedImg = img.cloneNode();
      clonedImg.className = 'zoomed';
      overlay.innerHTML = '';
      overlay.appendChild(clonedImg);
      overlay.classList.add('active');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
});