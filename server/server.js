const express = require('express');
const { connectToDatabase } = require('./db');

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log('App is running on PORT ', PORT);
    connectToDatabase()
})