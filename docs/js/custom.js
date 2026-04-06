// Function to handle the drawing
function drawPantherCharts() {
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({ 
      startOnLoad: false, 
      theme: 'dark',
      securityLevel: 'loose'
    });
    // Force mermaid to find any elements with class "mermaid" and render them
    mermaid.run();
  }
}

// 1. Trigger for initial page load
document.addEventListener("DOMContentLoaded", function() {
  drawPantherCharts();
});

// 2. Trigger for Material Theme "Instant" Navigation
// This is the CRITICAL part for the live site
if (typeof document$ !== "undefined") {
  document$.subscribe(function() {
    drawPantherCharts();
  });
}
