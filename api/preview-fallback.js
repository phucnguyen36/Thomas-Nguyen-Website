import fs from 'fs';

const NTFY_WEB_TOPIC = 'thomas_web_outreach_trk_d3e49569_live';

let cachedIndex = null;
function getPreviewIndex() {
  if (cachedIndex) return cachedIndex;
  try {
    const raw = fs.readFileSync(new URL('./_preview_index.json', import.meta.url), 'utf8');
    cachedIndex = JSON.parse(raw);
  } catch (_) {
    cachedIndex = {};
  }
  return cachedIndex;
}

const LEGAL_SUFFIX_RE = /-(llc|inc|corp|corporation|co|company|ltd|usa)(\b|$)/g;

function normalizeCore(slug) {
  return (slug || '')
    .toLowerCase()
    .replace(/\.html$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-s-/g, 's-')
    .replace(LEGAL_SUFFIX_RE, '')
    .replace(/^-+|-+$/g, '');
}

function findBestSlugMatch(rawSlug, indexMap) {
  const clean = (rawSlug || '')
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
    .replace(/^previews\//, '')
    .replace(/\.html$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (!clean) return null;
  if (indexMap[clean]) return clean;

  const targetCore = normalizeCore(clean);
  if (!targetCore) return null;

  const keys = Object.keys(indexMap);
  for (const k of keys) {
    if (normalizeCore(k) === targetCore) return k;
  }

  // Prefix / substring containment for truncated slugs (>= 8 chars)
  if (targetCore.length >= 8) {
    for (const k of keys) {
      const kc = normalizeCore(k);
      if (kc.startsWith(targetCore) || targetCore.startsWith(kc)) {
        return k;
      }
    }
  }

  // Token Dice similarity
  const stop = new Set(['llc', 'inc', 'corp', 'co', 'the', 'and', 'of']);
  const tTokens = targetCore.split('-').filter((w) => w.length > 1 && !stop.has(w));
  if (tTokens.length >= 2) {
    let bestKey = null;
    let bestScore = 0;
    for (const k of keys) {
      const kTokens = normalizeCore(k).split('-').filter((w) => w.length > 1 && !stop.has(w));
      if (!kTokens.length) continue;
      const kSet = new Set(kTokens);
      let overlap = 0;
      for (const t of tTokens) {
        if (kSet.has(t)) overlap++;
      }
      const score = (2 * overlap) / (tTokens.length + kTokens.length);
      if (overlap >= 2 && score > bestScore) {
        bestScore = score;
        bestKey = k;
      }
    }
    if (bestKey && bestScore >= 0.72) return bestKey;
  }

  return null;
}

const UPPER_TOKENS = new Set([
  'llc', 'inc', 'usa', 'tx', 'fl', 'ca', 'ny', 'nj', 'pa', 'oh', 'il', 'ga', 'nc', 'sc', 'va', 'md', 'ma', 'az', 'wa', 'co', 'tn', 'in', 'mi', 'mo', 'wi', 'mn'
]);

function humanizeSlug(slug) {
  const words = (slug || 'local-contractor')
    .replace(/\.html$/i, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
  if (!words.length) return 'Local Contracting Crew';
  return words
    .map((w) => (UPPER_TOKENS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
    .join(' ');
}

function getTradePreset(slug) {
  const s = (slug || '').toLowerCase();
  if (s.includes('roof') || s.includes('gutter') || s.includes('siding')) {
    return {
      headline: 'Architectural Roofing, Storm Restoration & Seamless Exteriors.',
      sub: 'Full tear-off to bare decking, synthetic ice-and-water protection, and precision flashing backed by our written 10-year workmanship guarantee.',
      heroImg: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1400&q=80',
      pkg1: ['Architectural Shingle', 8],
      pkg2: ['Standing Seam Metal', 16],
      pkg3: ['Gutter & Fascia System', 7]
    };
  }
  if (s.includes('concrete') || s.includes('paver') || s.includes('mason') || s.includes('asphalt') || s.includes('stone')) {
    return {
      headline: 'Laser-Graded Concrete Driveways, Stamped Patios & Structural Slabs.',
      sub: '4,500 PSI fiber-reinforced pours over compacted aggregate sub-bases with #4 steel rebar reinforcement and direct owner supervision.',
      heroImg: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
      pkg1: ['Broom Finish Driveway', 14],
      pkg2: ['Architectural Stamped Patio', 20],
      pkg3: ['Reinforced Structural Slab', 18]
    };
  }
  if (s.includes('paint') || s.includes('coat')) {
    return {
      headline: 'Exterior Weather Coatings, Fine Interior Painting & Cabinet Enameling.',
      sub: 'HEPA dustless prep, elastomeric caulking, and two full coats of Sherwin-Williams Emerald or Benjamin Moore Aura finishes.',
      heroImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1400&q=80',
      pkg1: ['Interior Walls & Trim', 5],
      pkg2: ['Full Exterior Weather Coat', 7],
      pkg3: ['Factory Cabinet Enamel', 10]
    };
  }
  if (s.includes('tree') || s.includes('landscap') || s.includes('lawn') || s.includes('pool') || s.includes('fence') || s.includes('deck')) {
    return {
      headline: 'Custom Outdoor Living, Hardscaping & Property Transformation.',
      sub: 'Built for drainage stability, structural longevity, and clean daily jobsites with direct owner supervision from layout to final walkthrough.',
      heroImg: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=80',
      pkg1: ['Standard Site Package', 12],
      pkg2: ['Architectural Hardscape', 22],
      pkg3: ['Full Outdoor Build', 30]
    };
  }
  return {
    headline: 'Licensed Residential Remodeling, Structural Upgrades & Custom Finishes.',
    sub: 'Direct owner oversight on-site daily, itemized written scopes before work begins, and a written 10-year workmanship guarantee.',
    heroImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    pkg1: [' Core Remodel Scope', 18],
    pkg2: ['Custom Architectural Build', 28],
    pkg3: ['Full Turnkey Renovation', 38]
  };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderDynamicContractorHtml(bname, preset) {
  const safeName = escapeHtml(bname);
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${safeName} | Custom Project Estimator &amp; On-Site Quotes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background:#0B0F17; color:#EDEDF3; font-family:'Public Sans',sans-serif; }
    h1,h2,h3 { font-family:'Cinzel',serif; text-wrap:balance; }
    .num { font-variant-numeric:tabular-nums; }
  </style>
</head>
<body class="antialiased selection:bg-amber-400 selection:text-amber-950">
  <header class="border-b border-white/10 bg-[#0B0F17]/95 sticky top-0 z-40 backdrop-blur">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="font-bold tracking-tight text-lg text-white">${safeName}</div>
      <a href="#estimator" class="px-5 py-2.5 rounded-full bg-amber-400 text-amber-950 font-semibold text-sm hover:bg-amber-300 transition">Calculate Estimate</a>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-6 py-16 lg:py-24">
    <section class="grid lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 space-y-6">
        <h1 class="text-3xl sm:text-5xl font-bold leading-tight text-white">${escapeHtml(preset.headline)}</h1>
        <p class="text-slate-300 text-lg leading-relaxed max-w-2xl">${escapeHtml(preset.sub)}</p>
        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#estimator" class="px-7 py-4 rounded-full bg-amber-400 text-amber-950 font-bold text-sm hover:bg-amber-300 transition">Launch 30-Second Sq.Ft Calculator</a>
          <a href="#walkthrough" class="px-7 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition">24-Hour Walkthrough Process</a>
        </div>
        <div class="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-sm text-slate-300">
          <div><strong class="block text-white">Direct Owner Oversight</strong>Dedicated crew on-site daily</div>
          <div><strong class="block text-white">Itemized Written Scope</strong>Zero surprise change orders</div>
          <div><strong class="block text-white">10-Year Written Warranty</strong>Workmanship backed in writing</div>
        </div>
      </div>
      <div class="lg:col-span-5">
        <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121824]">
          <img src="${preset.heroImg}" alt="${safeName} completed project" class="w-full h-80 object-cover">
          <div class="p-5 flex items-center justify-between text-sm">
            <span class="text-slate-300">Verified Field Craftsmanship</span>
            <span class="text-amber-400 font-semibold num">5.0 Client Rating</span>
          </div>
        </div>
      </div>
    </section>

    <section id="estimator" class="mt-24 rounded-3xl bg-[#121824] border border-white/10 p-8 sm:p-12">
      <div class="max-w-2xl mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white">Interactive Project Cost Calculator</h2>
        <p class="text-slate-300 mt-2">Select your specification and project size below to preview realistic local material and labor ranges before booking an on-site measurement.</p>
      </div>
      <div class="grid lg:grid-cols-12 gap-10 items-start">
        <div class="lg:col-span-7 space-y-6">
          <div class="grid sm:grid-cols-3 gap-3" id="pkgGroup">
            <button type="button" data-rate="${preset.pkg1[1]}" class="pkg-btn p-4 rounded-xl border border-amber-400 bg-amber-400/10 text-left">
              <div class="font-semibold text-white text-sm">${escapeHtml(preset.pkg1[0])}</div>
              <div class="text-amber-300 text-xs mt-1 num">$${preset.pkg1[1]} / sq.ft avg</div>
            </button>
            <button type="button" data-rate="${preset.pkg2[1]}" class="pkg-btn p-4 rounded-xl border border-white/10 bg-white/5 text-left">
              <div class="font-semibold text-white text-sm">${escapeHtml(preset.pkg2[0])}</div>
              <div class="text-slate-300 text-xs mt-1 num">$${preset.pkg2[1]} / sq.ft avg</div>
            </button>
            <button type="button" data-rate="${preset.pkg3[1]}" class="pkg-btn p-4 rounded-xl border border-white/10 bg-white/5 text-left">
              <div class="font-semibold text-white text-sm">${escapeHtml(preset.pkg3[0])}</div>
              <div class="text-slate-300 text-xs mt-1 num">$${preset.pkg3[1]} / sq.ft avg</div>
            </button>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-2">
              <label for="sqftRange" class="text-slate-300 font-medium">Estimated Project Area</label>
              <span class="text-amber-400 font-bold num"><span id="sqftVal">1,200</span> sq.ft</span>
            </div>
            <input id="sqftRange" type="range" min="250" max="5000" step="50" value="1200" class="w-full accent-amber-400">
          </div>
        </div>
        <div class="lg:col-span-5 rounded-2xl bg-[#0B0F17] border border-white/10 p-6 space-y-4">
          <div class="text-sm text-slate-400">Estimated Turnkey Range</div>
          <div class="text-3xl font-bold text-white num" id="priceOut">$15,360 - $18,240</div>
          <div class="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs text-slate-300 num">
            <div>Materials (55%): <strong class="text-white block text-sm mt-0.5" id="matOut">$9,240</strong></div>
            <div>Dedicated Crew (45%): <strong class="text-white block text-sm mt-0.5" id="labOut">$7,560</strong></div>
          </div>
          <p class="text-xs text-slate-400 pt-2">Includes site preparation, commercial-grade materials, magnetic debris sweep, and 10-year written workmanship coverage.</p>
        </div>
      </div>
    </section>

    <section id="walkthrough" class="mt-20 grid md:grid-cols-3 gap-6">
      <div class="p-6 rounded-2xl bg-[#121824] border border-white/10">
        <div class="text-amber-400 font-bold text-sm num mb-2">STEP 01</div>
        <h3 class="text-lg font-bold text-white mb-2">24-Hour On-Site Measurement</h3>
        <p class="text-sm text-slate-300">We inspect substrate conditions, elevation grading, and access points in person without high-pressure sales tactics.</p>
      </div>
      <div class="p-6 rounded-2xl bg-[#121824] border border-white/10">
        <div class="text-amber-400 font-bold text-sm num mb-2">STEP 02</div>
        <h3 class="text-lg font-bold text-white mb-2">Itemized Written Proposal</h3>
        <p class="text-sm text-slate-300">You receive a clear breakdown of materials, timeline, and fixed pricing the same day as your walkthrough.</p>
      </div>
      <div class="p-6 rounded-2xl bg-[#121824] border border-white/10">
        <div class="text-amber-400 font-bold text-sm num mb-2">STEP 03</div>
        <h3 class="text-lg font-bold text-white mb-2">Owner-Supervised Build</h3>
        <p class="text-sm text-slate-300">Our in-house crew completes your installation on schedule and walks every detail with you before final sign-off.</p>
      </div>
    </section>
  </main>

  <footer class="border-t border-white/10 py-8 text-center text-xs text-slate-400">
    &copy; ${new Date().getFullYear()} ${safeName}. Custom Interactive Preview built for ${safeName}.
  </footer>

  <script>
    (function(){
      var rate = ${preset.pkg1[1]};
      var range = document.getElementById('sqftRange');
      var sqftVal = document.getElementById('sqftVal');
      var priceOut = document.getElementById('priceOut');
      var matOut = document.getElementById('matOut');
      var labOut = document.getElementById('labOut');
      function fmt(n){ return '$' + Math.round(n).toLocaleString('en-US'); }
      function recalc(){
        var sq = parseInt(range.value, 10) || 1000;
        sqftVal.textContent = sq.toLocaleString('en-US');
        var mid = sq * rate;
        priceOut.textContent = fmt(mid * 0.92) + ' - ' + fmt(mid * 1.08);
        matOut.textContent = fmt(mid * 0.55);
        labOut.textContent = fmt(mid * 0.45);
      }
      range.addEventListener('input', recalc);
      document.querySelectorAll('.pkg-btn').forEach(function(btn){
        btn.addEventListener('click', function(){
          rate = parseFloat(btn.getAttribute('data-rate')) || rate;
          document.querySelectorAll('.pkg-btn').forEach(function(b){
            b.className = 'pkg-btn p-4 rounded-xl border border-white/10 bg-white/5 text-left';
          });
          btn.className = 'pkg-btn p-4 rounded-xl border border-amber-400 bg-amber-400/10 text-left';
          recalc();
        });
      });
      recalc();
    })();
  </script>
</body>
</html>`;
}

export default async function handler(req, res) {
  const query = req.query || {};
  let rawSlug = '';
  if (Array.isArray(query.slug)) {
    rawSlug = query.slug.join('/');
  } else if (query.slug) {
    rawSlug = String(query.slug);
  } else if (req.url) {
    rawSlug = req.url.split('?')[0].replace(/^\/previews\//, '');
  }

  const indexMap = getPreviewIndex();
  const matchedSlug = findBestSlugMatch(rawSlug, indexMap);

  if (matchedSlug) {
    res.setHeader('Cache-Control', 'public, max-age=300');
    return res.redirect(302, `/previews/${matchedSlug}`);
  }

  const bname = humanizeSlug(rawSlug);
  const preset = getTradePreset(rawSlug);

  try {
    await fetch(`https://ntfy.sh/${NTFY_WEB_TOPIC}`, {
      method: 'POST',
      body: JSON.stringify({
        event_type: 'fallback_preview_rendered',
        slug: rawSlug,
        business: bname,
        ts: new Date().toISOString(),
        ua: String(req.headers['user-agent'] || '').slice(0, 120)
      }),
      signal: AbortSignal.timeout(1200)
    });
  } catch (_) {}

  const html = renderDynamicContractorHtml(bname, preset);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300');
  return res.status(200).send(html);
}
