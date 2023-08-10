import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Feature() {
	useEffect(() => {
		AOS.init({
			delay: 400,
			duration: 1500,
		});
	}, []);
	return (
		<div className="feature">
			<div className="" data-aos="fade-up">
				<img src="ill9.jpg" alt="" className="feature-img" />
			</div>

			<div className="div-feature-con" data-aos="fade-up">
				<h2 className="title">Empower Your Day, One Task at a Time.</h2>
				<p className="desc">
					Taskmaster is a user-friendly to-do app that keeps you organized and
					productive. Easily create, manage, and prioritize tasks for various
					projects, commitments, or daily chores.Whether you're juggling
					multiple projects, personal commitments, or daily chores, this app has
					got you covered.
				</p>
			</div>

			<div className="div-feature-con" data-aos="fade-up">
				<h2 className="title">Elevate Your Productivity.</h2>
				<p className="desc">
					Never again waste time wondering what tasks to tackle! taskmaster will
					craft a fully personalized weekly task plan just for you. It
					guarantees you accomplish all your goals and responsibilities,
					regardless of your busy schedule!
				</p>
			</div>

			<div className="align" data-aos="fade-up">
				<img src="ill11.jpg" alt="" className="feature-img" />
			</div>
		</div>
	);
}

export default Feature;
