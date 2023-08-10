const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const mysql = require("mysql");

app.use(bodyParser.json());

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mytodolist",
});

// const sql = `CREATE TABLE tasks(task_id INT AUTO_INCREMENT PRIMARY
//  KEY, title VARCHAR(255) NOT NULL, description VARCHAR(600), duedate DATE
//  , priority VARCHAR(20),user_id INT,FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE)`;
// conn.query(sql, (err, result) => {
// 	if (err) throw err;
// 	console.log("table crated succesfully");
// });

let tasks = [];
let updateTasks = {};

app.post("/tasks", (req, res) => {
	const newTask = req.body;
	tasks.push(newTask);
	const lasteElemnt = tasks.pop();
	const { title, description, duedate, priority } = lasteElemnt;
	const sql = `Insert into task (title,description,duedate,priority) values ('${title}','${description}','${duedate}','${priority}') `;
	conn.query(sql, function (err, result) {
		if (err) throw err;
		console.log("inserted");
	});

	res.status(201).json(newTask);
});

app.post("/sendform", (req, res) => {
	const updateTask = req.body;
	updateTasks = updateTask;
	console.log(updateTasks);

	const { idd, titlee, descriptionn, duedatee, priorityy } = updateTasks;
	console.log(idd, titlee, descriptionn, duedatee, priorityy);
	const sql = `UPDATE task SET title = '${titlee}', description = '${descriptionn}', duedate = '${duedatee}', priority = '${priorityy}' WHERE id = ${idd}`;
	conn.query(sql, function (err, result) {
		if (err) throw err;
		console.log("updated");
	});
	res.status(201).json();
});
// app.put("/update", (req, res) => {
// 	console.log("hiii");
// 	// console.log(idd, titlee, descriptionn, duedatee, priorityy);
// 	const { idd, titlee, descriptionn, duedatee, priorityy } = updateTasks;
// 	console.log(idd, titlee, descriptionn, duedatee, priorityy);
// 	// const sql = `UPDATE task set title = '${titlee}' description='${descriptionn}', duedate ='${duedatee}', priority='${priorityy}' WHERE id=${idd}`;
// 	// conn.query(sql, function (err, result) {
// 	// 	if (err) throw err;
// 	// 	console.log("inserted");
// 	// });

// 	// res.status(201).json(newTask);
// });

app.get("/message", (req, res) => {
	conn.query("select * from task", function (err, result) {
		if (err) throw err;

		const taskss = result.map((task) => ({
			id: task.id,
			title: task.title,
			description: task.description,
			duedate: task.duedate,
			priority: task.priority,
		}));
		res.json(taskss);
	});
});

app.delete("/tasks/:id", (req, res) => {
	const taskId = req.params.id;
	// Delete the task with the specified taskId from the database
	const sql = `DELETE FROM task WHERE id = ?`;
	conn.query(sql, [taskId], (err, result) => {
		if (err) {
			console.error("Error deleting task:", err);
			return;
		}

		console.log("Task deleted successfully");
	});
});

app.get("/tasks/:id", (req, res) => {
	const taskId = req.params.id;
	const sql = `select * from task where id = ? `;
	conn.query(sql, [taskId], (err, result) => {
		if (err) {
			console.log("error", err);
			return;
		}
		const task = result.map((task) => ({
			id: task.id,
			title: task.title,
			description: task.description,
			duedate: task.duedate,
			priority: task.priority,
		}));
		res.json(task);
	});
});
app.listen(5000, function () {
	console.log("server startes at 5000");
});
