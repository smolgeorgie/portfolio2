/* krabbels.js — simple guestbook stored in localStorage */

(function () {
  const STORAGE_KEY = 'hyves_krabbels';

  function loadKrabbels() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveKrabbels(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function formatDate(isoString) {
    const d = new Date(isoString);
    return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function renderKrabbels(container) {
    const list = loadKrabbels();
    if (!container) return;
    if (list.length === 0) {
      container.innerHTML = '<p style="font-size:0.7rem;color:#888;padding:0.25rem 0">Nog geen krabbels. Wees de eerste!</p>';
      return;
    }
    container.innerHTML = list
      .slice()
      .reverse()
      .map(k => `
        <div class="krabbel-item">
          <strong>${escapeHtml(k.name)}</strong>
          <span class="krabbel-msg">${escapeHtml(k.message)}</span>
          <time>${formatDate(k.date)}</time>
        </div>
      `)
      .join('');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function initKrabbels() {
    const form = document.getElementById('krabbels-form');
    const listEl = document.getElementById('krabbels-list');

    renderKrabbels(listEl);

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nameInput = form.querySelector('[name="krabbel-name"]');
      const msgInput = form.querySelector('[name="krabbel-msg"]');

      const name = (nameInput.value || '').trim();
      const message = (msgInput.value || '').trim();

      if (!name || !message) return;

      const list = loadKrabbels();
      list.push({ name, message, date: new Date().toISOString() });
      saveKrabbels(list);

      nameInput.value = '';
      msgInput.value = '';
      renderKrabbels(listEl);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKrabbels);
  } else {
    initKrabbels();
  }
})();
