document.addEventListener('DOMContentLoaded', function() {
    const codeContainers = document.querySelectorAll('.code-container');
  
    codeContainers.forEach(container => {
      const codeBlock = container.querySelector('pre code');
      const copyButton = container.querySelector('.custom-copy-button.sleek');
  
      if (codeBlock && copyButton) {
        copyButton.addEventListener('click', function() {
          const codeText = codeBlock.innerText;
  
          navigator.clipboard.writeText(codeText)
            .then(() => {
              // Provide feedback to the user
              const originalText = this.innerText;
              this.innerText = 'Copied!';
              setTimeout(() => {
                this.innerText = originalText;
              }, 1500); // Revert text after 1.5 seconds
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