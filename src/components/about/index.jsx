import React from 'react';
// Importing necessary icons from react-icons
import {
	AiOutlineUser,
	AiOutlineExperiment,
	AiOutlineBook,
	AiOutlineSmile,
} from 'react-icons/ai';

// Define the timeline items that represent different sections of the About page
const timelineItems = [
	{
		title: 'Who I Am',
		icon: <AiOutlineUser className="w-8 h-8" />,
		position: 'left',
		content: (
			<p className="text-gray-700 text-base leading-relaxed">
				Passionate React Developer with UI design expertise and 1 year
				of experience crafting high-performance, user-centric
				applications. Enthusiastic about impactful projects and
				continuous learning.
			</p>
		),
	},
	{
		title: 'Experience',
		icon: <AiOutlineExperiment className="w-8 h-8" />,
		position: 'right',
		content: (
			<div className="text-gray-700 text-base">
				<h4 className="font-bold text-primary-dark">
					Menteechain Consultancy
				</h4>
				<p className="italic text-sm mb-2">
					Frontend Developer (June 2023 – May 2024)
				</p>
				<ul className="list-disc list-inside space-y-1">
					<li>Developed optimized features using React.js.</li>
					<li>
						Translated UI/UX designs into responsive interfaces.
					</li>
					<li>Integrated frontend with backend APIs.</li>
					<li>Performance tuning and cross-browser compatibility.</li>
				</ul>
			</div>
		),
	},
	{
		title: 'Education',
		icon: <AiOutlineBook className="w-8 h-8" />,
		position: 'left',
		content: (
			<div className="text-gray-700 text-base space-y-4">
				<div>
					<h4 className="font-bold">UpGrad Campus</h4>
					<p className="italic text-sm">
						Full Stack Web Development (Aug 2022 – Jul 2023)
					</p>
					<p>
						Mastered React.js, Redux, Node.js, MongoDB, Git, and
						CI/CD pipelines.
					</p>
				</div>
				<div>
					<h4 className="font-bold">Kamla Nehru College, RTMNU</h4>
					<p className="italic text-sm">BCA (Jun 2019 – Jun 2022)</p>
				</div>
			</div>
		),
	},
	{
		title: 'Hobbies',
		icon: <AiOutlineSmile className="w-8 h-8" />,
		position: 'right',
		content: (
			<ul className="list-disc list-inside text-gray-700 text-base space-y-1">
				<li>UI/UX Design and Prototyping</li>
				<li>Exploring Frontend Tools</li>
				<li>Crafting & DIY Projects</li>
				<li>Reading Tech Blogs</li>
				<li>Nature Walks and Fitness</li>
				<li>Traveling and Exploring Cultures</li>
			</ul>
		),
	},
];

// Main About component
const About = () => {
	return (
		<div className="max-w-6xl mx-auto">
			{/* Heading for the section */}
			<h2 className="text-4xl font-extrabold text-primary-dark text-center mb-20">
				About Me
			</h2>

			<div className="relative">
				{/* Center vertical timeline line visible on medium screens and above */}
				<div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-dark"></div>

				{/* Map over timeline items to create timeline blocks */}
				{timelineItems.map((item, index) => {
					const isLeft = item.position === 'left'; // Determine item alignment

					return (
						<div
							key={index}
							className={`mb-20 flex flex-col md:flex-row items-center ${
								isLeft ? 'md:justify-start' : 'md:justify-end'
							} relative`}
						>
							{/* Render left-aligned item */}
							{isLeft && (
								<div className="md:w-1/2 md:pr-12 text-center md:text-right">
									{/* Icon with background circle */}
									<div className="inline-block bg-primary-dark p-4 rounded-full text-white mb-6 mx-auto md:mx-0">
										{item.icon}
									</div>
									{/* Section title */}
									<h3 className="text-2xl font-semibold mb-2">
										{item.title}
									</h3>
									{/* Section content */}
									<div className="max-w-md mx-auto md:mr-0">
										{item.content}
									</div>
								</div>
							)}

							{/* Empty space to balance layout on medium+ screens */}
							<div className="hidden md:block md:w-1/2"></div>

							{/* Render right-aligned item */}
							{!isLeft && (
								<div className="md:w-1/2 md:pl-12 text-center md:text-left">
									{/* Icon with background circle */}
									<div className="inline-block bg-primary-dark p-4 rounded-full text-white mb-6 mx-auto md:mx-0">
										{item.icon}
									</div>
									{/* Section title */}
									<h3 className="text-2xl font-semibold mb-2">
										{item.title}
									</h3>
									{/* Section content */}
									<div className="max-w-md mx-auto md:ml-0">
										{item.content}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
