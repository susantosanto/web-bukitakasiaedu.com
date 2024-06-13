import FtpDeploy from 'ftp-deploy';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_SERVER,
  port: 21,
  localRoot: path.join(__dirname, 'dist'),
  remoteRoot: '/public_html/Project-coba/',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true,
};

ftpDeploy.deploy(config)
  .then(res => console.log('Deploy successful:', res))
  .catch(err => console.error('Deploy failed:', err));
