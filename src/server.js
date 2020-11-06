const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

// Routes
app.use(routes);

// Connect to DATABASE
const db = process.env.DATABASE;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});