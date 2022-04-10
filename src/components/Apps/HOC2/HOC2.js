import React from "react";
import "./HOC2.scss";
import StyledComponent from "./StyledComponent/StyledComponent";
import BaseComponent from "./BaseComponent/BaseComponent";
import image1 from "../../../images/services-01-714x530.jpg";
import image2 from "../../../images/services-04-714x530.jpg";

function HOC2() {
	/* HOC */
	const EnhancedBaseComponent = StyledComponent(BaseComponent);
	return (
		<div className="hoc-container-2">
			<h2>HOC with style properties</h2>
			<div className="hoc-compare-container">
				<BaseComponent baseImage={image1} baseTitle="BaseComponent" baseLorem="Normal component with basic properties." baseButton="Learn More" />
				<EnhancedBaseComponent
					newBackgroundColor="#f2cc8fff"
					baseImage={image2}
					baseTitle="EnhancedBaseComponent"
					baseLorem=" A new propery is defined in the higher order component: newBackgroundColor which can be passed from the parent and overrides the default."
					baseButton="Learn More"
				/>
			</div>
		</div>
	);
}

export default HOC2;
