import React, { useRef } from "react";

type NavProps = {
	scroll: () => void;
	scrolll: () => void;
	scrollhow: () => void;
	onOpen: () => void;
};

function Nav({ scroll, scrolll, scrollhow, onOpen }: NavProps) {
	return (
		<div className="nav-container">
			<div className="app-name-container">
				<h3>TaskMaster</h3>
			</div>
			<nav className="nav">
				<ul>
					<li>
						<a href="#" className="nav-link" onClick={scroll}>
							Add task
						</a>
					</li>
					<li>
						<a href="#" className="nav-link" onClick={scrolll}>
							View task
						</a>
					</li>
					<li>
						<a href="#" className="nav-link" onClick={scrollhow}>
							how it works
						</a>
					</li>
					<li>
						<button className="btn-documentation" onClick={onOpen}>
							documentation
						</button>
					</li>
					<li>
						<a href="#" onClick={scroll} className="free nav-link">
							free trial
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
