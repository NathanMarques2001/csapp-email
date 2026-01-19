const emailService = require('../services/EmailService.js');

exports.sendEmail = async (req, res) => {
  let { to, subject, text, html } = req.body;

  try {
    console.log("--- Debug Envio de Email ---");
    console.log("HTML recebido (primeiros 50 chars):", html ? html.substring(0, 50) : "null");

    // Não precisamos decodificar Base64, HTML já é normal
    if (!html || typeof html !== 'string') {
      html = '';
    }

    await emailService.sendMail(to, subject, text, html);

    console.log("Email enviado com sucesso!");
    return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error("Erro no envio:", error);
    return res.status(500).json({ message: 'Erro ao enviar e-mail', error });
  }
};
