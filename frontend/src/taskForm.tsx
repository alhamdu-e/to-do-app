import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

type FormProps = {
	formSectionRef: React.RefObject<HTMLDivElement>;
	scrollget: React.RefObject<HTMLDivElement>;
};

export function Form({ formSectionRef, scrollget }: FormProps) {
	useEffect(() => {
		AOS.init({
			delay: 400,
			duration: 1200,
		});
	}, []);
	const [title, setTitle] = useState("");
	const [description, setDesc] = useState("");
	const [duedate, setDate] = useState("");
	const [priority, setPriority] = useState("High");

	const [titleError, setTitleError] = useState("");
	const [descriptionError, setDescriptionError] = useState("");
	const [dateError, setDateError] = useState("");
	const [hidden, setHidden] = useState(false);

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

	const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const titleRegex = /^[A-Za-z\s.,;:'"!?()-]+$/i;
		const descriptionRegex = /^[A-Za-z\s.,;:'"!?()-]+$/i;
		let formIsValid = true;

		if (!titleRegex.test(title)) {
			setTitleError(" number not allowed!");
			formIsValid = false;
			setHidden(true);
		} else {
			setTitleError("");
		}

		if (!descriptionRegex.test(description)) {
			setDescriptionError(" number not Allowed!");
			formIsValid = false;
			setHidden(true);
		} else {
			setDescriptionError("");
		}

		if (duedate === "") {
			setDateError("Due date is required");
			formIsValid = false;
			setHidden(true);
		} else {
			setDateError("");
		}

		if (!formIsValid) {
			return; // Don't submit the form if there are validation errors
		}

		const newTask = {
			title,
			description,
			duedate,
			priority,
		};
		try {
			const response = await fetch("http://localhost:3000/tasks", {
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

		// setTitle("");
		// setDesc("");
		// setDate("");
		// setPriority("");
	};
	const today = new Date().toISOString().split("T")[0];

	return (
		<div
			className="form--conainer"
			ref={formSectionRef}
			data-aos="fade-up-right">
			<div ref={scrollget}>
				<h2>add Your task</h2>
				<form className="form" onSubmit={handleClick}>
					<div>
						<label htmlFor="title">Task-Title</label>
						<input
							className="input"
							type="text"
							id="title"
							placeholder="title"
							onChange={handleChangeTitle}
						/>
						<p className="error-message">{titleError}</p>
					</div>
					<div>
						<label htmlFor="desc">Task-Description</label>
						<input
							className="input"
							type="text"
							id="desc"
							placeholder="description"
							onChange={handleChangeDesc}
						/>
						<p className="error-message">{descriptionError}</p>
					</div>
					<div>
						<label htmlFor="date"> Due-Date</label>
						<input
							className="input"
							type="date"
							id="date"
							onChange={handleChangeDate}
							min={today}
						/>
						<p className="error-message">{dateError}</p>
					</div>

					<div>
						<label htmlFor="priority">Task-Priority</label>

						<select
							name="priority"
							id="priority"
							className="input"
							onChange={handleChangePrority}>
							<option value="High">High</option>
							<option value="Midum">Medium</option>
							<option value="Low">Low</option>
						</select>
						<p className={`${hidden ? "hidden" : "none"}`}>good</p>
					</div>

					<div className="btn-container">
						<button className="btn" type="submit">
							Add Task
						</button>
					</div>
				</form>
			</div>
			<div className="todoimg-cont">
				<img src="ill8.jpg" alt="" className="todo" />
			</div>
		</div>
	);
}
