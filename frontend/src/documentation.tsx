import React from "react";

interface docPrps {
	onClose: () => void;
}

const Documentation: React.FC<docPrps> = ({ onClose }) => {
	const handleCloseClick = () => {
		onClose();
	};
	return (
		<div className="overlay">
			<div className="btn-close-conatiner">
				<button className="btn-closee" onClick={handleCloseClick}>
					&times;
				</button>
				<div className="documnt-container">
					<div>
						<h3 className="doc-title">1.database design schema</h3>
						<p>
							i used my-sql database and i craeted one table called tasks which
							stores information about tasks added by users.The table has
							5column(id,title,description,duedate,priority).{" "}
							<strong>id</strong> column serves as a unique identifier for each
							task and is automatically incremented with each new task added.
							The <strong>title</strong> and <strong>description</strong>{" "}
							columns allow users to provide a title and description for each
							task.The <strong>duedate</strong> column stores the due date for
							the task, allowing users to track deadlines. The{" "}
							<strong>priority</strong>
							column enables users to assign priority levels to tasks.User can
							add, edit, and delete tasks through the application's interface,
							and the data is stored in this table.
						</p>
					</div>
					<div>
						<h3 className="doc-title"> 2.api implementation</h3>
						<p>
							For retrieving tasks, I created an endpoint using the HTTP GET
							method. However, when attempting to use the HTTP PUT method for
							editing data, I encountered some issues and resorted to using the
							HTTP POST method. Similarly, for sending data, I utilized the HTTP
							POST method. Finally, I employed the HTTP DELETE method for
							deleting tasks.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Documentation;
