const transporter = require('../config/mail');

exports.sendMail = async (to, subject, text, html) => {
  return transporter.sendMail({
    from: `"CSApp" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text,
    html
  });
};