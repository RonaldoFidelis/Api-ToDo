const express = require('express');
const routes = require('./src/routes/router');

class App {
	constructor() {
		this.app = express();
		this.middleware();
		this.router();
	}

	middleware() {
		this.app.use(express.json());
	}

	router(){
		this.app.use(routes);
	}
}

module.exports = new App().app;