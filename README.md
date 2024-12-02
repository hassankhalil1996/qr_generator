URL to QR Code Generator
A simple command-line tool to generate a QR code from a URL and save it as both an image (.png) and a text file.

Features
Prompts the user for a URL.
Generates a QR code image (my_qr_img.png).
Saves the URL in a text file (my_url.txt).
Requirements
Node.js
inquirer
qr-image
fs (native Node.js module)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/hassankhalil1996/qr-code-generator.git
Install dependencies:
bash
Copy code
npm install inquirer qr-image
Usage
Run the script:
bash
Copy code
node index.js
Enter the URL when prompted.
The QR code image and URL text file will be saved in the current directory.
