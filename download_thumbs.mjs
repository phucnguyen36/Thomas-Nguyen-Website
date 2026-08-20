import fs from 'fs';
import path from 'path';

const outDir = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public';
const ids = ['1212586126', '1212585180', '1212585217'];

async function downloadHDThumbnail(id, index) {
  try {
    const res = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`);
    const data = await res.json();
    let thumbUrl = data.thumbnail_url;
    // Replace 200x150 with high-res 960x1200 or 1280
    const hdUrl = thumbUrl.replace(/_200x150.*/, '_960');
    console.log(`Downloading HD thumb for ${id}: ${hdUrl}`);
    const imgRes = await fetch(hdUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const filePath = path.join(outDir, `reel_thumb_${index}.jpg`);
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved ${filePath}`);
  } catch (e) {
    console.error(`Error downloading thumb ${id}:`, e);
  }
}

for (let i = 0; i < ids.length; i++) {
  await downloadHDThumbnail(ids[i], i + 1);
}
console.log('All HD thumbnails downloaded!');
