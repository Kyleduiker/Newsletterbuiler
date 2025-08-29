// Global state
const newsletterData = {
    design: {
        bannerStyle: 'mountains',
        headerFont: "'Playfair Display', serif",
        bodyFont: "'Montserrat', sans-serif",
        hideCustomBannerText: false,
        colors: {
            headerText: '#333333',
            bodyText: '#555555',
            accent: '#f39c12',
            background: '#f8f9fa'
        },
        // Continue with rest of data structure
    },
    // Other data sections
};

// Season configurations
const SEASONS = {
    january: {
        title: 'JANUARY NEWSLETTER',
        subtitle: 'NEW BEGINNINGS',
        personalMessage: 'Happy New Year! A fresh start brings new opportunities...',
        tips: ['🔧 Replace furnace filter', /* other tips */]
    },
    // Continue with other seasons
};

// Export data structure and seasons
window.newsletterData = newsletterData;
window.SEASONS = SEASONS;
