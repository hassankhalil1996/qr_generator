# URL to QR Code Generator

A simple command-line tool to generate a QR code from a URL and save it as both an image (.png) and a text file.

## Features
- Prompts the user for a URL.
- Generates a QR code image (`my_qr_img.png`).
- Saves the URL in a text file (`my_url.txt`).

## Requirements
- Node.js
- `inquirer`
- `qr-image`
- `fs` (native Node.js module)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/hassankhalil1996/qr_generator.git
2. Install dependencies:
   ```bash
   npm install inquirer qr-image
3. Run the script:
   node index.js
4. Enter the URL when prompted.

The QR code image and URL text file will be saved in the current directory.
