import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const outDir1 = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3';
const outDir2 = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const tasks = [
  { lang: 'vi', file: 'thumbnail_3x4_vi.png' },
  { lang: 'en', file: 'thumbnail_3x4_en.png' },
];

for (const t of tasks) {
  const outFile1 = path.join(outDir1, t.file);
  const outFile2 = path.join(outDir2, t.file);
  const url = `http://localhost:5173/thumbnail_maker.html?lang=${t.lang}`;
  console.log(`Rendering 3:4 Thumbnail (${t.lang.toUpperCase()})...`);
  const cmd = `"${edgePath}" --headless --disable-gpu --window-size=1080,1440 --screenshot="${outFile1}" "${url}"`;
  execSync(cmd);
  fs.copyFileSync(outFile1, outFile2);
  console.log(`Saved ${outFile2}`);
}

console.log('All 3:4 Thumbnails rendered successfully!');
