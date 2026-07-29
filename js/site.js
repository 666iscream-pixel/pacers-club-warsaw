/* =============================================================================
   Shared behaviour: language, mobile nav, ticker, and the data-driven blocks
   (pace ladder, activity feed, schedule, meeting-point map).
   Everything renders from js/data.js so copy and numbers live in one place.
   ============================================================================= */

/* ------------------------------------------------------------------- icons */
/* Brand glyphs, written once and injected into any [data-icon] element.
   Size and colour come from the CSS class on the host element. */
const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.18A6.66 6.66 0 1 0 18.66 12 6.66 6.66 0 0 0 12 5.34zm0 10.99A4.33 4.33 0 1 1 16.33 12 4.33 4.33 0 0 1 12 16.33zm8.48-11.25a1.56 1.56 0 1 1-1.56-1.56 1.56 1.56 0 0 1 1.56 1.56z"/></svg>',
  strava: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.4 0 4.2 12.2h3.66L10.4 7.2l2.53 5h3.65zm3.43 12.2-1.8 3.5-1.79-3.5H7.02l4.99 9.8 5-9.8z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>'
};

function paintIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const svg = ICONS[el.dataset.icon];
    if (svg && !el.querySelector('svg')) el.insertAdjacentHTML('afterbegin', svg);
  });
}

/* ------------------------------------------------------------------ ticker */
function buildTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  const render = () => {
    const items = ['tick_1', 'tick_2', 'tick_3', 'tick_4'].map(t);
    // printed twice so the -50% translate loops seamlessly
    track.innerHTML = [...items, ...items].map(s => `<span>${s}</span>`).join('');
  };
  render();
  document.addEventListener('langchange', render);
}

/* --------------------------------------------------------------- pace util */
const toSec = p => {
  const [m, s] = p.split(':').map(Number);
  return m * 60 + s;
};
const paces = RUNS.map(r => toSec(r.pace));
const FASTEST = RUNS[paces.indexOf(Math.min(...paces))].pace;
const SLOWEST = RUNS[paces.indexOf(Math.max(...paces))].pace;
const TOTAL_KM = RUNS.reduce((a, r) => a + r.km, 0);
const SHORTEST = Math.min(...RUNS.map(r => r.km));
const LONGEST = Math.max(...RUNS.map(r => r.km));

/* -------------------------------------------------------------- stat blocks */
function fillStats() {
  const set = (sel, v) => document.querySelectorAll(sel).forEach(e => { e.textContent = v; });
  set('[data-stat="members"]', CLUB.members);
  set('[data-stat="pace"]', `${FASTEST}–${SLOWEST}`);
  set('[data-stat="runs"]', RUNS.length);
  set('[data-stat="km"]', TOTAL_KM.toFixed(1));
  set('[data-stat="range"]', `${Math.floor(SHORTEST)}–${Math.round(LONGEST)} km`);
}

/* ------------------------------------------------------------ activity feed */
function buildFeed() {
  const box = document.querySelector('[data-feed]');
  if (!box) return;
  const render = () => {
    box.innerHTML = RUNS.map(r => `<div class="feed-row">
      <div>
        <div class="who">${r.who}</div>
        <div class="what">${t('ac_kind')} · Warsaw</div>
      </div>
      <div class="cell"><b>${r.km.toFixed(2)}</b><span>km</span></div>
      <div class="cell"><b>${r.pace}</b><span>${t('ac_col_pace')}</span></div>
      <div class="cell"><b>${r.time}</b><span>${t('ac_col_time')}</span></div>
    </div>`).join('');
  };
  render();
  document.addEventListener('langchange', render);
}

/* ---------------------------------------------------------------- schedule */
const MONTHS_PL = {
  JAN: 'STY', FEB: 'LUT', MAR: 'MAR', APR: 'KWI', MAY: 'MAJ', JUN: 'CZE',
  JUL: 'LIP', AUG: 'SIE', SEP: 'WRZ', OCT: 'PAŹ', NOV: 'LIS', DEC: 'GRU'
};
const mo = m => (currentLang() === 'pl' ? (MONTHS_PL[m] || m) : m);
const sat = () => (currentLang() === 'pl' ? 'SOB' : 'SAT');

function buildSchedule() {
  const up = document.querySelector('[data-upcoming]');
  const past = document.querySelector('[data-past]');

  const render = () => {
    if (up) {
      up.innerHTML = EVENTS.filter(e => e.kind === 'recurring').map(e => `
        <div class="event">
          <div class="date">${e.day}<span>${mo(e.mo)} · ${sat()}</span></div>
          <div>
            <h3>09:00 · Warsaw</h3>
            <div class="meta">${t('sc_tbd')}</div>
          </div>
        </div>`).join('');
    }
    if (past) {
      past.innerHTML = PAST.map(e => `
        <div class="event past">
          <div class="date">${e.day}<span>${mo(e.mo)} · ${sat()}</span></div>
          <div>
            <h3>09:00 · ${e.place}</h3>
            <div class="meta">${e.note === 'volley' ? t('sc_volley') : t('tick_2')}</div>
          </div>
        </div>`).join('');
    }
  };
  render();
  document.addEventListener('langchange', render);
}

/* ------------------------------------------------------- meeting-point map */
function buildMap() {
  const el = document.getElementById('map');
  if (!el || typeof L === 'undefined') return;
  const map = L.map(el, { scrollWheelZoom: false }).setView(CLUB.meetPoint, 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const pin = L.divIcon({
    className: '',
    html: '<div style="width:20px;height:20px;border-radius:50%;background:#f4581f;border:4px solid #fffaf2;box-shadow:0 2px 8px rgba(0,0,0,.35)"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  const marker = L.marker(CLUB.meetPoint, { icon: pin }).addTo(map);

  // the container is sized by CSS after Leaflet measures it, so re-measure
  setTimeout(() => map.invalidateSize(), 120);

  const label = () => marker.bindPopup(`<b>${t('ro_meet_pin')}</b>`);
  label();
  document.addEventListener('langchange', label);
}

/* -------------------------------------------------------------------- boot */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang());

  document.querySelectorAll('.lang button').forEach(b => {
    b.addEventListener('click', () => applyLang(b.dataset.lang));
  });

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }

  paintIcons();
  buildTicker();
  fillStats();
  buildFeed();
  buildSchedule();
  buildMap();
});
