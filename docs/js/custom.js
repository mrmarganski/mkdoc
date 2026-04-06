// Function to initialize and run Mermaid with a retry fallback
function startMermaid() {
    if (typeof mermaid !== "undefined") {
        mermaid.initialize({ 
            startOnLoad: true, 
            theme: 'dark',
            securityLevel: 'loose'
        });
        // This forces a re-render for Material's instant-loading
        mermaid.run();
    } else {
        // If mermaid isn't ready yet (CDN delay), try again in 200ms
        setTimeout(startMermaid, 200);
    }
}

// Main logic runner
function initCustomScripts() {
    // 1. Initialize Mermaid
    startMermaid();

    // 2. Custom Copy Button Logic
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
}

// --- Theme Triggers ---

// Support for Material theme's "instant" navigation
if (typeof document$ !== "undefined") {
    document$.subscribe(function() {
        initCustomScripts();
    });
}

// Support for initial/standard page load
document.addEventListener('DOMContentLoaded', initCustomScripts);
