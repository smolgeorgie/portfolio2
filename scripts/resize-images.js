const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../images');
const outputDir = path.join(inputDir, '600w');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f =>
  /\.(webp|jpg|jpeg|png)$/i.test(f)
);

(async () => {
  for (const file of files) {
    const input = path.join(inputDir, file);
    const outputName = path.basename(file, path.extname(file)) + '.webp';
    const output = path.join(outputDir, outputName);

    const meta = await sharp(input).metadata();
    const needsResize = meta.width > 600;

    await sharp(input)
      .resize(needsResize ? { width: 600, withoutEnlargement: true } : undefined)
      .webp({ quality: 82 })
      .toFile(output);

    const status = needsResize ? `${meta.width}px → 600px` : `${meta.width}px (unchanged)`;
    console.log(`✓ ${file} [${status}]`);
  }

  console.log(`\nDone — ${files.length} images written to images/600w/`);
})();
