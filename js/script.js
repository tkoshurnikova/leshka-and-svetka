async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Текст успешно скопирован в буфер обмена!');
        return true;
    } catch (err) {
        console.error('Ошибка при копировании текста в буфер обмена:', err);
        return false;
    }
}