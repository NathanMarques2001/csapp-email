const emailService = require('../services/EmailService.js');

exports.sendEmail = async (req, res) => {
  // Usamos 'let' para poder alterar o valor da variável html
  let { to, subject, text, html } = req.body;

  try {
    console.log("--- Debug Envio de Email ---");
    console.log("HTML recebido (primeiros 50 chars):", html ? html.substring(0, 50) : "null");

    // LÓGICA DE CORREÇÃO:
    // Se tiver HTML e ele NÃO começar com "<", assumimos que é Base64 vindo do front
    if (html && typeof html === 'string' && !html.trim().startsWith('<')) {
      console.log("Detectado Base64. Decodificando...");
      
      // Converte de Base64 para Texto normal (UTF-8)
      html = Buffer.from(html, 'base64').toString('utf-8');
      
      console.log("HTML Decodificado (primeiros 50 chars):", html.substring(0, 50));
    } else {
      console.log("HTML parece normal (não codificado), enviando como está.");
    }

    await emailService.sendMail(to, subject, text, html);
    
    console.log("Email enviado com sucesso!");
    return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error("Erro no envio:", error);
    return res.status(500).json({ message: 'Erro ao enviar e-mail', error });
  }
};