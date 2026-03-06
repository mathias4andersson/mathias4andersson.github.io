// shared.js — injects nav and footer into every page

function getNavHTML(activePage) {
  return `
  <nav class="site-nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Sentier<span>.</span></a>
      <ul class="nav-primary">

        <li class="nav-item">
          <a href="trails.html" ${activePage==='trails'?'class="active"':''}>Trails</a>
          <div class="drop-menu">
            <a href="trails.html#hiked">✦ Trails I have hiked</a>
            <a href="trails.html#explore">◎ Trails to explore</a>
            <div class="drop-menu-divider"></div>
            <a href="trails.html">🏔 Bernese Oberland</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="gear.html" ${activePage==='gear'?'class="active"':''}>Gear</a>
          <div class="drop-menu">
            <a href="gear.html#footwear">🥾 Footwear</a>
            <a href="gear.html#packs">🎒 Packs</a>
            <a href="gear.html#outerwear">🧥 Outerwear</a>
            <a href="gear.html#layers">🧣 Base Layers</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="bytrain.html" ${activePage==='bytrain'?'class="active"':''}>By Train</a>
          <div class="drop-menu">
            <a href="bytrain.html#howto">How to plan a hike by train</a>
            <a href="bytrain.html#ga">GA vs Halbtax</a>
            <a href="bytrain.html#postbus">PostBus tips</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="sustainability.html" ${activePage==='sustainability'?'class="active"':''}>Sustainability</a>
        </li>

        <li class="nav-item">
          <a href="about.html" ${activePage==='about'?'class="active"':''}>About</a>
        </li>

      </ul>
      <div class="nav-right">
        <a href="#newsletter" class="btn-nav">Newsletter</a>
      </div>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `
  <section class="newsletter" id="newsletter">
    <div class="newsletter-inner">
      <div>
        <p class="nl-eyebrow reveal">Monthly · No spam · Unsubscribe anytime</p>
        <h2 class="nl-title reveal">One trail,<br>once a <em>month.</em></h2>
        <p class="nl-desc reveal">A new trail guide, one honest gear thought, and the train connection you didn't know existed. That's it.</p>
        <ul class="nl-perks reveal">
          <li>New trail guides before they're published</li>
          <li>Seasonal conditions and honest tips</li>
          <li>No paid placements, ever</li>
        </ul>
      </div>
      <div class="nl-form reveal">
        <input type="text" class="nl-input" placeholder="Your first name">
        <input type="email" class="nl-input" id="nl-email" placeholder="your@email.com">
        <button class="nl-btn" id="nl-submit">Join the trail</button>
        <p class="nl-note">Free forever. Your data never shared.</p>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="footer-top">
      <div>
        <div class="footer-logo">Sentier<span>.</span></div>
        <p class="footer-tagline">Swiss trails, sustainable gear, every route reachable by train.</p>
        <div class="footer-social">
          <a href="#" class="social-btn">IG</a>
          <a href="#" class="social-btn">YT</a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Explore</p>
        <ul class="footer-links">
          <li><a href="trails.html">Trail Guides</a></li>
          <li><a href="gear.html">Gear Reviews</a></li>
          <li><a href="bytrain.html">By Train</a></li>
          <li><a href="sustainability.html">Sustainability</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Trails</p>
        <ul class="footer-links">
          <li><a href="trails.html#hiked">Trails I have hiked</a></li>
          <li><a href="trails.html#explore">Trails to explore</a></li>
          <li><a href="trails.html">Bernese Oberland</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">About</p>
        <ul class="footer-links">
          <li><a href="about.html">About Mathias</a></li>
          <li><a href="sustainability.html">My philosophy</a></li>
          <li><a href="about.html#contact">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Sentier by Mathias. Made in Switzerland, travelled by train.</p>
      <p class="footer-copy">Affiliate Disclosure · Privacy</p>
    </div>
  </footer>`;
}

function initNewsletter() {
  const btn = document.getElementById('nl-submit');
  if (!btn) return;
  btn.addEventListener('click', function() {
    const email = document.getElementById('nl-email');
    if (email && email.value.includes('@')) {
      this.textContent = '✓ Welcome to the trail';
      this.style.background = 'var(--fern)';
      email.value = '';
    } else {
      if (email) { email.style.borderColor = 'var(--bark)'; setTimeout(() => email.style.borderColor = '', 1500); }
    }
  });
}

function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('up'), i * 65);
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => obs.observe(el));
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNewsletter();
  initReveal();
  initFilters();
});
