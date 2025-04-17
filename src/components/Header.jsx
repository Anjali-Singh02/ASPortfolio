import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbMenu2 } from 'react-icons/tb';
import { IoClose, IoHomeOutline, IoMailOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { GrProjects } from 'react-icons/gr';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';

function Header({ collapsed, setCollapsed }) {
	const [open, setOpen] = useState(false);

	const navItems = [
		{ to: 'home', label: 'Home', icon: <IoHomeOutline /> },
		{ to: 'about', label: 'About', icon: <FaRegUser /> },
		{ to: 'projects', label: 'Projects', icon: <GrProjects /> },
		{ to: 'contact', label: 'Contact', icon: <IoMailOutline /> },
	];

	// Smooth scroll handler
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
		setOpen(false); // Close mobile menu
	};

	return (
		<>
			{/* Mobile Toggle Button */}
			<div className="md:hidden fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center bg-primary-dark text-white">
				<h1 className="text-3xl font-bold">AS</h1>
				<button
					onClick={() => setOpen(!open)}
					className="cursor-pointer"
				>
					{open ? <IoClose /> : <TbMenu2 />}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-primary-dark text-white transform transition-transform duration-300 ease-in-out z-50 p-4 ${
					open ? 'translate-x-0' : '-translate-x-full'
				} md:hidden`}
			>
				<h1 className="text-3xl font-bold mb-8">AS</h1>
				<ul className="space-y-4">
					{navItems.map((item) => (
						<li key={item.to} className="text-xl leading-12">
							<button
								onClick={() => scrollToSection(item.to)}
								className="flex items-center space-x-2 hover:underline cursor-pointer transition"
							>
								<span className="text-2xl">{item.icon}</span>
								<span>{item.label}</span>
							</button>
						</li>
					))}
				</ul>
			</div>

			{/* Desktop Sidebar */}
			<aside
				className={`bg-primary-dark text-white min-h-screen p-4 hidden md:flex flex-col fixed top-0 left-0 z-30 transition-all duration-300 ${
					collapsed ? 'w-16' : 'w-64'
				}`}
			>
				<div className="flex justify-between items-center mb-8">
					{!collapsed && <h1 className="text-3xl font-bold">AS</h1>}
					<button
						onClick={() => setCollapsed(!collapsed)}
						className="cursor-pointer"
					>
						<BsLayoutTextSidebarReverse size={20} />
					</button>
				</div>
				<ul className="space-y-4">
					{navItems.map((item) => (
						<li key={item.to} className="text-xl leading-12">
							<button
								onClick={() => scrollToSection(item.to)}
								className="flex items-center space-x-2 hover:underline cursor-pointer transition"
							>
								<span className="text-2xl">{item.icon}</span>
								{!collapsed && <span>{item.label}</span>}
							</button>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
}

export default Header;
