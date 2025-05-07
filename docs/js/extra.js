function zoomCode(element) {
  // Create the modal structure
  const modal = document.createElement('div');
  modal.classList.add('zoom-modal');

  // Create the overlay
  const overlay = document.createElement('div');
  overlay.classList.add('zoom-overlay');
  modal.appendChild(overlay);

  // Create the zoomed code container
  const zoomedContainer = document.createElement('div');
  zoomedContainer.classList.add('zoomed-code-container');
  modal.appendChild(zoomedContainer);

  // Clone the copy button
  const copyBtn = element.parentElement.querySelector('.copy-btn').cloneNode(true);
  zoomedContainer.appendChild(copyBtn);

  // Clone the code block (pre and code elements)
  const clonedPre = element.cloneNode(true);
  // Remove the onclick event to prevent recursive zooming
  clonedPre.removeAttribute('onclick');
  zoomedContainer.appendChild(clonedPre);

  // Add the modal to the body
  document.body.appendChild(modal);

  // Close the modal when clicking the overlay
  overlay.addEventListener('click', () => {
      modal.remove();
  });

  // Ensure the copy button works in the modal
  copyBtn.onclick = () => copyCode(copyBtn);
}

// Ensure copyCode function works (if not already defined)
function copyCode(button) {
  const code = button.nextElementSibling.querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
      button.textContent = '✅ Copied!';
      setTimeout(() => {
          button.textContent = '📋 Copy';
      }, 2000);
  });
}