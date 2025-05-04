import React, { useState } from 'react';
import Header from '../Header';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const Layout = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div>
			<Header collapsed={collapsed} setCollapsed={setCollapsed} />
			<main
				className={`transition-all duration-300  ${
					collapsed ? 'md:ml-16' : 'md:ml-64'
				}`}
			>
				<Outlet />
				<Footer />
			</main>
		</div>
	);
};

export default Layout;
