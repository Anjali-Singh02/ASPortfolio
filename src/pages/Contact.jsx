import React from 'react';
import { useState } from 'react';

function Contact() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [error, setError] = useState('');

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.subject || !form.message) {
			setError('All fields are required.');
			return;
		}
		setError('');
		alert('Message sent successfully!');
		setForm({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<section className="h-screen max-w-3xl mx-auto py-16 px-4 ">
			<h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
				Contact Me
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Your Name"
					className="w-full border p-3 rounded"
				/>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder="Your Email"
					className="w-full border p-3 rounded"
				/>
				<input
					type="text"
					name="subject"
					value={form.subject}
					onChange={handleChange}
					placeholder="Subject"
					className="w-full border p-3 rounded"
				/>
				<textarea
					name="message"
					value={form.message}
					onChange={handleChange}
					placeholder="Message"
					className="w-full border p-3 rounded h-32"
				></textarea>
				{error && <p className="text-red-500">{error}</p>}
				<button
					type="submit"
					className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded shadow"
				>
					Send
				</button>
			</form>
		</section>
	);
}

export default Contact;
