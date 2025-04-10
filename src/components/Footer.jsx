import React from 'react';
function Footer() {
	return (
		<footer className="bg-gray-900 text-white text-center p-4 mt-10">
			<p>
				&copy; {new Date().getFullYear()} Your Name. All rights
				reserved.
			</p>
		</footer>
	);
}

export default Footer;
