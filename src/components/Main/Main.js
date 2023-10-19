import React, { useState } from "react";
import "./Main.scss";

/* Import datas */
import projects from "../../store/projects";
import { certificates } from "../../store/certificates";

/* Components */
import Picture from "./Picture/Picture";
import DetailsBox from "./DetailsBox/DetailsBox";
import Search from "./Search/Search";
import Project from "./Project/Project";
import ContactForm from "./Contact/ContactForm";
import Social from "./Contact/Social";
import OutlinedButton from "./Buttons/Buttons";

/* Import images */
// import meSrc from "../../images/Viktor-Jordan-567x768.jpg";
// import meWebpSrc from "../../images/Viktor-Jordan-567x768.webp";
// import udemy from "../../images/udemy.PNG";
// import linkedinlearning from "../../images/Linkin-Learn.jpg";
import profilePicture from "../../images/profile-1024x768.webp";

import oceanSrc from "../../images/KoLan-1024x768.jpg";
import oceanWebpSrc from "../../images/KoLan-1024x768.webp";
import Certificate from "./Certificate/Certificate";
import References from "./References/References";

function Main() {
	/* Search State */
	const [value, setValue] = useState([]);

	/* Search Options for autocomplete */
	/* Map->flat->Set->new array with spread */
	const options = [...new Set(projects.flatMap((project) => project.tags))];

	/* Result */
	const results = projects
		// eslint-disable-next-line array-callback-return
		.map((project) => {
			//loop through the inputfields values
			for (const val of value) {
				//check if one of the value from the "value" array is included in the project tags, if yes then push into the results variable
				if (project.tags.includes(val)) {
					return project.id;
				}
			}
		})
		//remove undefined values from the array
		.filter((i) => i);

	/* Search input value change */
	const handleAutoCompleteChange = (event, newValue) => {
		setValue(newValue);
	};

	/* Get my age */
	const myAge = Math.floor((Date.now() - new Date("1987-07-15")) / (1000 * 60 * 60 * 24 * 365));

	return (
		<main className="rjs-main">
			<section className="home-first-section">
				<div className="left">
					<DetailsBox
						firstLine="Looking for a reactjs front-end developer?"
						secondLine="I am available for projects. Let's talk!"
						buttonText="Contact"
						href="#contact"
					/>
					<p>
						As a web developer I am building web applications and websites for customers in the United States and in Europe. I specialized in Reactjs JavaScript
						front-end library with scss and JSX. I am available remotely, but nowadays that shouldn't be a problem ㋡. Zoom - Meet - Skype - Teams: let's have a
						meeting.
					</p>
				</div>

				<div className="right">
					<Picture
						src={profilePicture}
						webSrc={profilePicture}
						alt="Viktor Jordan"
					/>
				</div>
			</section>

			<section
				id="aboutme"
				className="home-second-section"
			>
				<div className="left">
					<Picture
						src={oceanSrc}
						webSrc={oceanWebpSrc}
						alt="Thailand Ko Lahn"
					/>
				</div>
				<div className="right">
					<DetailsBox
						firstLine="About Me"
						secondLine={`Viktor Jordan, ${myAge}`}
						text="I finished my studies as an logistics engineer (BSC+MSC), then after working as that, I learned to code to be a digital nomad and work as a remote software engineer. Nowadays I work as a reactjs developer and as a WordPress developer. See more in my LinkedIn profile."
						buttonText="LinkedIn"
						href="https://www.linkedin.com/in/jordangergoviktor/"
					/>
				</div>
			</section>

			<section
				id="services"
				className="home-third-section"
			>
				<h2>What do I offer? Why should you hire me?</h2>
				<ul>
					<li>I build clean and effective react components for web applications</li>
					<li>my code is fully responsive on mobile, tablet and desktop</li>
					<li>have more than 2 years of experience working as a software developer</li>
					<li>built a lot of websites with custom design</li>
					<li>constantly learning new software languages for both frontend and backend</li>
					<li>I am a problem solver, who doesn't leave a problem behind</li>
					<li>I am using npm packages, gulp task runner and webpack bundler on daily basis</li>
				</ul>
			</section>

			<section
				id="references"
				className="home-seventh-section"
			>
				<h2>References</h2>
				<h3 className="subtitle">I worked on the following projects as a react developer</h3>
				<References />
			</section>

			<section
				id="certificates"
				className="home-fifth-section"
			>
				<h2>Certificates</h2>
				<div className="certificates">
					{certificates.map((certificate) => {
						return (
							<Certificate
								certificate={certificate}
								key={certificate.id}
							/>
						);
					})}
				</div>
				<h3 className="view-more">
					<OutlinedButton
						buttonText="View my full list of certificates here"
						href="https://www.linkedin.com/in/jordangergoviktor/details/certifications/"
					/>
				</h3>
			</section>

			<section
				id="project"
				className="home-sixth-section"
			>
				<h3>React keyword:</h3>
				<Search
					className="search-box"
					handleAutoCompleteChange={handleAutoCompleteChange}
					options={options}
					value={value}
				/>
				<p className="description">
					And I learned react truly by building these small projects. I coded them by hand to get muscle memory and understand the concepts. Of course I have
					bigger knowledge about building components, these are just a few example.
				</p>
				<ul className="search-results">
					{/*eslint-disable-next-line array-callback-return*/}
					{projects.map((project) => {
						/* If the project id is included in results or the results array is empty then show everything and the show attribute is not false in the project*/
						if (results.includes(project.id) || (results.length === 0 && project.show !== false)) {
							return (
								<Project
									project={project}
									key={project.id}
								/>
							);
						}
					})}
				</ul>
			</section>

			<section
				id="contact"
				className="home-fourth-section"
			>
				<h2>Contact</h2>
				<div className="contact-container">
					<div className="left">
						<ContactForm />
					</div>
					<div className="right">
						<Social
							name="Email:"
							link="viktorjordan87@gmail.com"
							mailTo
						/>
						<Social
							name="Facebook:"
							link="https://www.facebook.com/viktor.jordan.9889/"
						/>
						<Social
							name="LinkedIn:"
							link="https://www.linkedin.com/in/jordangergoviktor/"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;
