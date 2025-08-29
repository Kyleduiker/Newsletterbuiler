// Utility functions
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function formatEventTime(startTime, endTime) {
    // Time formatting logic
}

function formatEventDate(dateString) {
    // Date formatting logic
}

// Export utilities
window.utils = {
    showToast,
    formatEventTime,
    formatEventDate
};
