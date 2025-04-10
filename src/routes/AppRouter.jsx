import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

let router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		// loader: loadRootData,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);
function AppRouter() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default AppRouter;
