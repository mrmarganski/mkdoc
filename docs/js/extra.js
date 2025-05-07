function zoomCode(element) {
  // Create modal container
  const modal = document.createElement('div');
  modal.classList.add('zoom-modal');

  // Overlay
  const overlay = document.createElement('div');
  overlay.classList.add('zoom-overlay');
  modal.appendChild(overlay);

  // Zoomed code container
  const zoomedContainer = document.createElement('div');
  zoomedContainer.classList.add('zoomed-code-container');
  modal.appendChild(zoomedContainer);

  // Get original code content as plain text
  const codeText = element.querySelector('code').innerText;

  // Create new pre/code block with proper class
  const newPre = document.createElement('pre');
  const newCode = document.createElement('code');
  newCode.className = 'language-javascript';
  newCode.textContent = codeText;
  newPre.appendChild(newCode);
  zoomedContainer.appendChild(newPre);

  // Copy button
  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.textContent = '📋 Copy';
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(codeText).then(() => {
      copyBtn.textContent = '✅ Copied!';
      setTimeout(() => {
        copyBtn.textContent = '📋 Copy';
      }, 2000);
    });
  };
  zoomedContainer.appendChild(copyBtn);

  // Append modal to document
  document.body.appendChild(modal);

  // Remove modal when overlay is clicked
  overlay.addEventListener('click', () => {
    modal.remove();
  });

  // OPTIONAL: Re-apply syntax highlighting (if using highlight.js)
  if (typeof hljs !== 'undefined') {
    hljs.highlightElement(newCode);
  }
}