const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

//const secretsPath = path.join('C:\\Users\\NATHAN.BRANDAO\\Documents\\dev\\scrts\\mail.json');
const secretsPath = path.join('/var/www/scrt/mail.json');

function loadSecrets() {
  try {
    const rawData = fs.readFileSync(secretsPath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Erro ao carregar secrets.json:', error.message);
    process.exit(1);
  }
}

const secrets = loadSecrets();

const transporter = nodemailer.createTransport({
  host: secrets.SMTP_HOST,
  port: secrets.SMTP_PORT,
  secure: secrets.SMTP_SECURE,
  auth: {
    user: secrets.SMTP_USER,
    pass: secrets.SMTP_PASS
  }
});

module.exports = transporter;
