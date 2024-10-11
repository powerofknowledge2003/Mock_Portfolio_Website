// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const DBConnection = require('./config/db');
const skill = require('./routes/skillRoute');
const app = express();
const PORT = process.env.PORT || 3001;
DBConnection();
app.use(cors({
    origin: 'http://localhost:5173', // React app URL
    methods: ['GET', 'POST'], // Allow specific methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
  }));
  app.use(express.json());
app.use(bodyParser.json());
app.use('/api', skill);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
