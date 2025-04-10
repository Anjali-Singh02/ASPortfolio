import React from 'react';

function Projects() {
	const projectList = [
		{
			title: 'Portfolio Website',
			desc: 'A personal portfolio built using React and Tailwind CSS.',
			image: '/project1.jpg',
		},
		{
			title: 'E-commerce App',
			desc: 'A responsive e-commerce web app with product listing and cart.',
			image: '/project2.jpg',
		},
		{
			title: 'Blog Platform',
			desc: 'A markdown-based blog platform with login functionality.',
			image: '/project3.jpg',
		},
	];

	return (
		<section className="h-screen max-w-5xl mx-auto py-16 px-4 ">
			<h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
				My Projects
			</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projectList.map((proj, idx) => (
					<div
						key={idx}
						className="border rounded-lg shadow-lg overflow-hidden"
					>
						<img
							src={proj.image}
							alt={proj.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2 text-indigo-600">
								{proj.title}
							</h3>
							<p className="text-gray-700">{proj.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
