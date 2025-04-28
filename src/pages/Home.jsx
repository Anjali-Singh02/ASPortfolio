import React from 'react';
import { Link } from 'react-router';
import GetInTouch from '../components/contact/GetInTouch';
import {
	AiOutlineUser,
	AiOutlineCode,
	AiOutlineExperiment,
	AiOutlineBook,
	AiOutlineSmile,
} from 'react-icons/ai';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const projectList = [
	{
		title: 'Portfolio Website',
		desc: 'A personal portfolio built using React and Tailwind CSS.',
		image: 'https://thumbs.dreamstime.com/b/project-management-business-analytics-concept-illustration-team-work-dashboard-financial-analysis-vector-web-site-190528049.jpg',
	},
	{
		title: 'E-commerce App',
		desc: 'A responsive e-commerce web app with product listing and cart.',
		image: 'https://thumbs.dreamstime.com/b/project-management-business-analytics-concept-illustration-team-work-dashboard-financial-analysis-vector-web-site-190528049.jpg',
	},
	{
		title: 'Blog Platform',
		desc: 'A markdown-based blog platform with login functionality.',
		image: 'https://thumbs.dreamstime.com/b/project-management-business-analytics-concept-illustration-team-work-dashboard-financial-analysis-vector-web-site-190528049.jpg',
	},
];

const skills = [
	'HTML5',
	'CSS3',
	'JavaScript',
	'React.js',
	'Tailwind CSS',
	'Git & GitHub',
	'Responsive Design',
];

