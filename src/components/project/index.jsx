import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import portfolioImg from '../../../public/portfolio.png';
import stuTeacherBooking from '../../../public/stTeBk.png';
import event from '../../../public/event.png';
import blogpost from '../../../public/blogpost.png';
import ecomm from '../../../public/ecomm.png';
import school from '../../../public/school.png';
import hospitalImg from '../../../public/hospitalImg.png';
const projectList = [
	{
		title: 'Student-Teacher Booking System',
		desc: 'A web application that allows students to book appointments with teachers. Built using React and Tailwind CSS for an efficient and responsive UI.',
		image: stuTeacherBooking,
	},
	{
		title: 'Portfolio Website',
		desc: 'A personal portfolio to showcase my work, skills, and contact information. Designed with a modern, responsive UI using React and Tailwind CSS.',
		image: portfolioImg,
		github: 'https://github.com/yourname/portfolio',
	},
	{
		title: 'Event Management',
		desc: 'An app to manage and display events. Features real-time data fetching and sorting. Built with React and styled using Tailwind CSS.',
		image: event,
		github: 'https://github.com/yourname/event-management',
	},
	{
		title: 'Blog Post',
		desc: 'A blogging platform to create and manage blog posts. Built with React and focused on an intuitive, user-friendly UI.',
		image: blogpost,
		github: 'https://github.com/yourname/blog-post',
	},
	{
		title: 'E-commerce Store (In Progress)',
		desc: 'A demo e-commerce store with product listings, cart functionality, and a checkout page. Currently under development with React and Tailwind CSS.',
		image: ecomm,
		github: 'https://github.com/yourname/ecommerce-store',
	},
	{
		title: 'School Site (In Progress)',
		desc: 'A school-related website with features for students and teachers. Currently under development with React and Tailwind CSS for styling.',
		image: school,
		github: 'https://github.com/yourname/school-site',
	},
	{
		title: 'Hospital Site (Figma Design)',
		desc: 'A hospital management website with features like appointment booking, doctor profiles, and patient records. Designed in Figma with a clean, modern UI.',
		image: hospitalImg, // Replace with a relevant image from your Figma design
	},
];

const ProjectCard = ({ project }) => (
	<motion.div
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.6, ease: 'easeOut' }}
		className="bg-white/40 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all"
	>
		<div className="overflow-hidden">
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
			/>
		</div>
		<div className="p-6 flex flex-col flex-grow">
			<h3 className="text-2xl font-semibold text-primary-dark mb-3">
				{project.title}
			</h3>
			<p className="text-gray-700 mb-4 flex-grow">{project.desc}</p>
			<div className="mt-4 flex justify-end">
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-primary-dark text-xs hover:text-primary  font-medium transition"
				>
					<FaGithub className="text-xl" />
					View Code
				</a>
			</div>
		</div>
	</motion.div>
);

const Project = () => {
	return (
		<div className="max-w-7xl mx-auto text-center">
			<h2 className="text-4xl font-extrabold text-primary-dark mb-8">
				Projects
			</h2>
			<p className="text-gray-600 mb-16 max-w-2xl mx-auto">
				Explore some of the impactful projects I've crafted, combining
				design and development expertise.
			</p>

			<div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{projectList.map((project, idx) => (
					<ProjectCard key={idx} project={project} />
				))}
			</div>
		</div>
	);
};

export default Project;
