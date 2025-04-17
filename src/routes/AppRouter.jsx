import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';

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
