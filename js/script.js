async function copyToClipboard(text) {
    const informer  = document.querySelector('.js-informer');

    try {
        await navigator.clipboard.writeText(text);

        informer.style.opacity = 1;
        setTimeout(() => {
            informer.style.opacity = 0;
        }, 1000);
    } catch (err) {
        console.error('Ошибка при копировании текста в буфер обмена:', err);
        informer.innerHTML = 'Возникла ошибка, обновите страницу';
        informer.style.opacity = 1;
        setTimeout(() => {
            informer.style.opacity = 0;
        }, 1000);
    }
}