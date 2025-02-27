const EmailService = require('./services/EmailService');
const remetente = 'Fulano de tal<fulanodasilva@email.com>';
const destinatario = '<beltrano@email.com>';
const assunto = 'Teste de envio de email';
const texto = 'Este é um teste de envio de email.';

// Instanciando a classe EmailService
const emailService = new EmailService();

// Enviando o email
emailService.sendEmail(remetente, destinatario, assunto, texto);
