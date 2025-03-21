const express = require('express');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/email', emailRoutes);

module.exports = app;