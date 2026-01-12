// Dynamic DTS Generator
function updateDTS() {
    const dtsElement = document.getElementById('dts-timestamp');
    if (!dtsElement) return;

    const now = new Date();
    const utcStr = now.toISOString().replace('T', ' ').split('.')[0] + ' UTC';
    dtsElement.textContent = utcStr;
}

// Initial update and optional interval for live updates
document.addEventListener('DOMContentLoaded', () => {
    updateDTS();
    // Update every second to keep it fresh
    setInterval(updateDTS, 1000);
});
