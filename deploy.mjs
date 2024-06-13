import FtpDeploy from 'ftp-deploy';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_SERVER,
  port: process.env.FTP_PORT || 21,
  localRoot: path.join(__dirname, 'dist'),
  remoteRoot: '/public_html/Project-coba',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true
};

console.log('Starting FTP deployment with config:', config);

ftpDeploy.on('uploading', function(data) {
  console.log(`Uploading ${data.transferredFileCount} of ${data.totalFilesCount}: ${data.filename}`);
});

ftpDeploy.on('uploaded', function(data) {
  console.log(`Uploaded: ${data.filename}`);
});

ftpDeploy.deploy(config)
  .then(res => console.log('Deploy successful:', res))
  .catch(err => console.error('Deploy failed:', err));
