// myth.js — individual myth page logic for ExposeFact.com

(function () {
  function verdictClass(v) {
    return 'verdict-' + v.replace(/\s+/g, '-');
  }

  // ── Load myth from URL hash (#slug) ─────────────────────────────
  function loadMyth() {
    const slug = window.location.hash.slice(1); // strip leading #
    const myth = slug ? getMythBySlug(slug) : null;

    if (!myth) {
      document.getElementById('myth-page').style.display = 'none';
      document.getElementById('not-found').style.display = 'block';
      document.title = 'Myth Not Found — ExposeFact';
      document.getElementById('footer-year').textContent = new Date().getFullYear();
      return;
    }

    document.getElementById('myth-page').style.display = '';
    document.getElementById('not-found').style.display = 'none';

    // ── Populate page ──────────────────────────────────────────────
    document.title = `${myth.title} — ExposeFact`;

    const descText = myth.truth.slice(0, 155) + '…';
    const mythUrl = `https://exposefact.com/myth#${myth.slug}`;
    document.getElementById('page-desc').content = descText;
    document.getElementById('og-title').content = myth.title + ' — ExposeFact';
    document.getElementById('og-desc').content = descText;
    document.getElementById('og-url').content = mythUrl;
    document.getElementById('page-canonical').href = mythUrl;

    document.getElementById('ld-json').textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": myth.title,
      "description": descText,
      "url": mythUrl,
      "publisher": { "@type": "Organization", "name": "ExposeFact", "url": "https://exposefact.com" }
    });

    const verdCls = verdictClass(myth.verdict);
    document.getElementById('m-verdict').textContent = myth.verdict;
    document.getElementById('m-verdict').className = 'verdict ' + verdCls;
    document.getElementById('m-cat').textContent = myth.emoji + ' ' + myth.category;
    document.getElementById('m-emoji').textContent = myth.emoji;
    document.getElementById('m-claim').textContent = myth.claim;
    document.getElementById('m-truth').textContent = myth.truth;
    document.getElementById('m-why').textContent = myth.why;

    // ── Related myths (same category, up to 3) ────────────────────
    const related = MYTHS.filter(m => m.category === myth.category && m.slug !== myth.slug).slice(0, 3);
    const relGrid = document.getElementById('related-grid');
    relGrid.innerHTML = related.map(m => `
      <a class="myth-card" href="myth.html#${m.slug}">
        <div class="card-emoji">${m.emoji}</div>
        <div class="card-claim">${m.claim}</div>
        <div class="card-footer">
          <span class="verdict ${verdictClass(m.verdict)}">${m.verdict}</span>
          <span class="cat-pill">${m.category}</span>
        </div>
      </a>`).join('');

    // ── Share ──────────────────────────────────────────────────────
    window.shareMythPage = function () {
      const text = `"${myth.claim}" — ${myth.verdict}. Find out why:`;
      if (navigator.share) {
        navigator.share({ title: myth.title, text, url: mythUrl }).catch(() => {});
      } else {
        navigator.clipboard.writeText(mythUrl).then(() => {
          const btn = document.querySelector('.share-btn');
          const orig = btn.textContent;
          btn.textContent = 'Link copied!';
          setTimeout(() => { btn.textContent = orig; }, 2000);
        });
      }
    };
  }

  loadMyth();

  // Re-render if hash changes (e.g. clicking a related myth card)
  window.addEventListener('hashchange', loadMyth);

  // ── Footer year ──────────────────────────────────────────────────
  document.getElementById('footer-year').textContent = new Date().getFullYear();
})();
