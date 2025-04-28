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
import { MdConnectWithoutContact } from 'react-icons/md';
import {
	FaDatabase,
	FaFigma,
	FaGitAlt,
	FaHtml5,
	FaNodeJs,
	FaReact,
} from 'react-icons/fa6';
import { SiAxios } from 'react-icons/si';
import { FaJsSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
							className="flex items-center gap-2 bg-white capitalize hover:bg-primary-dark text-primary-dark hover:text-white font-semibold py-2 px-6 rounded shadow transition"
						>
							<MdConnectWithoutContact className="w-5 h-5" />
							Let's connect
						</a>
					</div>
				</div>
			</section>
			{/* About */}
			<section
				id="about"
				className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 sm:px-8"
			>
				<div className="max-w-6xl mx-auto">
					{/* Heading */}
					<h2 className="text-4xl font-extrabold text-primary-dark text-center mb-20">
						About Me
					</h2>

					{/* Timeline Container */}
					<div className="relative">
						{/* Center Vertical Line */}
						<div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-dark"></div>

						{/* Timeline Items */}

						{/* Who I Am (Left) */}
						<div className="mb-20 flex flex-col md:flex-row items-center md:justify-start relative">
							<div className="md:w-1/2 md:pr-12 text-center md:text-right">
								<div className="inline-block bg-primary-dark p-4 rounded-full text-white mb-6">
									<AiOutlineUser className="w-8 h-8" />
								</div>
								<h3 className="text-2xl font-semibold mb-2">
									Who I Am
								</h3>
								<p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto md:mr-0">
									Passionate React Developer with UI design
									expertise and 1 year of experience crafting
									high-performance, user-centric applications.
									Enthusiastic about impactful projects and
									continuous learning.
								</p>
							</div>
							<div className="hidden md:block md:w-1/2"></div>
						</div>

						{/* Experience (Right) */}
						<div className="mb-20 flex flex-col md:flex-row items-center md:justify-end relative">
							<div className="hidden md:block md:w-1/2"></div>
							<div className="md:w-1/2 md:pl-12 text-center md:text-left">
								<div className="inline-block bg-primary-dark p-4 rounded-full text-white mb-6">
									<AiOutlineExperiment className="w-8 h-8" />
								</div>
								<h3 className="text-2xl font-semibold mb-2">
									Experience
								</h3>
								<h4 className="font-bold text-primary-dark">
									Menteechain Consultancy
								</h4>
								<p className="italic text-sm mb-2">
									Frontend Developer (June 2023 – May 2024)
								</p>
								<ul className="list-disc list-inside text-gray-700 text-base space-y-1 max-w-md mx-auto md:mx-0">
									<li>
										Developed optimized features using
										React.js.
									</li>
									<li>
										Translated UI/UX designs into responsive
										interfaces.
									</li>
									<li>
										Integrated frontend with backend APIs.
									</li>
									<li>
										Performance tuning and cross-browser
										compatibility.
									</li>
								</ul>
							</div>
						</div>

						{/* Education (Left) */}
						<div className="mb-20 flex flex-col md:flex-row items-center md:justify-start relative">
							<div className="md:w-1/2 md:pr-12 text-center md:text-right">
								<div className="inline-block bg-primary-dark p-4 rounded-full text-white mb-6">
									<AiOutlineBook className="w-8 h-8" />
								</div>
								<h3 className="text-2xl font-semibold mb-2">
									Education
								</h3>
								<div className="text-gray-700 space-y-4 text-base max-w-md mx-auto md:mr-0">
									<div>
										<h4 className="font-bold">
											UpGrad Campus
										</h4>
										<p className="italic text-sm">
											Full Stack Web Development (Aug 2022
											– Jul 2023)
										</p>
										<p>
											Mastered React.js, Redux, Node.js,
											MongoDB, Git, and CI/CD pipelines.
										</p>
									</div>
									<div>
										<h4 className="font-bold">
											Kamla Nehru College, RTMNU
										</h4>
										<p className="italic text-sm">
											BCA (Jun 2019 – Jun 2022)
										</p>
									</div>
								</div>
							</div>
							<div className="hidden md:block md:w-1/2"></div>
						</div>

						{/* Hobbies (Right) */}
						<div className="flex flex-col md:flex-row items-center md:justify-end relative">
							<div className="hidden md:block md:w-1/2"></div>
							<div className="md:w-1/2 md:pl-12 text-center md:text-left">
								<div className="inline-block bg-primary-dark p-4 rounded-full text-white mb-6">
									<AiOutlineSmile className="w-8 h-8" />
								</div>
								<h3 className="text-2xl font-semibold mb-2">
									Hobbies
								</h3>
								<ul className="list-disc list-inside text-gray-700 text-base space-y-1 max-w-md mx-auto md:mx-0">
									<li>UI/UX Design and Prototyping</li>
									<li>Exploring Frontend Tools</li>
									<li>Crafting & DIY Projects</li>
									<li>Reading Tech Blogs</li>
									<li>Nature Walks and Fitness</li>
									<li>Traveling and Exploring Cultures</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Projects */}

			<section
				id="projects"
				className="bg-gradient-to-b from-gray-100 to-white py-20 px-6"
			>
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-4xl font-extrabold text-primary-dark mb-8">
						Projects
					</h2>
					<p className="text-gray-600 mb-16 max-w-2xl mx-auto">
						Explore some of the impactful projects I've crafted,
						combining design and development expertise.
					</p>

					{/* Projects Grid */}
					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
						{projectList.map((proj, idx) => (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, ease: 'easeOut' }}
								className="bg-white/40 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all"
							>
								{/* Image */}
								<div className="overflow-hidden">
									<img
										src={proj.image}
										alt={proj.title}
										className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
									/>
								</div>

								{/* Content */}
								<div className="p-6 flex flex-col flex-grow">
									<h3 className="text-2xl font-semibold text-primary-dark mb-3">
										{proj.title}
									</h3>
									<p className="text-gray-700 mb-4 flex-grow">
										{proj.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			{/* Skills */}
			<section id="skills" className="bg-gray-100 py-16 px-6">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-3xl font-semibold text-primary-dark mb-10">
						Skills
					</h2>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{/* Frontend */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<FaReact className="text-4xl text-blue-500 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								Frontend
							</h4>
							<p className="text-gray-600 text-sm">
								React.js, Redux Toolkit, React Router, HTML5,
								CSS3, ES6, Bootstrap, Tailwind CSS, Material UI
							</p>
						</div>

						{/* Backend */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<FaNodeJs className="text-4xl text-green-600 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								Backend
							</h4>
							<p className="text-gray-600 text-sm">
								Node.js (Basics), Express.js
							</p>
						</div>

						{/* APIs & Authentication */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<SiAxios className="text-4xl text-indigo-500 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								APIs & Authentication
							</h4>
							<p className="text-gray-600 text-sm">
								Axios, JSON Web Tokens (JWT), RESTful APIs
							</p>
						</div>

						{/* Database */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<FaDatabase className="text-4xl text-yellow-500 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								Database
							</h4>
							<p className="text-gray-600 text-sm">
								MongoDB, MySQL, SQL
							</p>
						</div>

						{/* Version Control */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<FaGitAlt className="text-4xl text-red-500 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								Version Control
							</h4>
							<p className="text-gray-600 text-sm">Git, GitHub</p>
						</div>

						{/* UI/UX Design */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<FaFigma className="text-4xl text-pink-500 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								UI/UX Design
							</h4>
							<p className="text-gray-600 text-sm">
								Figma, Wireframing, Prototyping
							</p>
						</div>

						{/* Tools */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<FaJsSquare className="text-4xl text-yellow-400 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								Tools
							</h4>
							<p className="text-gray-600 text-sm">
								PowerPoint, Excel
							</p>
						</div>

						{/* Languages */}
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							<FaHtml5 className="text-4xl text-orange-500 mx-auto mb-4" />
							<h4 className="text-lg font-semibold mb-2">
								Languages
							</h4>
							<p className="text-gray-600 text-sm">
								Fluent in English & Hindi
							</p>
						</div>
					</div>
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
