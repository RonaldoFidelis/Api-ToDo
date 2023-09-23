const tasksModel = require('../model/taskModel');

const getAll = async (req,res) => {
	const tasks = await tasksModel.getAll();
	return res.status(200).json(tasks);
};

const addTask = async (req,res) => {
	const newTask = await tasksModel.addTask(req.body);
	return res.status(201).json(newTask);
};

const updateTask = async (req,res) => {
	const updateTask = await tasksModel.updateTask(req.body);
	return res.status(200).json(updateTask);
};

const deleteTask = async (req,res) => {
	const task = await tasksModel.deleteTask(req.body);
	return res.status(200).json(task);
};

module.exports = {
	getAll,
	addTask,
	updateTask,
	deleteTask,
};