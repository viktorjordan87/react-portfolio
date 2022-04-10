import React, { useState } from "react";
import { Pagination } from "@mui/material";
import "./Pagination.scss";
import posts from "./posts.json";

function PaginationContainer() {
	/* Pagination settings */
	const postsNumber = posts.length;
	const postPerPage = 10;
	const numberOfPages = postsNumber / postPerPage;
	const visiblePages = 2;

	const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<div className="pagination-container">
			<Pagination variant="outlined" count={numberOfPages} siblingCount={visiblePages} onChange={handleChange} />
			<h2>Pagination example with posts</h2>
			<ul className="posts-container">
				{posts.slice((page - 1) * postPerPage, (page - 1) * postPerPage + postPerPage).map((post, index) => {
					return (
						<li key={post.id}>
							<strong>{post.id}.</strong>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default PaginationContainer;
