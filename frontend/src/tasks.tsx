import React from "react";
import { useState, useEffect } from "react";

interface TaskItemProps {
	id: number;
	title: string;
	description: string;
	duedate: string;
	priority: string;
	onDelete: (taskId: number) => void;
	onEdit: (taskId: number) => void;
	colorPriority: string;
}

const Tasks: React.FC<TaskItemProps> = ({
	id,
	title,
	description,
	duedate,
	priority,
	onDelete,
	onEdit,
	colorPriority,
}) => {
	const [completed, setCompleted] = useState(() => {
		const storedCompleted = localStorage.getItem(`completed_${id}`);
		return storedCompleted ? JSON.parse(storedCompleted) : false;
	});

	useEffect(() => {
		localStorage.setItem(`completed_${id}`, JSON.stringify(completed));
	}, [completed, id]);

	const handleCheckboxChange = () => {
		setCompleted(!completed);
	};
	return (
		<div className={`task-container ${completed ? "task-completed" : ""}`}>
			<h3 className={`task-title  ${completed ? "line-through" : " "}`}>
				{title}
			</h3>
			<p className="task-description">{description}</p>
			<h4 className="task-date">{duedate}</h4>
			<div className="flex">
				<h4 className="priority">
					priority <span className={colorPriority}>{priority}</span>
				</h4>
				<div>
					<label htmlFor="completed" className="completed">
						completed
					</label>
					<input
						type="checkbox"
						name="completed"
						value="completed"
						onClick={handleCheckboxChange}
					/>
				</div>

				<button
					className={`edit-btn ${completed ? "disabled-button" : " "}`}
					onClick={() => onEdit(id)}>
					edit
				</button>
			</div>

			<button
				className={`delete-btn ${completed ? "transparent" : " "}`}
				onClick={() => onDelete(id)}>
				&times;
			</button>
		</div>
	);
};

export default Tasks;
