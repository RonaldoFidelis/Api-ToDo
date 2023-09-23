const express = require('express');
const router = express.Router();

const taskController = require('./controllers/taskController');
const valida = require('./middleware/taskMiddleware');

router.get('/task', taskController.getAll);
router.post('/task', valida.fieldTitle ,taskController.addTask);
router.put('/task',taskController.updateTask);
router.delete('/task',taskController.deleteTask);

module.exports = router;