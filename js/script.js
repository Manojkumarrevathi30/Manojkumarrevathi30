/* =========================================================
   Manojkumar Raman | Data Engineer Portfolio
   Vanilla JavaScript, no frameworks, no external APIs.
   ---------------------------------------------------------
   Edit the CONFIG object below to update content.
   ========================================================= */
const CONFIG = {
  name: 'Manojkumar Raman',
  // Optional: add your email to enable the "copy email" card and mailto form.
  email: '',
  // Optional: add a photo at assets/images/profile.jpg and set: photo: 'assets/images/profile.jpg'
  photo: '',
  // CV file: place your PDF at this path (relative to index.html).
  cv: 'assets/images/Manojkumar_Raman_Data_Engineer.pdf',
  linkedin: 'https://www.linkedin.com/in/manojkumarraman/',
  github: 'https://github.com/manojkumarrevathi30',

  roles: ['Data Engineer', 'Snowflake & dbt Developer', 'ETL & Integration Engineer', 'Workflow Automation Enthusiast'],

  /* ---- Technical skills (icon ids come from the sprite in index.html) ---- */
  skills: [
    { cat: 'Programming',         icon: 'i-code',      note: 'Core languages',           items: ['Python', 'SQL'] },
    { cat: 'Data Warehousing',    icon: 'v-snowflake', note: 'Cloud data warehouse',     items: ['Snowflake'] },
    { cat: 'Data Transformation', icon: 'i-layers',    note: 'Modeling & transformation', items: ['dbt'] },
    { cat: 'Big Data',            icon: 'i-cpu',       note: 'Distributed processing',   items: ['Databricks', 'PySpark'] },
    { cat: 'Cloud & Analytics',   icon: 'i-cloud',     note: 'Platforms & services',     items: ['Microsoft Fabric', 'Azure'] },
    { cat: 'ETL & Integration',   icon: 'i-flow',      note: 'Pipelines & ingestion',    items: ['Matillion', 'Azure Data Factory'] },
    { cat: 'Orchestration',       icon: 'i-clock',     note: 'Scheduling & monitoring',  items: ['Control-M'] },
    { cat: 'CRM Integration',     icon: 'i-users',     note: 'Source system integration', items: ['Salesforce'] },
    { cat: 'AI & Automation',     icon: 'i-spark',     note: 'Emerging practices',       items: ['AI-assisted engineering', 'Workflow automation'] }
  ],

  /* ---- Featured projects ---- */
  projects: [
    {
      num: '01',
      title: 'Pacific Life Insurance Data Integration',
      category: 'Enterprise Data Engineering',
      filter: 'Enterprise',
      desc: 'Worked on enterprise data engineering initiatives for a US-based insurance organization, supporting data transformation, integration and orchestration workflows.',
      responsibilities: [
        'Data processing and transformation using Python, SQL and dbt.',
        'Snowflake data warehousing and modeling.',
        'ETL workflows using Matillion.',
        'Control-M job orchestration and monitoring.',
        'Salesforce data integration.'
      ],
      flow: [
        { icon: 'i-users', label: 'Salesforce' },
        { icon: 'i-flow', label: 'Matillion' },
        { icon: 'v-snowflake', label: 'Snowflake' },
        { icon: 'i-layers', label: 'dbt' },
        { icon: 'i-clock', label: 'Control-M' }
      ],
      flowTitle: 'Integration workflow',
      stack: [['i-code', 'Python'], ['i-db', 'SQL'], ['v-snowflake', 'Snowflake'], ['i-layers', 'dbt'], ['i-flow', 'Matillion'], ['i-clock', 'Control-M'], ['i-users', 'Salesforce']]
    },
    {
      num: '02',
      title: 'Systech Internal Use Case Analytics',
      category: 'Analytics & Synthetic Data',
      filter: 'Analytics',
      desc: 'Contributed to internal analytics initiatives where synthetic datasets were prepared to support dashboard development and business analysis.',
      responsibilities: [
        'Generate and prepare synthetic datasets using Python.',
        'Perform data processing and validation using SQL.',
        'Prepare structured datasets for analytical consumption.',
        'Support dashboard development using synthetic data.'
      ],
      flow: [
        { icon: 'i-code', label: 'Python generate' },
        { icon: 'i-db', label: 'SQL validate' },
        { icon: 'i-layers', label: 'Structure' },
        { icon: 'i-chart', label: 'Dashboard' }
      ],
      flowTitle: 'Analytics workflow',
      stack: [['i-code', 'Python'], ['i-db', 'SQL'], ['i-spark', 'Synthetic Data'], ['i-chart', 'Analytics']]
    },
    {
      num: '03',
      title: 'Rally Motors',
      category: 'End-to-End Data Engineering Simulation',
      filter: 'Simulation',
      desc: 'Participated in a bootcamp simulation project focused on developing an end-to-end data solution, starting from requirement gathering through ETL development and dashboard preparation.',
      workflow: [
        'Requirement gathering and understanding.',
        'Data extraction and ingestion using Azure Data Factory.',
        'Data processing using Databricks and PySpark.',
        'SQL Server-based data storage and querying.',
        'Data preparation and dashboard development using Excel.'
      ],
      flow: [
        { icon: 'i-file', label: 'Requirements' },
        { icon: 'i-cloud', label: 'ADF ingest' },
        { icon: 'v-databricks', label: 'Databricks' },
        { icon: 'i-db', label: 'SQL Server' },
        { icon: 'i-sheet', label: 'Excel' }
      ],
      flowTitle: 'End-to-end pipeline',
      stack: [['i-cloud', 'Azure Data Factory'], ['v-databricks', 'Databricks'], ['i-cpu', 'PySpark'], ['i-db', 'SQL Server'], ['i-code', 'Python'], ['i-sheet', 'Excel']]
    }
  ],

  /* ---- Certifications (no dates, IDs or URLs, as they weren't provided) ---- */
  certifications: [
    { title: 'Databricks Data Engineer Associate', issuer: 'Databricks', level: 'Associate', logo: 'v-databricks', accent: '#ff5a3c' },
    { title: 'Databricks Data Engineer Professional', issuer: 'Databricks', level: 'Professional', logo: 'v-databricks', accent: '#ff7a45' },
    { title: 'Microsoft Certified: Fabric Data Engineer Associate', issuer: 'Microsoft', level: 'Associate', code: 'Exam DP-700', logo: 'v-microsoft', accent: '#3b82f6' },
    { title: 'Snowflake SnowPro Core', issuer: 'Snowflake', level: 'Core', logo: 'v-snowflake', accent: '#29b5e8' },
    { title: 'Matillion ETL Foundations', issuer: 'Matillion', level: 'Foundations', logo: 'v-matillion', accent: '#22c55e' },
    { title: 'Profisee LP-100: Master Data Management', issuer: 'Profisee', level: 'MDM', code: 'LP-100', logo: 'v-profisee', accent: '#a855f7' }
  ]
};
/* ===================== end of editable content ===================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const svg = (id, cls = '') => `<svg${cls ? ` class="${cls}"` : ''} aria-hidden="true"><use href="#${id}"/></svg>`;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ---------- Navigation ---------- */
function initNav() {
  const nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
  const progress = $('#scrollProgress'), toTop = $('#toTop');

  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 20);
    toTop.classList.toggle('show', y > 600);
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const setMenu = (open) => {
    links.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  burger.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  $$('a', links).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', e => { if (!nav.contains(e.target)) setMenu(false); });
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  // Active link highlighting
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$('a', links).forEach(a => {
          const on = a.getAttribute('href') === '#' + e.target.id;
          a.classList.toggle('active', on);
          if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));
}

