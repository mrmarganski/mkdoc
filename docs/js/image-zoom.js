document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img.zoomable");
    images.forEach(img => {
      img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("zoom-overlay");
  
        const zoomedImg = document.createElement("img");
        zoomedImg.src = img.src;
        zoomedImg.classList.add("zoomed-image");
  
        overlay.appendChild(zoomedImg);
        document.body.appendChild(overlay);
  
        overlay.addEventListener("click", () => {
          document.body.removeChild(overlay);
        });
      });
    });
  });
  