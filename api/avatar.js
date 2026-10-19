import fs from 'fs';
import path from 'path';

const NTFY_TOPIC = 'thomas_outreach_trk_52ae419b_live';

export default async function handler(req, res) {
  try {
    const query = req.query || {};
    const email = (query.u || query.email || '').trim().toLowerCase();
    const campaign = (query.c || 'outreach').trim();
    const sentTs = parseInt(query.s || '0', 10);
    const nowTs = Math.floor(Date.now() / 1000);

    if (email && email.includes('@')) {
      const elapsed = sentTs > 0 ? (nowTs - sentTs) : 9999;
      // If requested within 12 seconds of sending, mark as initial sender/SMTP prefetch
      const isPrefetch = elapsed < 12;

      const country = req.headers['x-vercel-ip-country'] || '';
      const city = decodeURIComponent(req.headers['x-vercel-ip-city'] || '');
      const ua = req.headers['user-agent'] || '';

      const payload = {
        event: 'open',
        email,
        campaign,
        ts: nowTs,
        sent_ts: sentTs,
        elapsed_sec: elapsed,
        is_prefetch: isPrefetch,
        country,
        city,
        ua: ua.slice(0, 180)
      };

      try {
        await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
          method: 'POST',
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(1800)
        });
      } catch (_) {
        // Ignore telemetry timeout so image always loads fast
      }
    }
  } catch (_) {}

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  try {
    const imgPath = path.join(process.cwd(), 'public', 'thomas_portrait.jpg');
    if (fs.existsSync(imgPath)) {
      const buf = fs.readFileSync(imgPath);
      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader('Content-Length', buf.length);
      return res.status(200).send(buf);
    }
  } catch (_) {}

  return res.redirect(302, 'https://thomasnguyen.online/thomas_portrait.jpg');
}
