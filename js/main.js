window.addEventListener('load', function() {
    if(localStorage.getItem('light-mode') !== null) {
        switchTheme();
        document.getElementById('theme-switch').innerHTML = 'Dark Mode';
    }
});

document.getElementById('theme-switch').addEventListener('click', function() {
    setThemeHistory();
    switchTheme();
});

document.addEventListener('DOMContentLoaded', function() {
    var paths = window.location.pathname.split('/').filter(n => n);
    if(paths.length > 1 && paths[0] === 'entries') {
        document.querySelector('footer').style.cssText = "position:relative;margin-top:25px;margin-bottom:15px;";
    }
}, false);

function setThemeHistory() {
    if(localStorage.getItem('light-mode') === null) {
        localStorage.setItem('light-mode', true);
        document.getElementById('theme-switch').innerHTML = 'Dark Mode';
    } else {
        localStorage.removeItem('light-mode');
        document.getElementById("theme-switch").innerHTML = 'Light Mode';
    }
}

function switchTheme() {
    var cup_fill = document.querySelector('.fillin');
    if(cup_fill !== null) cup_fill.style.display = 'none';

    document.body.classList.toggle('dark-mode');
    // Timeout to fix weird css effect
    setTimeout(function() {
        if(cup_fill !== null) cup_fill.style.display = 'block';
    }, 100);
}
