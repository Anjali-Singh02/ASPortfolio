import React from 'react';

function Home() {
	return (
		<section className="md:h-screen flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-indigo-200 to-white">
			<img
				src="https://img.freepik.com/premium-photo/working-girl-office-work-animated-girl-working-laptop_982269-331.jpg"
				alt="Profile"
				className="w-72 h-72 rounded-full shadow-lg mb-4"
			/>
			<h1 className="text-4xl font-bold text-indigo-900 mb-2">
				Hello, I'm Your Name
			</h1>
			<p className="text-lg text-gray-700 max-w-xl mb-6">
				I'm a passionate web developer focused on building responsive
				and accessible web applications. Welcome to my personal
				portfolio!
			</p>
			<a
				href="/resume.pdf"
				target="_blank"
				className="bg-indigo-800 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded shadow transition"
			>
				Download Resume
			</a>
		</section>
	);
}
export default Home;
