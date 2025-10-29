const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db');
const userRoutes = require('./routes/user');
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);
app.listen(PORT, () => {
    console.log('App is running on PORT ', PORT);
    connectToDatabase();
});