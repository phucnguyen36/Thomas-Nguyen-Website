import { execSync } from 'child_process';
import path from 'path';

const outDir = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// We can create specific HTML viewports or use fullpage screenshot and crop with canvas in node!
// Let's create an HTML snapshot capture page that displays each section directly at 0px offset:
console.log('Generating clean section shots...');

// We can take full page screenshot at 1440x3600
const fullPage = path.join(outDir, 'shot_desktop_full.png');
execSync(`"${edgePath}" --headless --disable-gpu --window-size=1440,3600 --screenshot="${fullPage}" "http://localhost:5173/"`);

console.log('Fullpage captured:', fullPage);
