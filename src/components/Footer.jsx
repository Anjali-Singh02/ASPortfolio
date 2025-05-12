import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-8 ">
			<div className="max-w-4xl mx-auto text-center px-6 space-y-4">
				<h3 className="text-xl font-semibold text-white">
					Anjali Singh
				</h3>
				<p className="text-sm text-gray-400">
					Creating seamless digital experiences through thoughtful UI.
				</p>

				{/* Social Icons */}
				<div className="flex justify-center space-x-6 mt-4">
					<a
						href="https://github.com/Anjali-Singh02/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="text-2xl hover:text-white transition" />
					</a>
					<a
						href="https://www.linkedin.com/in/anjali-singh02/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin className="text-2xl hover:text-white transition" />
					</a>

					<a href="mailto:anjalikumarisingh015@email.com">
						<FaEnvelope className="text-2xl hover:text-white transition" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
