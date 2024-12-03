const button = document.getElementById('theme-toggle');
const root = document.documentElement;

button.addEventListener('click', () => {
    // Check the current background color
    if (root.classList.contains('dark-background')) {
        root.classList.remove('dark-background');
        root.classList.add('light-background');
        button.textContent = 'Switch to Dark Mode';
    } else {
        root.classList.remove('light-background');
        root.classList.add('dark-background');
        button.textContent = 'Switch to Light Mode';
    }
});