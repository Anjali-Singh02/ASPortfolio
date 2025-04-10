import React from 'react';

function About() {
	return (
		<section className="h-screen max-w-4xl mx-auto py-16 px-4 ">
			<h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
				About Me
			</h2>
			<p className="mb-4 text-gray-700">
				Hi! I'm a web developer with a background in computer science
				and a passion for building engaging digital experiences. I enjoy
				crafting clean and efficient code, solving problems, and
				learning new technologies.
			</p>
			<ul className="list-disc list-inside text-gray-700">
				<li>
					<strong>Education:</strong> B.Tech in Computer Science
				</li>
				<li>
					<strong>Experience:</strong> 2+ years building frontend
					applications
				</li>
				<li>
					<strong>Hobbies:</strong> Design, coding challenges, music,
					and traveling
				</li>
			</ul>
		</section>
	);
}
export default About;
