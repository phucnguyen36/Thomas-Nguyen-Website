const NTFY_TOPIC = 'thomas_outreach_trk_52ae419b_live';

const DESTINATIONS = {
  portfolio: 'https://thomasnguyen.online',
  calendly: 'https://calendly.com/thomasvisualeditor/30min?utm_source=cold_email',
  linkedin: 'https://www.linkedin.com/in/phucxuannguyen/',
  instagram: 'https://www.instagram.com/thomasvisualeditor/'
};

export default async function handler(req, res) {
  const query = req.query || {};
  const email = (query.u || query.email || '').trim().toLowerCase();
  const campaign = (query.c || 'outreach').trim();
  const target = (query.t || 'portfolio').trim().toLowerCase();
  const destUrl = DESTINATIONS[target] || DESTINATIONS.portfolio;

  try {
    if (email && email.includes('@')) {
      const nowTs = Math.floor(Date.now() / 1000);
      const country = req.headers['x-vercel-ip-country'] || '';
      const city = decodeURIComponent(req.headers['x-vercel-ip-city'] || '');
      const ua = req.headers['user-agent'] || '';

      const payload = {
        event: 'click',
        target,
        email,
        campaign,
        ts: nowTs,
        country,
        city,
        ua: ua.slice(0, 180)
      };

      try {
        await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
          method: 'POST',
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(1500)
        });
      } catch (_) {}
    }
  } catch (_) {}

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  return res.redirect(302, destUrl);
}
