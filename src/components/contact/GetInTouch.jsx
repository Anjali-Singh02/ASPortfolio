import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
	AiOutlineAppstoreAdd,
	AiOutlineComment,
	AiOutlineMail,
	AiOutlineUser,
} from 'react-icons/ai';

const GetInTouch = () => {
	const form = useRef();
	const [formData, setFormData] = useState({
		user_name: sessionStorage.getItem('user_name') || '',
		user_email: sessionStorage.getItem('user_email') || '',
		subject: sessionStorage.getItem('subject') || '',
		message: sessionStorage.getItem('message') || '',
	});
	const [isSending, setIsSending] = useState(false);
	const [statusMessage, setStatusMessage] = useState('');

	// Save form data to sessionStorage when changed
	useEffect(() => {
		sessionStorage.setItem('user_name', formData.user_name);
		sessionStorage.setItem('user_email', formData.user_email);
		sessionStorage.setItem('subject', formData.subject);
		sessionStorage.setItem('message', formData.message);
	}, [formData]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSending(true);
		setStatusMessage('');

		emailjs
			.sendForm(
				'service_ckdbzk4',
				'template_ymsk0l6',
				form.current,
				'J66ntvSI9D-pcJEz_',
			)
			.then(() => {
				setStatusMessage('✅ Message sent successfully!');
				form.current.reset();
				setFormData({
					user_name: '',
					user_email: '',
					subject: '',
					message: '',
				});
				sessionStorage.clear();
			})
			.catch((error) => {
				console.error(error);
				setStatusMessage('❌ Something went wrong. Please try again.');
			})
			.finally(() => setIsSending(false));
	};

	return (
		<section className="relative py-20 px-6 text-white">
			{/* Background and overlay */}
			<div className="absolute inset-0 bg-[url('https://th.bing.com/th/id/OIP.nxcdRqPzmrKGLcR9uBXahQHaDN?w=700&h=304&rs=1&pid=ImgDetMain')] bg-cover bg-center"></div>
			<div className="absolute inset-0 bg-black opacity-70"></div>

			{/* Form content */}
			<div className="relative z-10 max-w-3xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
				<p className="mb-10 text-lg text-gray-200">
					Let’s connect! Whether you have a question, a project, or
					just want to chat — I’m just a message away.
				</p>

				<form ref={form} onSubmit={sendEmail}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Name input with icon */}
						<div className="relative rounded-lg border border-gray-300 bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300">
							<input
								type="text"
								name="user_name"
								placeholder="Name"
								value={formData.user_name}
								onChange={handleChange}
								required
								className="p-4 outline-none w-full pl-12"
							/>
							<AiOutlineUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
						</div>

						{/* Email input with icon */}
						<div className="relative rounded-lg border border-gray-300 bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ">
							<input
								type="email"
								name="user_email"
								placeholder="Email"
								value={formData.user_email}
								onChange={handleChange}
								required
								className="p-4 outline-none w-full pl-12"
							/>
							<AiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
						</div>
					</div>

					{/* Subject input with icon */}
					<div className="relative rounded-lg border border-gray-300 bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mt-5">
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleChange}
							required
							className="w-full p-4 pl-12 outline-none "
						/>
						<AiOutlineAppstoreAdd className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
					</div>

					{/* Message textarea with icon */}
					<div className="relative rounded-lg border border-gray-300 bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mt-5 ">
						<textarea
							name="message"
							placeholder="Your Message"
							rows="5"
							value={formData.message}
							onChange={handleChange}
							required
							className="w-full p-4 pl-12 outline-none resize-none "
						></textarea>
						<AiOutlineComment className="absolute left-4 top-[30px] transform -translate-y-1/2 text-gray-400 text-2xl" />
					</div>

					<button
						type="submit"
						disabled={isSending}
						className={`mt-6 ${
							isSending
								? 'bg-gray-600'
								: 'bg-primary hover:bg-primary-dark'
						} transition-all px-6 py-3 rounded text-primary-dark hover:text-white font-semibold shadow-md`}
					>
						{isSending ? 'Sending...' : 'Send Message'}
					</button>

					{statusMessage && (
						<p className="mt-4 text-sm text-green-300">
							{statusMessage}
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default GetInTouch;
