import React from "react";

// function StyledComponent(Component) {
// 	// eslint-disable-next-line no-unused-vars
// 	return function WithStyledComponent({ newBackgroundColor, ...props }) {
// 		return <Component {...props} style={{ backgroundColor: newBackgroundColor }} />;
// 	};
// }

const StyledComponent =
	(Component) =>
	({ newBackgroundColor, ...props }) => {
		return <Component {...props} style={{ backgroundColor: newBackgroundColor }} />;
	};

export default StyledComponent;
