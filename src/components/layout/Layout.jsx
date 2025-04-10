import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<main className="">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
