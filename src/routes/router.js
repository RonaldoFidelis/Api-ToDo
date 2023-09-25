const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');
const validar = require('../middleware/taskMiddleware');

router.get('/task', taskController.showTasks);
router.post('/task', validar.checkPost ,taskController.addTask);
router.put('/task',taskController.updateTask);
router.delete('/task',taskController.deleteTask);

module.exports = router;