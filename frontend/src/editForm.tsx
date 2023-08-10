import React from "react";
import { useState } from "react";

interface TaskItemProps {
	id: number;
	title: string;
	description: string;
	duedate: string;
	priority: string;
	onClose: () => void;
}

const Edit: React.FC<TaskItemProps> = ({
	id,
	title,
	description,
	duedate,
	priority,
	onClose,
}) => {
	const [showOverlay, setShowOverlay] = useState(true);
	const [idd, setId] = useState(id);
	const [titlee, setTitle] = useState(title);
	const [descriptionn, setDesc] = useState(description);
	const [duedatee, setDate] = useState(duedate);
	const [priorityy, setPriority] = useState(priority);
	const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};
	const handleChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDesc(event.target.value);
	};
	const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
	};

	const handleChangePrority = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setPriority(event.target.value);
	};

	const handleCloseClick = () => {
		setShowOverlay(false);
		onClose();
	};

	const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newTask = {
			idd,
			titlee,
			descriptionn,
			duedatee,
			priorityy,
		};

		try {
			const response = await fetch("http://localhost:5000/sendform", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTask),
			});

			if (response.ok) {
				window.location.reload();
			} else {
				console.error("Failed to create task");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	const today = new Date().toISOString().split("T")[0];

	return (
		<>
			{showOverlay && (
				<div className="overlay">
					<div className="btn-close-conatiner">
						<button className="btn-close" onClick={handleCloseClick}>
							&times;
						</button>
						<div className="edit-form-container">
							<h2 className="edit">edit Your task</h2>
							<form className="edit-form" onSubmit={handleClick}>
								<div>
									<label htmlFor="titl">Task-Title</label>
									<input
										className="input"
										type="text"
										id="titl"
										placeholder="title"
										onChange={handleChangeTitle}
										value={titlee}
									/>
								</div>
								<div>
									<label htmlFor="des">Task-Description</label>
									<input
										className="input"
										type="text"
										id="des"
										placeholder="description"
										onChange={handleChangeDesc}
										value={descriptionn}
									/>
								</div>
								<div>
									<label htmlFor="dat"> Due-Date</label>
									<input
										className="input"
										type="date"
										id="dat"
										onChange={handleChangeDate}
										value={duedatee}
										min={today}
									/>
								</div>

								<div>
									<label htmlFor="priorityy">Task-Priority</label>

									<select
										name="priority"
										id="priorityy"
										className="input"
										onChange={handleChangePrority}>
										<option value="High">High</option>
										<option value="Midum">Medium</option>
										<option value="Low">Low</option>
									</select>
								</div>

								<div className="btn-container">
									<button className="btn btnedit" type="submit">
										save
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default Edit;
