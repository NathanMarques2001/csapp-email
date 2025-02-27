const nodemailer = require('nodemailer');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Classe para gerenciar o envio de emails
class EmailService {
    constructor() {
        // Configura o transporter do nodemailer com as credenciais do arquivo .env
        this.transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE, // Serviço de email (ex: gmail)
            auth: {
                user: process.env.EMAIL_USER, // Usuário de email
                pass: process.env.EMAIL_PASS // Senha do email
            }
        });
    }

    // Método assíncrono para enviar emails
    async sendEmail(from, to, subject, text) {
        // Define as opções do email (remetente, destinatário, assunto e texto)
        let options = {
            from: from, // Remetente do email
            to: to, // Destinatário do email
            subject: subject, // Assunto do email
            text: text // Corpo do email
        };

        try {
            // Tenta enviar o email
            console.log('Enviando email...');
            await this.transporter.sendMail(options); // Envia o email usando o transporter configurado
            console.log('Email enviado com sucesso!'); // Loga sucesso se o email for enviado
        } catch (error) {
            // Se houver um erro, loga o erro
            console.error('Erro ao enviar email:', error);
        }
    }
}

// Exporta a classe EmailService para que possa ser usada em outros arquivos
module.exports = EmailService;
