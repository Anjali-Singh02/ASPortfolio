import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { GrProjects } from 'react-icons/gr';
import { IoMailOutline } from 'react-icons/io5';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';
import Footer from './Footer';
function Header({ collapsed, setCollapsed }) {
	const [open, setOpen] = useState(false);

	const navItems = [
		{ to: '/', label: 'Home', icon: <IoHomeOutline /> },
		{ to: '/about', label: 'About', icon: <FaRegUser /> },
		{ to: '/projects', label: 'Projects', icon: <GrProjects /> },
		{ to: '/contact', label: 'Contact', icon: <IoMailOutline /> },
	];

	return (
		<>
			{/* Mobile Toggle Button */}
			<div className="md:hidden fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center bg-indigo-950 text-white">
				<h1 className="text-xl font-bold">AS</h1>
				<button onClick={() => setOpen(!open)}>
					{open ? <IoClose /> : <TbMenu2 />}{' '}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-indigo-950 text-white transform transition-transform duration-300 ease-in-out z-50 p-4 ${
					open ? 'translate-x-0' : '-translate-x-full'
				} md:hidden`}
			>
				<h1 className="text-2xl font-bold mb-8">AS</h1>
				<ul className="space-y-4">
					{navItems.map((item) => (
						<li key={item.to}>
							<NavLink
								onClick={() => setOpen(false)}
								to={item.to}
								className={({ isActive }) =>
									isActive
										? 'underline flex items-center space-x-2'
										: 'hover:underline flex items-center space-x-2'
								}
							>
								{item.icon}
								<span>{item.label}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>

			{/* Desktop Sidebar */}
			<aside
				className={`bg-gray-900 text-white min-h-screen p-4 hidden md:flex flex-col fixed top-0 left-0 z-30 transition-all duration-300 ${
					collapsed ? 'w-16' : 'w-64'
				}`}
			>
				<div className="flex justify-between items-center mb-8">
					{!collapsed && <h1 className="text-2xl font-bold">AS</h1>}
					<button onClick={() => setCollapsed(!collapsed)}>
						<BsLayoutTextSidebarReverse size={20} />
					</button>
				</div>
				<ul className="space-y-4">
					{navItems.map((item) => (
						<li key={item.to}>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									`${
										isActive
											? 'underline'
											: 'hover:underline'
									} flex items-center space-x-2`
								}
							>
								{item.icon}
								{!collapsed && <span>{item.label}</span>}
							</NavLink>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
}

export default Header;
