import React, { useState } from "react";
import "./Navigation.scss";

import { HashLink } from "react-router-hash-link";

function Navigation() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<nav className="rjs-navigation">
			<button
				onClick={() => setMobileOpen(!mobileOpen)}
				className={`hamburger hamburger--3dy-r ${mobileOpen ? " is-active" : ""} `}
				type="button"
				aria-label="Menu"
				aria-controls="navigation"
				aria-expanded={mobileOpen}
			>
				<span className="hamburger-label">Menu</span>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>

			<div id="navigation" className={`navigation ${mobileOpen ? " mobil-menu-open" : ""}`}>
				<ul className="rjs-navigation">
					<li>
						<HashLink smooth to="/#aboutme" onClick={() => setMobileOpen(!mobileOpen)}>
							About Me
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="/#experience" onClick={() => setMobileOpen(!mobileOpen)}>
							Experience
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="/#contact" onClick={() => setMobileOpen(!mobileOpen)}>
							Contact
						</HashLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
