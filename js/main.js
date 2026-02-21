// main.js — homepage logic for ExposeFact.com

(function () {
  // ── Helpers ──────────────────────────────────────────────────────
  function verdictClass(v) {
    return 'verdict-' + v.replace(/\s+/g, '-');
  }

  function mythUrl(slug) {
    return `myth.html#${slug}`;
  }

  function renderCard(myth) {
    const vm = VERDICT_META[myth.verdict] || {};
    return `
      <a class="myth-card" href="${mythUrl(myth.slug)}">
        <div class="card-emoji">${myth.emoji}</div>
        <div class="card-claim">${myth.claim}</div>
        <div class="card-footer">
          <span class="verdict ${verdictClass(myth.verdict)}">${myth.verdict}</span>
          <span class="cat-pill">${myth.category}</span>
        </div>
      </a>`;
  }

  // ── Today's myth ─────────────────────────────────────────────────
  const todayIdx = getTodaysMythIndex();
  const today = MYTHS[todayIdx];

  document.getElementById('today-date').textContent =
    new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  document.getElementById('hero-verdict').textContent = today.verdict;
  document.getElementById('hero-verdict').className = 'verdict ' + verdictClass(today.verdict);
  document.getElementById('hero-cat').textContent = today.emoji + ' ' + today.category;
  document.getElementById('hero-claim').textContent = today.claim;
  document.getElementById('hero-truth').textContent = today.truth;
  document.getElementById('hero-why').textContent = today.why;
  document.getElementById('hero-link').href = mythUrl(today.slug);

  // ── Category filter bar ──────────────────────────────────────────
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('cat') || 'all';

  const filterBar = document.getElementById('cat-filter-bar');
  const allBtn = document.createElement('button');
  allBtn.className = 'cat-filter-btn' + (activeCategory === 'all' ? ' active' : '');
  allBtn.textContent = 'All';
  allBtn.onclick = () => setCategory('all', allBtn);
  filterBar.appendChild(allBtn);

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-filter-btn' + (activeCategory === cat.id ? ' active' : '');
    btn.textContent = cat.emoji + ' ' + cat.label;
    btn.onclick = () => setCategory(cat.id, btn);
    filterBar.appendChild(btn);
  });

  function setCategory(cat, clickedBtn) {
    activeCategory = cat;
    document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
    clickedBtn.classList.add('active');
    renderGrid();
    // Update URL without reload
    const url = new URL(window.location);
    if (cat === 'all') url.searchParams.delete('cat');
    else url.searchParams.set('cat', cat);
    window.history.replaceState({}, '', url);
  }

  // ── Myth grid ────────────────────────────────────────────────────
  function renderGrid() {
    const grid = document.getElementById('myth-grid');
    // Show all myths except today's in hero, filtered by category
    // Rotate: start from myth after today, wrap around
    const ordered = [...MYTHS.slice(todayIdx + 1), ...MYTHS.slice(0, todayIdx)];
    const filtered = activeCategory === 'all'
      ? ordered
      : ordered.filter(m => m.category === activeCategory);

    grid.innerHTML = filtered.map(renderCard).join('');
  }

  renderGrid();

  // ── Share ────────────────────────────────────────────────────────
  window.shareMyth = function () {
    const url = location.origin + '/' + mythUrl(today.slug);
    const text = `"${today.claim}" — ${today.verdict}. Find out why at ExposeFact.`;
    if (navigator.share) {
      navigator.share({ title: 'ExposeFact', text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        const btn = document.querySelector('.share-btn');
        const orig = btn.textContent;
        btn.textContent = 'Link copied!';
        setTimeout(() => { btn.textContent = orig; }, 2000);
      });
    }
  };

  // ── Footer year ──────────────────────────────────────────────────
  document.getElementById('footer-year').textContent = new Date().getFullYear();
})();
