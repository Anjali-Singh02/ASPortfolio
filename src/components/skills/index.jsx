import React from 'react';
import {
	FaDatabase,
	FaFigma,
	FaGitAlt,
	FaHtml5,
	FaNodeJs,
	FaReact,
} from 'react-icons/fa6';
import { BsTools } from 'react-icons/bs';
import { SiAxios } from 'react-icons/si';

const skills = [
	{
		Icon: FaReact,
		title: 'Frontend',
		description:
			'React.js, Redux Toolkit, React Router, HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, Material UI',
		iconColor: 'text-blue-500',
		textColor: 'text-gray-600',
	},
	{
		Icon: FaNodeJs,
		title: 'Backend',
		description: 'Node.js (Basics), Express.js',
		iconColor: 'text-green-600',
		textColor: 'text-gray-600',
	},
	{
		Icon: SiAxios,
		title: 'APIs & Authentication',
		description: 'Axios, JSON Web Tokens (JWT), RESTful APIs',
		iconColor: 'text-indigo-500',
		textColor: 'text-gray-600',
	},
	{
		Icon: FaDatabase,
		title: 'Database',
		description: 'MongoDB, MySQL, SQL',
		iconColor: 'text-yellow-500',
		textColor: 'text-gray-600',
	},
	{
		Icon: FaGitAlt,
		title: 'Version Control',
		description: 'Git, GitHub',
		iconColor: 'text-red-500',
		textColor: 'text-gray-600',
	},
	{
		Icon: FaFigma,
		title: 'UI/UX Design',
		description: 'Figma, Wireframing, Prototyping',
		iconColor: 'text-pink-500',
		textColor: 'text-gray-600',
	},
	{
		Icon: BsTools,
		title: 'Tools',
		description: 'PowerPoint, Excel',
		iconColor: 'text-yellow-400',
		textColor: 'text-gray-600',
	},
];

const Skills = () => {
	return (
		<div className="max-w-6xl mx-auto text-center">
			<h2 className="text-3xl font-semibold text-primary-dark mb-10">
				Skills
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
					>
						<skill.Icon
							className={`text-4xl ${skill.iconColor} mx-auto mb-4`}
						/>
						<h4 className="text-lg font-semibold mb-2">
							{skill.title}
						</h4>
						<p className={`${skill.textColor} text-sm`}>
							{skill.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
