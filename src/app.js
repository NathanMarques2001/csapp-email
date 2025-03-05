const express = require('express');
const emailRoutes = require('./routes/emailRoutes');
require('./config/dotenv');

const app = express();
app.use(express.json());
app.use('/email', emailRoutes);

module.exports = app;