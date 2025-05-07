function zoomCode(element) {
  const modal = document.createElement('div');
  modal.classList.add('zoom-modal');

  const overlay = document.createElement('div');
  overlay.classList.add('zoom-overlay');
  modal.appendChild(overlay);

  const zoomedContainer = document.createElement('div');
  zoomedContainer.classList.add('zoomed-code-container');
  modal.appendChild(zoomedContainer);

  const codeText = element.querySelector('code').innerText;

  const newPre = document.createElement('pre');
  const newCode = document.createElement('code');
  newCode.className = 'language-java'; // change this dynamically if needed
  newCode.textContent = codeText;
  newPre.appendChild(newCode);
  zoomedContainer.appendChild(newPre);

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

  document.body.appendChild(modal);

  overlay.addEventListener('click', () => {
    modal.remove();
  });

  // Apply syntax highlighting if highlight.js is loaded
  if (typeof hljs !== 'undefined') {
    hljs.highlightElement(newCode);
  }
}
