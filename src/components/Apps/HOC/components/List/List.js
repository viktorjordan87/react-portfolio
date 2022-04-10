//List.js
import React from "react";

function List(props) {
	const { repos } = props;
	if (!repos) return null;
	if (!repos.length) return <p>No repos, sorry</p>;
	return (
		<ul>
			<h3>Repo list:</h3>
			{repos.map((repo) => {
				return <li key={repo.id}>{repo.full_name}</li>;
			})}
		</ul>
	);
}
export default List;
