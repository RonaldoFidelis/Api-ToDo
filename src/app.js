const express = require('express');
const server = express();
const router = require('./router');

server.use(router);

module.exports = server;