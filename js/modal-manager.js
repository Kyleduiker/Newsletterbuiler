const modalManager = {
    show: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('modal-overlay--show');
    },
    
    close: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('modal-overlay--show');
            // Handle form reset and cleanup
        }
    }
};

// Export modal manager
window.modalManager = modalManager;