/* ---------- Reveal on scroll ---------- */
let revealObs;
function observeReveals(root = document) {
  if (!('IntersectionObserver' in window) || reduceMotion) { $$('.reveal', root).forEach(el => el.classList.add('in')); return; }
  if (!revealObs) {
    revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
    }, { threshold: 0.1 });
  }
  $$('.reveal:not(.in)', root).forEach(el => {
    el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
    revealObs.observe(el);
  });
}

/* ---------- Hero: typed roles ---------- */
function initTyped() {
  const el = $('#typed');
  if (reduceMotion) { el.textContent = CONFIG.roles[0]; return; }
  let r = 0, i = CONFIG.roles[0].length, del = true;
  const tick = () => {
    const word = CONFIG.roles[r];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = del ? 38 : 80;
    if (!del && i === word.length) { wait = 2000; del = true; }
    else if (del && i === 0) { del = false; r = (r + 1) % CONFIG.roles.length; wait = 350; }
    setTimeout(tick, wait);
  };
  setTimeout(tick, 2400);
}

/* ---------- Hero: terminal animation ---------- */
function initTerminal() {
  const body = $('#termBody');
  const lines = [
    '<span class="c">-- dbt model on Snowflake</span>',
    '<span class="k">with</span> source <span class="k">as</span> (',
    '  <span class="k">select</span> * <span class="k">from</span> <span class="f">{{ source</span>(<span class="s">\'salesforce\'</span>, <span class="s">\'policies\'</span>)<span class="f">}}</span>',
    '),',
    'validated <span class="k">as</span> (',
    '  <span class="k">select</span> * <span class="k">from</span> source <span class="k">where</span> policy_id <span class="k">is not null</span>',
    ')',
    '<span class="k">select</span> * <span class="k">from</span> validated',
    '',
    '<span class="c">$ dbt run --select business_ready</span>',
    '<span class="ok">✔</span> extract   <span class="c">· Matillion</span>  <span class="ok">done</span>',
    '<span class="ok">✔</span> transform <span class="c">· dbt</span>        <span class="ok">done</span>',
    '<span class="ok">✔</span> schedule  <span class="c">· Control-M</span>  <span class="ok">done</span>'
  ];
  if (reduceMotion) { body.innerHTML = lines.join('\n'); return; }
  let n = 0;
  const step = () => {
    if (n <= lines.length) {
      body.innerHTML = lines.slice(0, n).join('\n') + '<span class="caret">▍</span>';
      n++;
      setTimeout(step, n < 10 ? 230 : 480);
    } else {
      setTimeout(() => { n = 0; step(); }, 3800);
    }
  };
  step();
}

