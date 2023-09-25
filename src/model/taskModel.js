const connection = require('../connection/connection');

const showTasks = async () => {
	const query = 'SELECT * FROM tasks;';
	const [tasks] = await connection.execute(query);
	return tasks;
};

const addTask =  async (task) => {
	const data = new Date(Date.now()).toUTCString();
	const { title } = task;
	const query = `INSERT INTO tasks(TITLE,STATUS,CREATE_AT) VALUES('${title}','Pendente','${data}')`;
	const addTask = await connection.execute(query);

	return addTask;
};

const updateTask =  async (task) => {
	const { ID ,title } = task;

	const query = `UPDATE tasks SET title='${title}' WHERE ID='${ID}';`;
	const updateTask = await connection.execute(query);

	return updateTask;
};

const deleteTask =  async (task) => {
	const {ID} = task;
	const query = `DELETE FROM tasks WHERE ID=${ID};`;
	const deleteTask = await connection.execute(query);

	return deleteTask;
};

module.exports = {
	showTasks,
	addTask,
	updateTask,
	deleteTask,
};