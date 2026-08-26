import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createPricingPDF() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle('Thomas Nguyen — Production Services & Rate Card');
  pdfDoc.setAuthor('Thomas Nguyen');
  pdfDoc.setSubject('Official Video Editing Services & Pricing Rate Card');
  pdfDoc.setProducer('Thomas Nguyen Studio (thomasnguyen.online)');

  // Embed Portrait Rate Card (1080x1440)
  const imgPath = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public\\services_pricing_portrait.png';
  const imgBytes = fs.readFileSync(imgPath);
  const pngImage = await pdfDoc.embedPng(imgBytes);
  
  const page = pdfDoc.addPage([1080, 1440]);
  page.drawImage(pngImage, {
    x: 0,
    y: 0,
    width: 1080,
    height: 1440,
  });

  const pdfBytes = await pdfDoc.save();
  const outFile1 = 'C:\\Users\\Admin\\antigravity\\01.-Thomas-Nguyen-Portfolio\\public\\Thomas_Nguyen_Services_Rate_Card.pdf';
  const outFile2 = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52ae419b-f5ac-43a4-aadf-b440160367e3\\Thomas_Nguyen_Services_Rate_Card.pdf';
  
  fs.writeFileSync(outFile1, pdfBytes);
  fs.writeFileSync(outFile2, pdfBytes);
  console.log(`Saved PDF to ${outFile1} and brain artifacts!`);
}

createPricingPDF();
