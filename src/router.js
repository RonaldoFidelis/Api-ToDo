const express = require('express');
const router = express.Router();
const taskController = require('./controllers/taskController');

router.get('/task', taskController.getAll);
router.post('/task', taskController.addTask);

module.exports = router;