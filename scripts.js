const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = newsletterForm.email.value.trim();
    if (!email) return;

    const notice = document.createElement('div');
    notice.textContent = 'تم الاشتراك بنجاح! سنرسل لك أحدث العروض قريبًا.';
    notice.className = 'card';
    notice.style.marginTop = '10px';
    newsletterForm.after(notice);
    newsletterForm.reset();
  });
}
