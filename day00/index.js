let isDarkMode = false;

function toggleBtn() {
    const body = document.body;
    const currentTheme=document.getElementById("theme");
    if (!isDarkMode) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        currentTheme.textContent="Black";
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        currentTheme.textContent="White";
    }

    isDarkMode = !isDarkMode;
}

