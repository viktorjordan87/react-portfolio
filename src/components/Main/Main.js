import React, { useState } from "react";
import "./Main.scss";

/* Import datas */
import projects from "../../store/projects";

/* Components */
import Picture from "./Picture/Picture";
import DetailsBox from "./DetailsBox/DetailsBox";
import Search from "./Search/Search";
import Project from "./Project/Project";
import ContactForm from "./Contact/ContactForm";
import Social from "./Contact/Social";

/* Import images */
import meSrc from "../../images/Viktor-Jordan-567x768.jpg";
import meWebpSrc from "../../images/Viktor-Jordan-567x768.webp";
import udemy from "../../images/udemy.PNG";
import linkedinlearning from "../../images/Linkin-Learn.jpg";

import oceanSrc from "../../images/KoLan-1024x768.jpg";
import oceanWebpSrc from "../../images/KoLan-1024x768.webp";

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
						As a web developer I am building web applications and websites for customers in the United States and in Europe. I specialized in reactjs JavaScript
						front-end library with scss and JSX. I am available only remotely, but nowadays that shouldn't be a problem ㋡ Zoom - Meet - Skype - Teams: let's
						talk / videochat.
					</p>
				</div>

				<div className="right">
					<Picture src={meSrc} webSrc={meWebpSrc} alt="Viktor Jordan" />
				</div>
			</section>

			<section id="aboutme" className="home-second-section">
				<div className="left">
					<Picture src={oceanSrc} webSrc={oceanWebpSrc} alt="Thailand Ko Lahn" />
				</div>
				<div className="right">
					<DetailsBox
						firstLine="About Me"
						secondLine="Viktor Jordan, 34"
						text="I finished my studies as an logistics engineer (BSC+MSC), then after working as that, I learned to code to be a digital nomad and work as a remote software engineer. Nowadays I work as a reactjs developer and as a WordPress developer. See more in my LinkedIn profile."
						buttonText="LinkedIn"
						href="https://www.linkedin.com/in/jordangergoviktor/"
					/>
				</div>
			</section>

			<section id="experience" className="home-third-section">
				<h2>Experience</h2>
				<p className="subtitle">
					I learned html and css profoundly by building responsive WordPress sites. I usually get a UX/UI design which I translate into a theme. I modify the
					final website later by the customer's feedback until everybody is satisfied. I used LinkedIn Learning a lot to acquire all the knowledge that is
					necessary for becoming a web developer, but the real experience came from doing it.
				</p>
				<a className="linkedin-picture" href="https://www.linkedin.com/learning/" target="_blank" rel="noreferrer">
					<img src={linkedinlearning} alt="LinkedIn Learning" />
				</a>
				<p className="subtitle">
					I learned javascript with modern ES6+ features on Udemy. I took the 69h long course - "The Complete JavaScript Course 2022: From Zero to Expert!". I
					spent 3-4 hours a day for a month to get through the program.
				</p>
				<a className="udemy-picture" href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" rel="noreferrer">
					<img src={udemy} alt="Javascript course on Udemy" />
				</a>
				<p className="subtitle">
					And I learned react truly by building these small projects. I coded them by hand to get muscle memory and understand the concepts.
				</p>
				<h3>React keyword:</h3>
				<Search className="search-box" handleAutoCompleteChange={handleAutoCompleteChange} options={options} value={value} />
				<ul className="search-results">
					{/*eslint-disable-next-line array-callback-return*/}
					{projects.map((project) => {
						/* If the project id is included in results or the results array is empty then show everything and the show attribute is not false in the project*/
						if (results.includes(project.id) || (results.length === 0 && project.show !== false)) {
							return <Project project={project} key={project.id} />;
						}
					})}
				</ul>
			</section>

			<section id="contact" className="home-fourth-section">
				<h2>Contact</h2>
				<div className="contact-container">
					<div className="left">
						<ContactForm />
					</div>
					<div className="right">
						<Social name="Email:" link="viktorjordan87@gmail.com" mailTo />
						<Social name="Facebook:" link="https://www.facebook.com/viktor.jordan.9889/" />
						<Social name="LinkedIn:" link="https://www.linkedin.com/in/jordangergoviktor/" />
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;
