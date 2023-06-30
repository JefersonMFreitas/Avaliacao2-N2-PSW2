const mongoose = require('mongoose');

// Configuração do banco de dados MongoDB
mongoose.connect('mongodb+srv://jefersonfreitas:<@Rcjm127385>@campeonatofutebol.wos08hr.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado ao banco de dados MongoDB');
})
.catch((error) => {
  console.error('Erro ao conectar ao banco de dados MongoDB:', error);
});