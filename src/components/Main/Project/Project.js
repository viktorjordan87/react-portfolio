import "./Project.scss";

import React from "react";
import Picture from "../Picture/Picture";

import { Link } from "react-router-dom";

/* Icons*/
import GitHubIcon from "@mui/icons-material/GitHub";

function Project({ project }) {
	return (
		<li className="project">
			<div className="image-container">
				<Link className="image-url" to={`/${project.name}`}>
					<Picture src={project.src} alt={`${project.title}`} />
				</Link>
				<a className="github-url" href={`${project.githuburl}`}>
					<GitHubIcon className="github-icon" />
					<span className="screen-reader-text">{project.githuburl}</span>
				</a>
			</div>
			<Link className="project-url" to={`/${project.name}`}>
				<h4 className="project-title">{project.title}</h4>
				<span className="screen-reader-text">{project.title}</span>
			</Link>
			<div className="project-tags">
				{project.tags.map((tag) => {
					return (
						<span className="project-tag" key={tag.toString()}>
							{tag}
						</span>
					);
				})}
			</div>
		</li>
	);
}

export default Project;
