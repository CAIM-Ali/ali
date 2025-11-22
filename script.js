const form = document.querySelector('.contact-form');
const buttons = document.querySelectorAll('.icon-btn');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  alert(`شكرًا ${name || 'لك'}، تم استلام رسالتك وسيتم الرد قريبًا.`);
  form.reset();
});

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('added');
    btn.textContent = '✓';
    setTimeout(() => {
      btn.textContent = '+';
      btn.classList.remove('added');
    }, 1200);
  });
});
