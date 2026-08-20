import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const outDir1 = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3';
const outDir2 = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public\\carousel_v1';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

if (!fs.existsSync(outDir2)) {
  fs.mkdirSync(outDir2, { recursive: true });
}

// Remove old slide_8 if present
try {
  if (fs.existsSync(path.join(outDir2, 'slide_8.png'))) fs.unlinkSync(path.join(outDir2, 'slide_8.png'));
  if (fs.existsSync(path.join(outDir1, 'slide_8.png'))) fs.unlinkSync(path.join(outDir1, 'slide_8.png'));
} catch (e) {}

for (let i = 1; i <= 7; i++) {
  const outFile1 = path.join(outDir1, `slide_${i}.png`);
  const outFile2 = path.join(outDir2, `slide_${i}.png`);
  const url = `http://localhost:5173/carousel_maker.html?slide=${i}`;
  console.log(`Rendering clean slide ${i}...`);
  const cmd = `"${edgePath}" --headless --disable-gpu --window-size=1080,1080 --screenshot="${outFile1}" "${url}"`;
  execSync(cmd);
  fs.copyFileSync(outFile1, outFile2);
}
console.log('All 7 Impeccable clean slides rendered successfully!');
