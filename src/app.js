const express = require('express');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');
require('./config/dotenv');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/email', emailRoutes);

module.exports = app;