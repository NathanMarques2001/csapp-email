const transporter = require('../config/mail');

exports.sendMail = async (to, subject, text, html) => {
  return transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
    html
  });
};