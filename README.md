# batch-image-compress-watermark

Used in resizing and adding watermark to batch jpg and png files.

## Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```sh
    cd batch-image-compress-watermark
    ```

3. Install the dependencies:
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


Created with the use of Github Copilot