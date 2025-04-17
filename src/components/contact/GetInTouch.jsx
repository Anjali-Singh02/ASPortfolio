import React from 'react';

const GetInTouch = () => {
	return (
		<section id="contact" className="relative py-20 px-6 text-white">
			{/* Background image with overlay */}
			<div className="absolute inset-0 bg-[url('https://th.bing.com/th/id/OIP.nxcdRqPzmrKGLcR9uBXahQHaDN?w=700&h=304&rs=1&pid=ImgDetMain')] bg-cover bg-center"></div>
			<div className="absolute inset-0 bg-black opacity-70"></div>

			{/* Content */}
			<div className="relative z-10 max-w-3xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
				<p className="mb-10 text-lg text-gray-200">
					Let’s connect! Whether you have a question, a project, or
					just want to chat — I’m just a message away.
				</p>

				<form className="bg-transparent bg-opacity-10 p-6 rounded-lg backdrop-blur-md shadow-2xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<input
							type="text"
							placeholder="Name"
							className="p-3 rounded bg-transparent border-1 bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
							required
						/>
						<input
							type="email"
							placeholder="Email"
							className="p-3 rounded bg-transparent border-1 bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
							required
						/>
					</div>
					<textarea
						placeholder="Your Message"
						rows="5"
						className="w-full mt-6 p-3 rounded bg-transparent border-1 bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
						required
					></textarea>
					<button
						type="submit"
						className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded text-white font-semibold shadow-md"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default GetInTouch;
