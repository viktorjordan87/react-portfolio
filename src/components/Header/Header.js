import React from "react";
import "./Header.scss";

import Description from "./Description/Description";
import Navigation from "./Navigation/Navigation";

function Header() {
	return (
		<header className="rjs-header">
			<Description />
			<Navigation />
		</header>
	);
}

export default Header;
