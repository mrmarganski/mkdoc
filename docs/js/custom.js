document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Mermaid Initialization ---
    if (typeof mermaid !== "undefined") {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'dark',
            securityLevel: 'loose',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
            }
        });
    }

    // --- 2. Existing Custom Copy Button Logic ---
    const codeContainers = document.querySelectorAll('.code-container');
    
    codeContainers.forEach(container => {
      const codeBlock = container.querySelector('pre code');
      const copyButton = container.querySelector('.custom-copy-button.sleek');
  
      if (codeBlock && copyButton) {
        copyButton.addEventListener('click', function() {
          const codeText = codeBlock.innerText;
  
          navigator.clipboard.writeText(codeText)
            .then(() => {
              const originalText = this.innerText;
              this.innerText = 'Copied!';
              setTimeout(() => {
                this.innerText = originalText;
              }, 1500);
            })
            .catch(err => {
              console.error('Failed to copy text: ', err);
              this.innerText = 'Error';
              setTimeout(() => {
                this.innerText = 'Copy';
              }, 1500);
            });
        });
      }
    });
});
