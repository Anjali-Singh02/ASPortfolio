import React from 'react';
import { Link } from 'react-router';
import GetInTouch from '../components/contact/GetInTouch';

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
			<section className="relative py-64 px-4 text-center text-white">
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
					<h2 className="text-3xl md:text-6xl font-bold capitalize text-indigo-200 mb-4">
						Frontend Developer
					</h2>
					<p className="text-lg max-w-xl mb-6 text-gray-200">
						I’m a frontend web developer passionate about building
						responsive, accessible, and engaging web applications.
					</p>
					<div className="flex gap-6">
						<Link
							to="/resume.pdf"
							className="bg-indigo-600 capitalize hover:bg-white text-white hover:text-indigo-800  font-semibold py-2 px-6 rounded shadow transition"
						>
							Download Resume
						</Link>
						<Link
							to="/contact"
							className="bg-white capitalize hover:bg-indigo-800 text-indigo-600  hover:text-white font-semibold py-2 px-6 rounded shadow transition"
						>
							Let's connect
						</Link>
					</div>
				</div>
			</section>

			{/* About */}
			<section className="bg-white py-16 px-6 text-center">
				<h2 className="text-3xl font-semibold text-indigo-900 mb-4">
					About Me
				</h2>
				<p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
					I’m Anjali Singh, a frontend developer with a strong
					foundation in HTML, CSS, JavaScript, and React. I specialize
					in creating interactive user interfaces that are both
					visually appealing and highly functional. With a background
					in teaching, I bring structure, clarity, and communication
					skills to every project I work on.
				</p>
			</section>

			{/* Projects */}
			<section className="bg-gray-50 py-16 px-6 text-center">
				<h2 className="text-3xl font-semibold text-indigo-900 mb-4">
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
								<h3 className="text-xl font-semibold text-indigo-700 mb-2">
									{proj.title}
								</h3>
								<p className="text-gray-700">{proj.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className="bg-white py-16 px-6 text-center">
				<h2 className="text-3xl font-semibold text-indigo-900 mb-6">
					Skills
				</h2>
				<div className="flex flex-wrap justify-center gap-4">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* Contact */}
			<div className="bg-white">
				<GetInTouch />
			</div>
		</>
	);
}

export default Home;
