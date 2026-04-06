function renderPantherFlowchart() {
    if (typeof mermaid !== "undefined") {
        mermaid.initialize({ 
            startOnLoad: true, 
            theme: 'dark',
            securityLevel: 'loose'
        });
        // This command forces Mermaid to scan specifically for <div> tags with class "mermaid"
        mermaid.contentLoaded();
    }
}

// Material Theme "Instant" Navigation Support
if (typeof document$ !== "undefined") {
    document$.subscribe(function() {
        renderPantherFlowchart();
    });
} else {
    document.addEventListener('DOMContentLoaded', renderPantherFlowchart);
}

/* --- Keep your Copy Button Logic below this line --- */

// --- 2. Filtered Copy Button Logic ---
function initCopyButtons() {
    const codeContainers = document.querySelectorAll('.code-container');
    
    codeContainers.forEach(container => {
        // CHECK: If this container is for a Mermaid diagram, SKIP IT
        if (container.querySelector('.mermaid')) {
            return; // Don't add a copy button here
        }

        const codeBlock = container.querySelector('pre code');
        const copyButton = container.querySelector('.custom-copy-button.sleek');
  
        if (codeBlock && copyButton && !copyButton.dataset.listener) {
            copyButton.dataset.listener = "true";
            copyButton.addEventListener('click', function() {
                navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                    const originalText = this.innerText;
                    this.innerText = 'Copied!';
                    setTimeout(() => { this.innerText = originalText; }, 1500);
                });
            });
        }
    });
}

// --- 3. Theme Triggers (Material Theme Safe) ---
if (typeof document$ !== "undefined") {
    document$.subscribe(function() {
        initMermaid();
        initCopyButtons();
    });
} else {
    document.addEventListener('DOMContentLoaded', function() {
        initMermaid();
        initCopyButtons();
    });
}
