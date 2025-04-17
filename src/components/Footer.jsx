import React from 'react';
function Footer() {
	return (
		<footer className="bg-primary-dark text-white text-center p-4 ">
			<p>
				&copy; {new Date().getFullYear()} Your Name. All rights
				reserved.
			</p>
		</footer>
	);
}

export default Footer;
