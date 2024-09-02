const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function addWatermark(inputFile, outputFile, watermarkText, opacity, fontSize, fontColor) {
    sharp(inputFile)
        .resize({ width: maxWidth })
        .jpeg({ quality: compressionQuality })
        .composite([
            {
                input: Buffer.from(`<svg viewBox="0 0 1200 600"><text x="95%" y="95%" fill="${fontColor}" opacity="${opacity}" font-size="${fontSize}" text-anchor="end" dominant-baseline="text-after-edge"> ${watermarkText}</text></svg>`),
                blend: 'over'
            }
        ])
        .toFile(outputFile, (err, info) => {
            if (err) {
                console.error('Error processing image:', err);
            } else {
                console.log('Image processed:', info);
            }
        });
}

function resizeAndCompressImages(inputDir, outputDir, watermarkText, opacity) {
    fs.readdir(inputDir, (err, files) => {
        if (err) {
            console.error('Error reading input directory:', err);
            return;
        }

        files.forEach(file => {
            const inputFile = path.join(inputDir, file);
            const outputFile = path.join(outputDir, file);

            if (file.endsWith('.png') || file.endsWith('.jpg')) {
                addWatermark(inputFile, outputFile, watermarkText, opacity, 100, 'white');
            }
        });
    });
}

const inputDir = `${__dirname}/input_dir`;
const outputDir = `${__dirname}/output_dir`;

const {
    watermark_opacity, 
    watermark_text, 
    compression_quality, 
    max_image_width
} = require('./input_settings.json')


const compressionQuality = compression_quality
const maxWidth = max_image_width
resizeAndCompressImages(inputDir, outputDir, watermark_text, watermark_opacity);