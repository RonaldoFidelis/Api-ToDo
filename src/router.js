const express = require('express');
const router = express.Router();
const taskController = require('./controllers/taskController');

router.get('/task', taskController.getAll);

module.exports = router;