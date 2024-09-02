# batch-image-compress-watermark

Used in resizing and adding watermark to batch jpg and png files.

## Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

Update the `input_settings.json` file to configure the watermark text, opacity, compression quality, and maximum image width:

```json
{
    "watermark_text": "AYLSWORTH",
    "watermark_opacity": 0.3,
    "compression_quality": 50,
    "max_image_width": 1200
}
```

### Parameters
* watermark_text: The text to be used as the watermark on the images.
* watermark_opacity: The opacity of the watermark text, ranging from 0 (completely transparent) to 1 (completely opaque).
* compression_quality: The quality of the image compression, ranging from 0 (lowest quality, highest compression) to 100 (highest quality, lowest compression).
* max_image_width: The maximum width of the resized images in pixels. Images wider than this value will be resized to this width while maintaining the aspect ratio.

Created with the use of Github Copilot