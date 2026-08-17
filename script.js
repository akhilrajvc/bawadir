document.querySelectorAll('.menu-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const nav = button.nextElementSibling;
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});

document.querySelectorAll('.placeholder').forEach(a => a.addEventListener('click', e => e.preventDefault()));

if (typeof SITE_CONFIG !== 'undefined') {
  // Centralized contact configuration: changing config.js updates the site's contact links.
  const phoneLinks = [...document.querySelectorAll('a[href^="tel:"]')];
  phoneLinks.forEach((link, i) => {
    const phone = SITE_CONFIG.phone[i % SITE_CONFIG.phone.length];
    link.href = 'tel:' + phone.replace(/[^0-9+]/g, '');
    link.textContent = phone;
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = 'mailto:' + SITE_CONFIG.email;
    link.textContent = SITE_CONFIG.email;
  });

  const addressHtml = SITE_CONFIG.address.join('<br>');
  document.querySelectorAll('.contact-item p').forEach(el => el.innerHTML = addressHtml);
  document.querySelectorAll('.footer-grid > div:nth-child(3) p').forEach(el => el.innerHTML = addressHtml);

  const socialMap = SITE_CONFIG.social || {};
  document.querySelectorAll('.social-placeholders a').forEach(a => {
    const key = a.textContent.trim().toLowerCase();
    if (socialMap[key]) a.href = socialMap[key];
    if (!socialMap[key] || socialMap[key] === '#') a.addEventListener('click', e => e.preventDefault());
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
