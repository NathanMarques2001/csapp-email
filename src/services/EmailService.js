const transporter = require('../config/mail');

exports.sendMail = async (to, subject, text, html) => {
  return transporter.sendMail({
    from: `"CSApp" <csappprolinx@gmail.com>`,
    to,
    cc: "conexao@prolinx.com.br",
    subject,
    text,
    html
  });
};