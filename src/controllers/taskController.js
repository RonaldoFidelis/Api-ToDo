const tasksModel = require('../model/taskModel');

const showTasks = async (req,res) => {
	const tasks = await tasksModel.getAll();
	return res.status(200).json(tasks);
};

const addTask = async (req,res) => {
	tasksModel.addTask(req.body);
	return res.status(201).json({ message: 'Tarefa cadastrada!', task: req.body.title });
};

const updateTask = async (req,res) => {
	tasksModel.updateTask(req.body);
	return res.status(200).json({ message: 'Tarefa atualizada!', task: req.body.title });
};

const deleteTask = async (req,res) => {
	tasksModel.deleteTask(req.body);
	return res.status(200).json({ message: 'Tarefa apagada.' });
};

module.exports = {
	showTasks,
	addTask,
	updateTask,
	deleteTask,
};