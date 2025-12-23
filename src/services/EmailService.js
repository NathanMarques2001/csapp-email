const transporter = require('../config/mail');

exports.sendMail = async (to, subject, text, html) => {
  return transporter.sendMail({
    from: `"CSApp" <csappprolinx@gmail.com>`,
    to,
    subject,
    text,
    html
  });
};