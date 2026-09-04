import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public';
const outDir1 = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const tasks = [
  { html: 'neuron_post_1.html', file: 'ig_post_1.png' },
  { html: 'neuron_post_2.html', file: 'ig_post_2.png' },
  { html: 'neuron_post_3.html', file: 'ig_post_3.png' },
];

for (const t of tasks) {
  const htmlPath = path.join(publicDir, t.html).replace(/\\/g, '/');
  const outFile1 = path.join(outDir1, t.file);
  const outFile2 = path.join(publicDir, t.file);
  const fileUrl = `file:///${htmlPath}`;
  
  console.log(`Rendering ${t.file} from ${fileUrl}...`);
  const cmd = `"${edgePath}" --headless --disable-gpu --force-device-scale-factor=2 --window-size=1080,1350 --screenshot="${outFile1}" "${fileUrl}"`;
  execSync(cmd);
  fs.copyFileSync(outFile1, outFile2);
  console.log(`Saved: ${outFile2}`);
}

console.log('All 3 Instagram Visuals rendered successfully in 2K Retina via file:// protocol!');
