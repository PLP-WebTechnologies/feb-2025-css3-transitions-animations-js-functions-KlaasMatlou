function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', () => {
    animateBtn.classList.add('clicked');

    setTimeout(() => {
        animateBtn.classList.remove('clicked');
    }, 2000);

    let count = localStorage.getItem('clickCount') || 0;
    count++;
    localStorage.setItem('clickCount', count);
    console.log(`Button clicked ${count} times`);
});

window.onload = () => {
    applyTheme();
    const storedCount = localStorage.getItem('clickCount');
    if (storedCount) {
        console.log(`Welcome back! You've clicked the button ${storedCount} times.`);
    }
};