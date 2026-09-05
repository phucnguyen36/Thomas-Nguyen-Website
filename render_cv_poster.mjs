import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public';
const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3';
const targetProjectDir = 'D:\\PROJECTS\\260128 Faceless Instagram Era\\04 - CAROUSEL\\03 - Posting 3 image';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const htmlPath = path.join(publicDir, 'thomas_cv_poster.html').replace(/\\/g, '/');
const outFilePublic = path.join(publicDir, 'thomas_cv_poster.png');
const outFileBrain = path.join(brainDir, 'thomas_cv_poster.png');
const outFileProject = path.join(targetProjectDir, '04_thomas_cv_poster.png');

const fileUrl = `file:///${htmlPath}`;

console.log(`Rendering ${fileUrl} to 2K Retina...`);
// 1080 x 1440 at scale factor 2 = 2160 x 2880
const cmd = `"${edgePath}" --headless --disable-gpu --force-device-scale-factor=2 --window-size=1080,1440 --screenshot="${outFilePublic}" "${fileUrl}"`;
execSync(cmd);

fs.copyFileSync(outFilePublic, outFileBrain);
fs.copyFileSync(outFilePublic, outFileProject);

console.log('Successfully saved to:');
console.log(' -', outFilePublic);
console.log(' -', outFileBrain);
console.log(' -', outFileProject);