function Home() {
	return (
		<>
			{/* Hero */}
			<section
				id="home"
				className="relative py-64 px-4 text-center text-white"
			>
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-90"></div>
				<div className="absolute inset-0 bg-black opacity-75"></div>
				<div className="relative z-10 flex flex-col items-center justify-center">
					{/* <img
						src="https://img.freepik.com/premium-photo/working-girl-office-work-animated-girl-working-laptop_982269-331.jpg"
						alt="Profile"
						className="w-60 h-60 rounded-full shadow-lg mb-4 object-cover border-4 border-white"
					/> */}
					<h1 className="text-3xl md:text-6xl font-bold capitalize mb-2">
						Hello, I'm Anjali Singh
					</h1>
					<h2 className="text-3xl md:text-6xl font-bold capitalize text-primary mb-4">
						Frontend Developer
					</h2>
					<p className="text-lg max-w-xl mb-6 text-gray-200">
						I’m a frontend web developer passionate about building
						responsive, accessible, and engaging web applications.
					</p>
					<div className="flex gap-6 flex-col md:flex-row">
						{/* View Resume Button */}
						<a
							href="/Resume_ASingh.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 bg-white capitalize hover:bg-primary-dark text-primary-dark hover:text-white font-semibold py-2 px-6 rounded shadow transition"
						>
							<FiExternalLink className="w-5 h-5" />
							View Resume
						</a>
						{/* Download Resume Button */}
						<a
							href="/Resume_ASingh.pdf"
							download
							className="flex items-center gap-2 bg-primary-dark capitalize hover:bg-white text-white hover:text-primary-dark font-semibold py-2 px-6 rounded shadow transition"
						>
							<FiDownload className="w-5 h-5" />
							Download Resume
						</a>

						{/* Let's Connect Button */}
						<a
							href="#contact"
							className="bg-white capitalize hover:bg-primary-dark text-primary-dark hover:text-white font-semibold py-2 px-6 rounded shadow transition"
						>
							Let's connect
						</a>
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="bg-white py-16 px-6">
				<h2 className="text-4xl font-extrabold text-primary-dark text-center mb-12">
					About Me
				</h2>

				<div className="flex flex-col mb-10 bg-primary-dark text-white items-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
					<AiOutlineUser className="w-12 h-12 text-white mb-4 " />
					<h3 className="text-2xl font-semibold mb-2">Who I Am</h3>
					<p className="text-white text-center">
						Passionate React Developer with UI design expertise and
						1 year of experience in crafting high-performance,
						user-centric applications. Proficient in front-end
						technologies, responsive design, and UX principles.
						Enthusiastic about building impactful projects and
						continuously enhancing technical proficiency.
					</p>
				</div>
				<div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
					{/* Profile Card */}

					{/* Skills Card */}
					<div className="bg-primary p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
						<div className="flex items-center mb-4">
							<AiOutlineCode className="w-10 h-10 text-primary-dark mr-3" />
							<h3 className="text-2xl font-semibold">Skills</h3>
						</div>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>
								<strong>Frontend:</strong> React.js, Redux
								Toolkit, React Router, ES6/ES5, HTML5, CSS3,
								Bootstrap, Tailwind CSS, Material UI
							</li>
							<li>
								<strong>Backend:</strong> Express.js, Node.js
								(Basics)
							</li>
							<li>
								<strong>API & Auth:</strong> Axios, JSON Web
								Tokens (JWT), RESTful APIs
							</li>
							<li>
								<strong>Database:</strong> MongoDB, SQL, MySQL
							</li>
							<li>
								<strong>Version Control:</strong> Git, GitHub
							</li>
							<li>
								<strong>UI Design:</strong> Figma, Wireframing,
								Prototyping
							</li>
							<li>
								<strong>Tools:</strong> PowerPoint, Excel
							</li>
							<li>
								<strong>Languages:</strong> English & Hindi
							</li>
						</ul>
					</div>

					{/* Experience Card */}
					<div className="bg-primary p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
						<div className="flex items-center mb-4">
							<AiOutlineExperiment className="w-10 h-10 text-primary-dark mr-3" />
							<h3 className="text-2xl font-semibold">
								Experience
							</h3>
						</div>
						<div className="text-gray-700 space-y-4">
							<div>
								<h4 className="font-semibold">
									Menteechain Consultancy
								</h4>
								<p className="italic text-sm mb-1">
									Frontend Developer, June 2023 – May 2024
								</p>
								<ul className="list-disc list-inside space-y-1">
									<li>
										Developed and optimized user-facing
										features using React.js.
									</li>
									<li>
										Translated UI/UX designs into
										responsive, accessible interfaces.
									</li>
									<li>
										Integrated UI components with backend
										RESTful APIs.
									</li>
									<li>
										Ensured cross-browser compatibility and
										performance tuning.
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Education Card */}
					<div className="bg-primary text-primary-dark p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
						<div className="flex items-center mb-4">
							<AiOutlineBook className="w-10 h-10 text-primary-dark mr-3" />
							<h3 className="text-2xl font-semibold">
								Education
							</h3>
						</div>
						<div className="text-primary-dark space-y-4">
							<div>
								<h4 className="font-semibold">UpGrad Campus</h4>
								<p className="italic text-sm mb-1">
									Full Stack Web Development, Aug 2022 – Jul
									2023, Bengaluru
								</p>
								<p>
									- Mastered React.js, Redux, Node.js,
									Express.js & MongoDB; hands-on with Git &
									CI/CD.
								</p>
							</div>
							<div>
								<h4 className="font-semibold">
									Kamla Nehru College, RTMNU
								</h4>
								<p className="italic text-sm">
									BCA, Jun 2019 – Jun 2022, Nagpur
								</p>
							</div>
						</div>
					</div>

					{/* Hobbies Card */}
					<div className="bg-primary p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
						<div className="flex items-center mb-4">
							<AiOutlineSmile className="w-10 h-10 text-primary-dark mr-3" />
							<h3 className="text-2xl font-semibold">Hobbies</h3>
						</div>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>UI/UX Design and Prototyping</li>
							<li>Exploring new Frontend Tools and Libraries</li>
							<li>Crafting and DIY projects</li>
							<li>Reading tech blogs and books</li>
							<li>Nature walks and fitness activities</li>
							<li>Traveling and exploring new cultures</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Projects */}
			<section
				id="projects"
				className="bg-gray-50 py-16 px-6 text-center"
			>
				<h2 className="text-3xl font-semibold text-primary-dark mb-4">
					Projects
				</h2>
				<p className="text-gray-600 mb-10">
					A selection of my recent work showcasing my development
					skills.
				</p>
				<div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectList.map((proj, idx) => (
						<div
							key={idx}
							className="border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition"
						>
							<img
								src={proj.image}
								alt={proj.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold text-primary-dark mb-2">
									{proj.title}
								</h3>
								<p className="text-gray-700">{proj.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section id="skills" className="bg-white py-16 px-6 text-center">
				<h2 className="text-3xl font-semibold text-primary-dark mb-6">
					Skills
				</h2>
				<div className="flex flex-wrap justify-center gap-4">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* Contact */}
			<div id="contact" className="bg-white">
				<GetInTouch />
			</div>
		</>
	);
}

export default Home;
