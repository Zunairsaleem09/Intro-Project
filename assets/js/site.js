document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const navbarItems = document.querySelector('.navbar-right-content');

    toggleBtn.addEventListener('click', function () {
        navbarItems.classList.toggle('show'); // Toggle the 'show' class on navbar items
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const iconDiv = document.querySelector('.toggle-btn-icon ');

    toggleBtn.addEventListener('click', function () {
        iconDiv.classList.toggle('toggle-click-rotate'); // Toggle the class on the icon div
    });
});

// Language options
const languages = ['English', '中文', '日本語', '한국어'];

function createLanguageOptions() {
    const languageTooltipContent = document.getElementById('languageTooltipContent');
    languageTooltipContent.innerHTML = '';
    languages.forEach(language => {
        const languageOption = document.createElement('div');
        languageOption.classList.add('language-option');
        languageOption.textContent = language;
        languageOption.addEventListener('mouseover', function() { // Change event to mouseover
            changeLanguage(language);
            toggleLanguageTooltip();
        });
        languageTooltipContent.appendChild(languageOption);
    });
}

function changeLanguage(language) {
    document.querySelector('.lan-options').textContent = language;
    // Add logic to change the language on your site
    // For demonstration purposes, just logging the selected language
    console.log('Selected language:', language);
}

let timer; // Variable to store the timer for hiding the tooltip

function toggleLanguageTooltip() {
    const languageTooltipContent = document.getElementById('languageTooltipContent');
    clearTimeout(timer); // Clear previous timer
    languageTooltipContent.classList.add('active'); // Show tooltip
    // Hide tooltip after 2 seconds (adjust as needed)
    timer = setTimeout(function() {
        languageTooltipContent.classList.remove('active');
    }, 2000);
}

document.getElementById('languageTooltip').addEventListener('mouseover', toggleLanguageTooltip); // Change event to mouseover

createLanguageOptions();

