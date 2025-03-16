const emailService = require('../services/EmailService');

exports.sendEmail = async (req, res) => {
  const { to, subject, text, html } = req.body;
  try {
    await emailService.sendMail(to, subject, text, html);
    return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao enviar e-mail', error });
  }
};