const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const morgan = require('morgan')
const planetRouter = require('./routes/planets/planet.router');
const launchesRouter = require('./routes/launches/launches.router');

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/planets', planetRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname,'..','public','index.html'));
}); 

module.exports = app