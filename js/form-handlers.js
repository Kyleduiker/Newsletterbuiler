// Form handling functions
function handleFormChange(fieldId, value) {
    const fieldMap = {
        'bannerStyle': 'design.bannerStyle',
        'headerFont': 'design.headerFont',
        // Continue mapping
    };
    
    if (fieldMap[fieldId]) {
        const keys = fieldMap[fieldId].split('.');
        let obj = newsletterData;
        for (let i = 0; i < keys.length - 1; i++) {
            obj = obj[keys[i]];
        }
        obj[keys[keys.length - 1]] = value;
    }
    
    // Handle specific field logic
    updatePreview();
}

// Handle hex color input changes
function handleColorHexChange(colorPickerId, fieldId, hexValue) {
    if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
        const colorPicker = document.getElementById(colorPickerId);
        if (colorPicker) {
            colorPicker.value = hexValue;
        }
        handleFormChange(fieldId, hexValue);
    }
}

// Export functions
window.formHandlers = {
    handleFormChange,
    handleColorHexChange
};
