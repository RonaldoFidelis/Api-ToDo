const connection = require('./connection');

const getAll = async () => {
	const query = 'SELECT * FROM tasks;';
	const [tasks] = await connection.execute(query);
	return tasks;
};

const addTask =  async (task) => {
	const data = new Date(Date.now()).toUTCString();
	const { title } = task;
	const query = `INSERT INTO tasks(TITLE,STATUS,CREATE_AT) VALUES('${title}','Pendente','${data.toString()}')`;
	const addTask = await connection.execute(query);

	return addTask;
};

module.exports = {
	getAll,
	addTask,
};