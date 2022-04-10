import React, { useState, useEffect } from "react";
import "./HOC.scss";
import List from "./components/List/List.js";
import WithLoading from "./components/WithLoading/WithLoading.js";

/* https://www.smashingmagazine.com/2020/06/higher-order-components-react/ */
function HOC() {
	/* States */
	const [loading, setLoading] = useState(true);
	const [repos, setRepos] = useState(null);

	/* Fetch data */
	useEffect(() => {
		fetch(`https://api.github.com/users/hacktivist123/repos`)
			.then((response) => {
				return response.json();
			})
			.then((value) => {
				setRepos(value);
				setLoading(false);
			});
	}, []);

	/* using HOC */
	const ListWithLoading = WithLoading(List);

	return (
		<div className="hoc-container">
			{!loading && <h2>HOC with loading effect</h2>}
			<ListWithLoading isLoading={loading} repos={repos} />
		</div>
	);
}

export default HOC;
