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

const form = document.querySelector('.js-form');
const modal = document.querySelector('.js-modal');
const overlay = document.querySelector('.overlay');

async function onFormSubmit(e) {
    try {
        const formData = new FormData(form);

        const response = await fetch('https://formspree.io/f/mpwrprew', {
            method: 'post',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showSuccess();
        } else {
            showError();
        }
    } catch (err) {
        console.log('Произошла следующая ошибка:', err);
        showError();
    }
}

overlay.addEventListener('click', closeModal);

function showSuccess() {
    modal.classList.add('_success');
    overlay.style.display = 'block';
    form.reset();
}

function showError() {
    modal.classList.add('_error');
    overlay.style.display = 'block';
}

function closeModal() {
    modal.classList.remove('_success');
    modal.classList.remove('_error');
    overlay.style.display = 'none';
}