import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
function Footer() {
	return (
		<div className="footer">
			<div>
				<ul>
					<li className="info">follow us</li>
					<li className="margin-bottom">
						<a href="#">
							<FaInstagram /> instagram
						</a>
					</li>
					<li className="margin-bottom">
						<a href="#">
							<FaLinkedin /> linkid in
						</a>
					</li>
					<li className="margin-bottom">
						<a href="#">
							<FaTwitter /> twitter
						</a>
					</li>
					<li>
						<a href="#">
							<FaGithub /> github
						</a>
					</li>
				</ul>
			</div>

			<div>
				<ul>
					<li className="info">contact</li>

					<div>
						<li className="line">
							megenagn marathon buliding <br />
							addis abeba ethiopia
						</li>
					</div>
					<br />
					<br />
					<li className="margin-bottom">
						<a href="#">taskmaster.com </a>
					</li>
					<li className="">+2514675906</li>
				</ul>
			</div>
			<div>
				<ul>
					<li className="info">company</li>
					<li className="margin-bottom">
						<a href="#"> services </a>
					</li>
					<li className="margin-bottom">
						<a href="#"> contact</a>
					</li>
					<li className="margin-bottom">
						<a href="#">home </a>
					</li>
					<li>
						<a href="#"> about</a>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li className="info">service</li>
					<li className="margin-bottom">
						<a>Task Management </a>
					</li>
					<li className="margin-bottom">
						<a href="#">Due Date Tracking </a>
					</li>
					<li className="margin-bottom">
						<a href="#"> task Categorization</a>
					</li>
					<li>
						<a href="#"> Priority Setting</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Footer;
