document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const actionBtn = document.getElementById('action-btn');
    const secretMessage = document.getElementById('secret-message');

    // 1. Переключение темной/светлой темы
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = 'Сменить тему';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = 'Вернуть светлую';
        }
    });

    // 2. Показ скрытого текста по кнопке
    actionBtn.addEventListener('click', () => {
        secretMessage.classList.toggle('hidden');
        secretMessage.classList.toggle('show');
        
        if (secretMessage.classList.contains('show')) {
            actionBtn.textContent = 'Скрыть';
        } else {
            actionBtn.textContent = 'Нажми на меня';
        }
    });
});
