const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user.route');
const captainRoute = require('./routes/captain.route');


connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.use('/users', userRoute);
app.use('/captains', captainRoute);


module.exports = app;