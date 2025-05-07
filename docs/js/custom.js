function copyCode(button) {
  const code = button.parentElement.querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = '✅ Copied!';
    setTimeout(() => button.innerText = '📋 Copy', 2000);
  });
}

function zoomCode(preElement) {
  const modal = document.createElement('div');
  modal.className = 'zoom-modal';

  const codeText = preElement.querySelector('code').innerText;
  const escaped = codeText.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  modal.innerHTML = `
    <div class="zoom-overlay" onclick="this.parentNode.remove()"></div>
    <div class="zoomed-code-container">
      <button class="copy-btn" onclick="navigator.clipboard.writeText(\`${codeText.replace(/`/g, "\\`")}\`).then(() => { this.innerText = '✅ Copied!'; setTimeout(() => this.innerText = '📋 Copy', 2000); })">📋 Copy</button>
      <pre><code class="language-javascript">${escaped}</code></pre>
    </div>
  `;
  document.body.appendChild(modal);
}
