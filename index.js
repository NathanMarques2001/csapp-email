const app = require('./src/app');
const PORT = 9090;

app.listen(PORT, () => {
  console.log(`Microserviço de e-mail rodando na porta ${PORT}`);
});