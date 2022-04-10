import React from "react";
import ReactLoading from "react-loading";
function WithLoading(Component) {
	return function WihLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<>
				<ReactLoading type={"spin"} color={"#ffffff"} height={50} width={50} />
				<p className="hold-on">Hold on, fetching data might take some time.</p>
			</>
		);
	};
}
export default WithLoading;
