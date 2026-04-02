/* ================================================
   OSSUA — main.js
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── PAGE NAVIGATION ──────────────────────────────
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('[data-page]').forEach(el => {
      el.classList.toggle('active', el.dataset.page === id);
    });
  }

  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showPage(el.dataset.page);
    });
  });

  // ── STICKY NAV ───────────────────────────────────
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── MENU TABS ─────────────────────────────────────
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.menu-tabs').querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ── RESERVATION FORM ─────────────────────────────
  const resForm = document.getElementById('reservationForm');
  if (resForm) {
    resForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = resForm.querySelector('.res-submit');
      btn.textContent = '✦ Reservation Confirmed!';
      btn.style.background = '#4CAF50';
      setTimeout(() => {
        btn.textContent = 'Confirm Reservation ✦';
        btn.style.background = '#D4A96A';
        resForm.reset();
      }, 4000);
    });
  }

  // ── INIT ─────────────────────────────────────────
  showPage('home');
});
