import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createPDFFromImages(imgDir, outFile, title) {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle(title);
  pdfDoc.setAuthor('Thomas Nguyen');
  pdfDoc.setSubject('Short-Form Video Editing & Retention Portfolio Blueprint');
  pdfDoc.setProducer('Thomas Nguyen Studio (thomasnguyen.online)');

  for (let i = 1; i <= 7; i++) {
    const imgPath = path.join(imgDir, `slide_${i}.png`);
    if (!fs.existsSync(imgPath)) {
      console.error(`File not found: ${imgPath}`);
      continue;
    }
    const imgBytes = fs.readFileSync(imgPath);
    const pngImage = await pdfDoc.embedPng(imgBytes);
    
    // Exact 1080x1080 point size for square 1:1 LinkedIn Carousel
    const page = pdfDoc.addPage([1080, 1080]);
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: 1080,
      height: 1080,
    });
    console.log(`Added Page ${i} from ${imgPath}`);
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outFile, pdfBytes);
  console.log(`Successfully generated PDF: ${outFile} (${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB)`);
}

// 1. Vietnamese PDF for LinkedIn
const viImagesDir = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public\\carousel_v1';
const viOutFile = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public\\Thomas_Nguyen_Portfolio_LinkedIn_Carousel_VI.pdf';
const viArtifactFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3\\Thomas_Nguyen_Portfolio_LinkedIn_Carousel_VI.pdf';

console.log('Generating Vietnamese LinkedIn Carousel PDF...');
await createPDFFromImages(viImagesDir, viOutFile, 'Tai Sao 95% Video Editor That Bai Khi Gui Link Drive - Thomas Nguyen Portfolio');
fs.copyFileSync(viOutFile, viArtifactFile);

// 2. English PDF for LinkedIn
const enImagesDir = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public\\carousel_en';
const enOutFile = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public\\Thomas_Nguyen_Portfolio_LinkedIn_Carousel_EN.pdf';
const enArtifactFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3\\Thomas_Nguyen_Portfolio_LinkedIn_Carousel_EN.pdf';

console.log('Generating English LinkedIn Carousel PDF...');
await createPDFFromImages(enImagesDir, enOutFile, 'Why 95% of Video Editors Fail Sending Drive Links - Thomas Nguyen Portfolio');
fs.copyFileSync(enOutFile, enArtifactFile);

console.log('All LinkedIn Carousel PDFs generated successfully!');
