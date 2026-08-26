import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const outDir1 = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3';
const outDir2 = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const tasks = [
  {
    mode: 'portrait',
    w: 1080,
    h: 1440,
    file: 'services_pricing_portrait.png',
  },
  {
    mode: 'landscape',
    w: 1920,
    h: 1080,
    file: 'services_pricing_landscape.png',
  },
];

for (const t of tasks) {
  const outFile1 = path.join(outDir1, t.file);
  const outFile2 = path.join(outDir2, t.file);
  const url = `http://localhost:5173/services_pricing.html?mode=${t.mode}`;
  console.log(`Rendering 2K Ultra HD ${t.mode.toUpperCase()} Rate Card (Scale Factor 2x)...`);
  
  // --force-device-scale-factor=2 renders true 2K/4K high-density pixels
  const cmd = `"${edgePath}" --headless --disable-gpu --force-device-scale-factor=2 --window-size=${t.w},${t.h} --screenshot="${outFile1}" "${url}"`;
  execSync(cmd);
  fs.copyFileSync(outFile1, outFile2);
  console.log(`Saved 2K Ultra HD: ${outFile2}`);
}

console.log('All 2K Rate Cards rendered successfully!');
