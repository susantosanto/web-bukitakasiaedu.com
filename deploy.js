const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_SERVER,
  port: 21,
  localRoot: __dirname + '/dist',
  remoteRoot: '/public_html/Project-coba/',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true,
};

ftpDeploy.deploy(config)
  .then(res => console.log('Deploy successful:', res))
  .catch(err => console.error('Deploy failed:', err));
