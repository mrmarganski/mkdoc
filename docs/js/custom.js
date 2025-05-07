function copyCode(button) {
  const code = button.nextElementSibling.innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = '✅ Copied!';
    setTimeout(() => button.innerText = '📋 Copy', 2000);
  });
}

function zoomCode(codeElement) {
  const modal = document.createElement('div');
  modal.className = 'zoom-modal';
  modal.innerHTML = `
    <div class="zoom-overlay" onclick="this.parentNode.remove()"></div>
    <pre class="zoomed-code">${codeElement.innerText}</pre>
  `;
  document.body.appendChild(modal);
}
