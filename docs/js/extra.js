function zoomCode(element) {
  const modal = document.createElement('div');
  modal.classList.add('zoom-modal');

  const overlay = document.createElement('div');
  overlay.classList.add('zoom-overlay');
  modal.appendChild(overlay);

  const zoomedContainer = document.createElement('div');
  zoomedContainer.classList.add('zoomed-code-container');
  modal.appendChild(zoomedContainer);

  const originalCode = element.querySelector('code');
  const codeText = originalCode.innerText;
  const languageClass = originalCode.className || 'language-javascript'; // Fallback to JS

  const newPre = document.createElement('pre');
  const newCode = document.createElement('code');
  newCode.className = languageClass; // Use the original language class
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

  // Apply syntax highlighting to the zoomed block
  if (typeof hljs !== 'undefined') {
    hljs.highlightElement(newCode);
  }
}

// Highlight all code blocks on page load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof hljs !== 'undefined') {
    hljs.configure({ languages: ['javascript', 'java'] }); // Optional: for better auto-detection
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }
});