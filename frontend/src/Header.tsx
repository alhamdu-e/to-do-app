type NavProps = {
	scrollget: () => void;
	scrollmore: () => void;
};

function Header({ scrollget, scrollmore }: NavProps) {
	return (
		<div className="header">
			<div className="hero">
				<h1>
					Stay organized on top of tasks.Empower Your Every Day, One Task at a
					Time
				</h1>
				<p>
					Elevate Your Productivity with Taskmaster. Empower yourself to conquer
					tasks like a pro. Seamlessly create, organize, and prioritize your
					to-dos. From work projects to personal goals, MyToDo supercharges your
					efficiency
				</p>
				<button className="button margin" onClick={scrollget}>
					get started
				</button>
				<button className="button  shadow" onClick={scrollmore}>
					{" "}
					learn more
				</button>
			</div>
			<div>
				<img src="ill7.jpg" alt="" className="img" />
			</div>
		</div>
	);
}

export default Header;
