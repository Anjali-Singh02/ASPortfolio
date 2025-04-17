import React from 'react';

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
function Home() {
	return (
		<>
			<section className="h-full flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-indigo-200 to-white">
				<img
					src="https://img.freepik.com/premium-photo/working-girl-office-work-animated-girl-working-laptop_982269-331.jpg"
					alt="Profile"
					className="w-72 h-72 rounded-full shadow-lg mb-4"
				/>
				<h1 className="text-4xl font-bold text-indigo-900 mb-2">
					Hello, I'm Anjali Singh
				</h1>
				<p className="text-lg text-gray-700 max-w-xl mb-6">
					I'm a passionate web developer focused on building
					responsive and accessible web applications. Welcome to my
					personal portfolio!
				</p>
				<a
					href="/resume.pdf"
					target="_blank"
					className="bg-indigo-800 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded shadow transition"
				>
					Download Resume
				</a>

				<div className="py-10">
					<h2 className="flex justify-center text-3xl font-[500]">
						About
					</h2>
					<p className="flex justify-center">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
					<div className="container mx-auto">
						<p className="flex justify-center text-center items-center text-xl pt-10">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Accusamus sint et enim numquam pariatur sit
							voluptatibus corporis iste delectus deserunt, iure
							maiores reiciendis ad dignissimos sunt velit.
							Assumenda, tempora eaque! Lorem ipsum dolor sit amet
							consectetur, adipisicing elit. Mollitia quos
							corporis nulla esse veritatis optio eligendi
							necessitatibus? Consectetur soluta explicabo
							numquam, aut quibusdam assumenda molestiae eius
							esse. Neque repudiandae eius nemo, possimus sint eos
							quia deserunt, corporis cumque et harum aliquid
							sequi? Assumenda commodi atque reprehenderit
							similique. Vel, nisi animi!
						</p>
					</div>
				</div>
				<div className="py-10">
					<h2 className="flex justify-center capitalize text-3xl font-[500]">
						project
					</h2>
					<p className="flex justify-center">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
					<div className="container mx-auto">
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
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
										<p className="text-gray-700">
											{proj.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Home;