/* ---------- Background: data network canvas ---------- */
function initCanvas() {
  const c = $('#bg-canvas');
  if (reduceMotion || !c.getContext) return;
  const ctx = c.getContext('2d');
  let w, h, pts = [], running = true;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const mouse = { x: -9999, y: -9999 };

  const resize = () => {
    w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
    const count = Math.min(80, Math.floor((innerWidth * innerHeight) / 18000));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .3 * dpr, vy: (Math.random() - .5) * .3 * dpr,
      r: (Math.random() * 1.3 + .6) * dpr
    }));
  };
  resize();
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
  addEventListener('mousemove', e => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
  document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) requestAnimationFrame(draw); });

  const maxD = 130 * dpr;
  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    ctx.lineWidth = dpr * .8;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < maxD) {
          ctx.strokeStyle = `rgba(99,130,246,${(1 - d / maxD) * .2})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < maxD * 1.4) {
        ctx.strokeStyle = `rgba(168,85,247,${(1 - md / (maxD * 1.4)) * .38})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      const light = currentTheme() === 'light';
      ctx.fillStyle = i % 3 ? (light ? 'rgba(37,99,235,.45)' : 'rgba(96,165,250,.7)') : (light ? 'rgba(147,51,234,.45)' : 'rgba(192,132,252,.7)');
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ---------- Marquee ---------- */
function renderMarquee() {
  const all = CONFIG.skills.flatMap(s => s.items);
  const html = all.map(t => `<span>${esc(t)}</span>`).join('');
  $('#marquee').innerHTML = html + html; // duplicated for seamless loop
}

/* ---------- Animated stats (verified values only) ---------- */
function initCounters() {
  const els = $$('.count');
  if (reduceMotion) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, to = +el.dataset.to, start = performance.now(), dur = 1200;
      const step = (t) => {
        const p = Math.min(1, (t - start) / dur);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = '0';
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  els.forEach(el => obs.observe(el));
}

/* ---------- Skills ---------- */
function renderSkills() {
  const filters = $('#skillFilters'), grid = $('#skillsGrid');
  const groups = {
    All: null,
    'Core & Warehouse': ['Programming', 'Data Warehousing', 'Data Transformation'],
    'Big Data & Cloud': ['Big Data', 'Cloud & Analytics'],
    'Integration & Orchestration': ['ETL & Integration', 'Orchestration', 'CRM Integration'],
    'AI & Automation': ['AI & Automation']
  };
  filters.innerHTML = Object.keys(groups).map((g, i) =>
    `<button class="chip${i === 0 ? ' active' : ''}" type="button" data-group="${esc(g)}" aria-pressed="${i === 0}">${esc(g)}</button>`).join('');

  grid.innerHTML = CONFIG.skills.map((s, i) => `
    <article class="skill-card glass reveal" data-cat="${esc(s.cat)}" data-delay="${(i % 3) * 80}">
      <div class="skill-head">
        <span class="icbox">${svg(s.icon)}</span>
        <div><h3>${esc(s.cat)}</h3><small>${esc(s.note)}</small></div>
      </div>
      <div class="tags">${s.items.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
    </article>`).join('');

  filters.addEventListener('click', e => {
    const btn = e.target.closest('.chip'); if (!btn) return;
    $$('.chip', filters).forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    const cats = groups[btn.dataset.group];
    $$('.skill-card', grid).forEach(card => {
      const show = !cats || cats.includes(card.dataset.cat);
      card.classList.toggle('hidden', !show);
      if (show) card.classList.add('in');
    });
  });

  grid.addEventListener('mousemove', e => {
    const card = e.target.closest('.skill-card'); if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
}

/* ---------- Projects ---------- */
function renderProjects() {
  const list = $('#projectsList');
  const filters = $('#projFilters');
  const cats = ['All', ...new Set(CONFIG.projects.map(p => p.filter))];
  filters.innerHTML = cats.map((c, i) =>
    `<button class="chip${i === 0 ? ' active' : ''}" type="button" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join('');

  list.innerHTML = CONFIG.projects.map((p, i) => {
    const id = 'proj-details-' + i;
    const flow = p.flow.map((n, k) =>
      (k ? '<span class="flow-link"><b style="animation-delay:' + (k * .35) + 's"></b></span>' : '') +
      `<div class="flow-node"><i>${svg(n.icon)}</i><span>${esc(n.label)}</span></div>`).join('');
    const listBlock = p.responsibilities
      ? `<h4>Responsibilities</h4><ul>${p.responsibilities.map(r => `<li>${svg('i-check')}<span>${esc(r)}</span></li>`).join('')}</ul>`
      : `<h4>Project workflow</h4><ol>${p.workflow.map(r => `<li><span>${esc(r)}</span></li>`).join('')}</ol>`;
    const searchText = [p.title, p.category, p.desc, ...(p.responsibilities || p.workflow), ...p.stack.map(s => s[1])].join(' ').toLowerCase();

    return `
    <article class="proj-card glass reveal" data-filter="${esc(p.filter)}" data-search="${esc(searchText)}" data-delay="${i * 90}">
      <div class="proj-main">
        <div>
          <div class="proj-num"><b>${esc(p.num)}</b><span class="proj-cat">${esc(p.category)}</span></div>
          <h3>${esc(p.title)}</h3>
          <p class="desc">${esc(p.desc)}</p>
          <div class="tags">${p.stack.map(s => `<span class="tag">${esc(s[1])}</span>`).join('')}</div>
          <button class="proj-toggle" type="button" aria-expanded="false" aria-controls="${id}">
            <span>View project details</span>${svg('i-chev')}
          </button>
        </div>
        <div class="flow" aria-label="${esc(p.flowTitle)}: ${esc(p.flow.map(n => n.label).join(' to '))}">
          <span class="flow-label">${esc(p.flowTitle)}</span>
          <div class="flow-steps">${flow}</div>
        </div>
      </div>
      <div class="proj-details" id="${id}"><div>
        <div class="proj-details-inner">
          <div>
            <h4>Project overview</h4>
            <p class="desc" style="margin-bottom:22px">${esc(p.desc)}</p>
            ${listBlock}
          </div>
          <div>
            <h4>Technology stack</h4>
            <div class="stack-grid">${p.stack.map(s => `<div class="stack-item">${svg(s[0])}${esc(s[1])}</div>`).join('')}</div>
            <h4 style="margin-top:22px">Category</h4>
            <span class="proj-cat">${esc(p.category)}</span>
          </div>
        </div>
      </div></div>
    </article>`;
  }).join('');

  list.addEventListener('click', e => {
    const btn = e.target.closest('.proj-toggle'); if (!btn) return;
    const card = btn.closest('.proj-card');
    const open = card.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('span').textContent = open ? 'Hide project details' : 'View project details';
  });

  let activeFilter = 'All';
  const apply = () => {
    const q = $('#projSearch').value.trim().toLowerCase();
    let shown = 0;
    $$('.proj-card', list).forEach(c => {
      const ok = (activeFilter === 'All' || c.dataset.filter === activeFilter) && (!q || c.dataset.search.includes(q));
      c.classList.toggle('hidden', !ok);
      if (ok) { shown++; c.classList.add('in'); }
    });
    $('#projEmpty').classList.toggle('hidden', shown > 0);
  };
  filters.addEventListener('click', e => {
    const btn = e.target.closest('.chip'); if (!btn) return;
    activeFilter = btn.dataset.filter;
    $$('.chip', filters).forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    apply();
  });
  $('#projSearch').addEventListener('input', apply);
}

/* ---------- Certifications ---------- */
function renderCerts() {
  $('#certsGrid').innerHTML = CONFIG.certifications.map((c, i) => `
    <article class="cert-card glass reveal" style="--accent:${c.accent}" data-delay="${(i % 3) * 80}">
      <div class="cert-top">
        <span class="cert-badge">${svg(c.logo)}</span>
        <span class="cert-level">${esc(c.level)}</span>
      </div>
      <h3>${esc(c.title)}</h3>
      <div class="issuer">${svg('i-shield')}${esc(c.issuer)}</div>
      ${c.code ? `<div class="cert-code">${esc(c.code)}</div>` : ''}
    </article>`).join('');
}

/* ---------- Contact ---------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function initContact() {
  if (CONFIG.email) {
    $('#copyEmail').classList.remove('hidden');
    $('#emailText').textContent = CONFIG.email;
    $('#formNote').textContent = 'Opens your email app with the message ready to send.';
    $('#copyEmail').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(CONFIG.email); toast('Email copied to clipboard'); }
      catch { toast(CONFIG.email); }
    });
  } else {
    $('#sendLabel').textContent = 'Send via LinkedIn';
  }

  const form = $('#contactForm');
  const rules = {
    name: v => v.length >= 2 || 'Please enter your name',
    email: v => EMAIL_RE.test(v) || 'Please enter a valid email address',
    subject: v => v.length >= 3 || 'Please add a subject',
    message: v => v.length >= 10 || 'Message should be at least 10 characters'
  };
  const validate = (input) => {
    const res = rules[input.name](input.value.trim());
    const field = input.closest('.field');
    field.classList.toggle('invalid', res !== true);
    input.setAttribute('aria-invalid', String(res !== true));
    field.querySelector('.err').textContent = res === true ? '' : res;
    return res === true;
  };
  $$('input, textarea', form).forEach(inp => {
    inp.addEventListener('blur', () => inp.value && validate(inp));
    inp.addEventListener('input', () => inp.closest('.field').classList.contains('invalid') && validate(inp));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = $$('input, textarea', form);
    const ok = inputs.map(validate).every(Boolean);
    if (!ok) { toast('Please fix the highlighted fields'); inputs.find(i => i.getAttribute('aria-invalid') === 'true')?.focus(); return; }
    const d = Object.fromEntries(new FormData(form));
    const text = `Subject: ${d.subject}\n\n${d.message}\n\n${d.name} (${d.email})`;

    if (CONFIG.email) {
      const body = `${d.message}\n\n${d.name} (${d.email})`;
      window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
      toast('Opening your email app…');
      form.reset();
      return;
    }
    // No email configured: open LinkedIn (synchronously, so popup blockers allow it) and copy the message.
    openExternal(CONFIG.linkedin);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => toast('Message copied. Paste it into a LinkedIn message.'))
        .catch(() => toast('LinkedIn opened. Send your message there.'));
    } else {
      toast('LinkedIn opened. Send your message there.');
    }
    form.reset();
  });
}

/* ---------- Reliable link handling ----------
   Internal (#section) links scroll with JS so they work inside any frame.
   External links (LinkedIn, GitHub) ALWAYS open in a new tab. They are never
   loaded inside the current page/frame, because LinkedIn refuses to be framed
   (ERR_BLOCKED_BY_RESPONSE). If a new tab is blocked, the link is copied. */
function openExternal(url) {
  let w = null;
  try { w = window.open(url, '_blank'); } catch (_) { w = null; }
  if (w) { try { w.opener = null; } catch (_) {} return true; }
  if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
  toast('Pop-up blocked. Link copied, paste it in a new tab: ' + url);
  return false;
}
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = $('#nav').offsetHeight || 72;
  const top = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - navH + 1;
  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  try { history.replaceState(null, '', '#' + id); } catch (_) {}
}
function initLinks() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const href = a.getAttribute('href');
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      scrollToSection(href.slice(1));
    } else if (/^https?:\/\//i.test(href)) {
      // Force a new tab; let the browser handle it natively (most reliable).
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      // LinkedIn refuses to load in tabs opened from a sandboxed frame (e.g. an editor preview).
      // When framed, also copy the link so visitors can paste it if their browser blocks it.
      let framed = false; try { framed = window.top !== window.self; } catch (_) { framed = true; }
      if (framed && /linkedin\.com/i.test(href)) {
        if (navigator.clipboard) navigator.clipboard.writeText(href).catch(() => {});
        toast('LinkedIn link copied. If it doesn\u2019t open here, paste it into a new browser tab.');
      }
    }
  });
  if (location.hash.length > 1) setTimeout(() => scrollToSection(location.hash.slice(1)), 100);
}

/* ---------- Download CV ----------
   Checks the PDF exists so visitors get a friendly message instead of a 404. */
function initCV() {
  const links = $$('.cv-link');
  links.forEach(a => a.setAttribute('href', CONFIG.cv));
  let available = null; // null = unknown (e.g. opened from file://)
  if (location.protocol.startsWith('http')) {
    fetch(CONFIG.cv, { method: 'HEAD', cache: 'no-store' })
      .then(r => { available = r.ok; })
      .catch(() => { available = null; });
  }
  links.forEach(a => a.addEventListener('click', e => {
    if (available === false) {
      e.preventDefault();
      toast('CV will be available soon. Please connect on LinkedIn meanwhile.');
    }
  }));
}

/* ---------- Light / dark theme ---------- */
const THEME_KEY = 'mr-theme';
function currentTheme() { return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
function applyTheme(theme, animate) {
  const root = document.documentElement;
  if (animate && !reduceMotion) {
    root.classList.add('theme-anim');
    setTimeout(() => root.classList.remove('theme-anim'), 450);
  }
  root.setAttribute('data-theme', theme);
  const btn = $('#themeToggle');
  if (btn) {
    btn.setAttribute('aria-checked', String(theme === 'light'));
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f7ff' : '#070b1f');
}
function initTheme() {
  applyTheme(currentTheme(), false);
  $('#themeToggle').addEventListener('click', () => {
    const next = currentTheme() === 'light' ? 'dark' : 'light';
    applyTheme(next, true);
    try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
  });
  // Follow the system setting until the visitor picks a theme themselves
  const mq = matchMedia('(prefers-color-scheme: light)');
  const onSys = e => {
    let saved = null; try { saved = localStorage.getItem(THEME_KEY); } catch (_) {}
    if (!saved) applyTheme(e.matches ? 'light' : 'dark', true);
  };
  if (mq.addEventListener) mq.addEventListener('change', onSys);
}

/* ---------- Photo ---------- */
function initPhoto() {
  if (!CONFIG.photo) return;
  const img = new Image();
  img.alt = CONFIG.name;
  img.onload = () => { const a = $('#avatar'); a.innerHTML = ''; a.appendChild(img); };
  img.src = CONFIG.photo;
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  initTheme();
  renderMarquee();
  renderSkills();
  renderProjects();
  renderCerts();
  initContact();
  initPhoto();
  initCV();
  initLinks();
  initNav();
  initTyped();
  initTerminal();
  initCanvas();
  $$('.hero .reveal').forEach((el, i) => el.dataset.delay = 100 + i * 100);
  observeReveals();
  initCounters();
});
