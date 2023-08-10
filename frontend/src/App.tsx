import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { Form } from "./taskForm";
import Header from "./Header";
import Tasks from "./tasks";
import Feature from "./feature";
import Edit from "./editForm";
import Nav from "./nav";
import Footer from "./footer";
import Documentation from "./documentation";

interface Task {
	id: number;
	title: string;
	description: string;
	duedate: string;
	priority: string;
}
function App() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [updattask, setUpdated] = useState<Task[]>([]);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const formSectionRef = useRef<HTMLDivElement | null>(null);
	const formSection = useRef<HTMLDivElement | null>(null);
	const howWorks = useRef<HTMLDivElement | null>(null);
	const learnMore = useRef<HTMLDivElement | null>(null);
	const getStarted = useRef<HTMLDivElement | null>(null);
	const [isDocumentopen, setDocumentOpen] = useState(false);
	const scrollAdd = () => {
		if (formSectionRef.current) {
			window.scrollTo({
				top: formSectionRef.current.offsetTop,
				behavior: "smooth",
			});
		}
	};

	const scrollGet = () => {
		if (getStarted.current) {
			window.scrollTo({
				top: getStarted.current.offsetTop,
				behavior: "smooth",
			});
		}
	};

	const scrollmore = () => {
		if (learnMore.current) {
			window.scrollTo({
				top: learnMore.current.offsetTop,
				behavior: "smooth",
			});
		}
	};

	const scrollviewtask = () => {
		if (formSection.current) {
			window.scrollTo({
				top: formSection.current.offsetTop,
				behavior: "smooth",
			});
		}
	};

	const scrollhow = () => {
		if (howWorks.current) {
			window.scrollTo({
				top: howWorks.current.offsetTop,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		fetch("http://localhost:5000/message")
			.then((res) => res.json())
			.then((data) => setTasks(data));
	}, []);

	const handleDelete = (taskId: number) => {
		// Delete task from client-side state
		const updatedTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(updatedTasks);

		// Send DELETE request to server
		fetch(`http://localhost:5000/tasks/${taskId}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.message);
			})
			.catch((error) => {
				console.error("Error deleting task:", error);
			});
	};

	const handleCloseEditModal = () => {
		setIsEditModalOpen(false);
	};

	const handleCloseDocModal = () => {
		setDocumentOpen(false);
	};
	const handleOpenDocModal = () => {
		setDocumentOpen(true);
	};

	const handleEdit = (taskId: number) => {
		fetch(`http://localhost:5000/tasks/${taskId}`)
			.then((res) => res.json())
			.then((data) => {
				setUpdated(data);
				setIsEditModalOpen(true);
			})
			.catch((error) => {
				console.error("Error fetching task data:", error);
			});
	};
	console.log(tasks);
	const handlePriorityFilter = (priority: string) => {
		return tasks.filter((task) => task.priority === priority);
	};

	const getPriorityColor = (priority: string) => {
		switch (priority) {
			case "High":
				return "red";
			case "Midum":
				return "yellow";
			case "Low":
				return "green";
			default:
				return "gray";
		}
	};
	return (
		<div className="App">
			<Nav
				scroll={scrollAdd}
				scrolll={scrollviewtask}
				scrollhow={scrollhow}
				onOpen={handleOpenDocModal}></Nav>
			<Header scrollget={scrollAdd} scrollmore={scrollmore} />
			<div ref={learnMore}>
				<div ref={howWorks}>
					<Feature />
				</div>
			</div>

			<Form formSectionRef={formSectionRef} scrollget={getStarted} />
			<div className="grid-task-container " ref={formSection}>
				{handlePriorityFilter("High").map((task) => (
					<Tasks
						key={task.id}
						id={task.id}
						title={task.title}
						description={task.description}
						duedate={task.duedate}
						priority={task.priority}
						onDelete={(taskId) => handleDelete(taskId)}
						onEdit={(taskid) => handleEdit(taskid)}
						colorPriority={getPriorityColor(task.priority)}
					/>
				))}

				{handlePriorityFilter("Midum").map((task) => (
					<Tasks
						key={task.id}
						id={task.id}
						title={task.title}
						description={task.description}
						duedate={task.duedate}
						priority={task.priority}
						onDelete={(taskId) => handleDelete(taskId)}
						onEdit={(taskid) => handleEdit(taskid)}
						colorPriority={getPriorityColor(task.priority)}
					/>
				))}

				{handlePriorityFilter("Low").map((task) => (
					<Tasks
						key={task.id}
						id={task.id}
						title={task.title}
						description={task.description}
						duedate={task.duedate}
						priority={task.priority}
						onDelete={(taskId) => handleDelete(taskId)}
						onEdit={(taskid) => handleEdit(taskid)}
						colorPriority={getPriorityColor(task.priority)}
					/>
				))}
			</div>

			{isEditModalOpen &&
				updattask.map((task) => (
					<Edit
						key={task.id}
						id={task.id}
						title={task.title}
						description={task.description}
						duedate={task.duedate}
						priority={task.priority}
						onClose={handleCloseEditModal}
					/>
				))}
			{isDocumentopen && <Documentation onClose={handleCloseDocModal} />}
			<Footer />
		</div>
	);
}

export default App;
