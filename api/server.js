require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/router.js');
const flowersRouter = require('./../flowers/router.js');

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use('/api/auth', authRouter);
server.use('/api/flowers', flowersRouter);

server.get('/', (req, res) => {
	res.status(200).json({ api: 'flowers growing' });
});

module.exports = server;
