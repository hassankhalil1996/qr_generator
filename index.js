import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    message: 'Please type in your URL:',
    name: 'URL'
  }])
  .then((answers) => {
    const url = answers.URL;

    // Generate QR code and save it as an image
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    // Save the URL in a text file
    fs.writeFileSync('url.txt', url, 'utf8');
    
    console.log('QR code generated and URL saved to my_url.txt');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error('Prompt could not be rendered in this environment.');
    } else {
      // Something else went wrong
      console.error('An error occurred:', error);
    }
  });