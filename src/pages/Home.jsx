import React from 'react';
import { Link } from 'react-router';
import GetInTouch from '../components/contact/GetInTouch';

import { FiDownload, FiExternalLink } from 'react-icons/fi';
import { MdConnectWithoutContact } from 'react-icons/md';
import Project from '../components/project';
import Skills from '../components/skills';
import About from '../components/about';
import { useState } from 'react';
import { useEffect } from 'react';

const roles = ['Frontend Developer', 'React Developer', 'UI Designer'];
function Home() {
	const [currentRole, setCurrentRole] = useState('');
	const [roleIndex, setRoleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [typing, setTyping] = useState(true);

	useEffect(() => {
		let timeout;

		if (typing) {
			if (charIndex < roles[roleIndex].length) {
				timeout = setTimeout(() => {
					setCurrentRole(
						(prev) => prev + roles[roleIndex][charIndex],
					);
					setCharIndex((prev) => prev + 1);
				}, 100);
			} else {
				// Pause before deleting
				timeout = setTimeout(() => setTyping(false), 1500);
			}
		} else {
			if (charIndex > 0) {
				timeout = setTimeout(() => {
					setCurrentRole((prev) => prev.slice(0, -1));
					setCharIndex((prev) => prev - 1);
				}, 50);
			} else {
				// Next role
				setTyping(true);
				setRoleIndex((prev) => (prev + 1) % roles.length);
			}
		}

		return () => clearTimeout(timeout);
	}, [charIndex, typing, roleIndex]);

	const buttonBase =
		'flex items-center gap-2 font-semibold py-2 px-6 rounded shadow transition capitalize';

	return (
		<>
			{/* Hero */}
			<section
				id="home"
				className="relative py-64 px-4 text-center text-white overflow-hidden"
			>
				{/* Background layers */}
				<div className="absolute inset-0">
					<div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-90"></div>
					<div className="absolute inset-0 bg-black opacity-75"></div>
				</div>

				{/* Content */}
				<div className="relative z-10 flex flex-col items-center justify-center">
					{/* Optional Profile Image */}
					{/* <img
					src="https://img.freepik.com/premium-photo/working-girl-office-work-animated-girl-working-laptop_982269-331.jpg"
					alt="Profile"
					className="w-60 h-60 rounded-full shadow-lg mb-4 object-cover border-4 border-white"
				/> */}

					<h1 className="text-3xl md:text-6xl font-bold capitalize mb-2">
						Hello, I'm Anjali Singh
					</h1>
					<h2 className="text-2xl md:text-5xl font-bold capitalize text-primary mb-4 h-16">
						{currentRole}
						<span className="animate-pulse">|</span>
					</h2>
					<p className="text-lg max-w-xl mb-6 text-gray-200 font-[400] italic">
						I’m a frontend web developer passionate about building
						responsive, accessible, and engaging web applications.
					</p>

					{/* Action Buttons */}
					<div className="flex gap-4 flex-col md:flex-row">
						<a
							href="/Resume_ASingh.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className={`${buttonBase} bg-white text-primary-dark hover:bg-primary-dark hover:text-white`}
						>
							<FiExternalLink className="w-5 h-5" />
							View Resume
						</a>

						<a
							href="/Resume_ASingh.pdf"
							download
							className={`${buttonBase} bg-primary-dark text-white hover:bg-white hover:text-primary-dark`}
						>
							<FiDownload className="w-5 h-5" />
							Download Resume
						</a>

						<a
							href="#contact"
							className={`${buttonBase} bg-white text-primary-dark hover:bg-primary-dark hover:text-white`}
						>
							<MdConnectWithoutContact className="w-5 h-5" />
							Let's Connect
						</a>
					</div>
				</div>
			</section>
			{/* About */}
			<section
				id="about"
				className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 sm:px-8"
			>
				<About />
			</section>
			{/* Projects */}
			<section
				id="projects"
				className="bg-gradient-to-b from-gray-100 to-white py-20 px-6"
			>
				<Project />
			</section>
			{/* Skills */}
			<section id="skills" className="bg-gray-100 py-16 px-6">
				<Skills />
			</section>
			{/* Contact */}
			<div id="contact" className="bg-white">
				<GetInTouch />
			</div>
		</>
	);
}

export default Home;
