import { v4 as uuidv4 } from "uuid";

/* Images */
import javascriptCourse from "../images/javascript-course.webp";
import reactEssential from "../images/reactjs-essential.webp";
import reactInterface from "../images/reactjs-interface.webp";
import reactCourse from "../images/reactjs-course.webp";
import mernCourse from "../images/MERN-course.webp";
import mongo1 from "../images/M001-basics.webp";
import mongo2 from "../images/M103-cluster administration.webp";
import mongo3 from "../images/M121-aggregation.webp";
import nodeCourse from "../images/nodejs-course.webp";
import wpjunior from "../images/wordpress-junior.webp";
import wpgutenberg from "../images/wordpress-gutenberg.webp";
import wptax from "../images/wordpress-taxonomies.webp";

export const certificates = [
	{
		id: uuidv4(),
		src: javascriptCourse,
		title: "The Complete Javascript Course: From Hero to Zero!",
		href: "https://www.udemy.com/course/the-complete-javascript-course/",
	},
	{
		id: uuidv4(),
		src: reactEssential,
		title: "React.js Essential Training (2020)",
		href: "https://www.linkedin.com/learning/react-js-essential-training",
	},
	{
		id: uuidv4(),
		src: reactCourse,
		title: "React Tutorial and Projects Course (2023)",
		href: "https://www.udemy.com/course/react-tutorial-and-projects-course/",
	},
	{
		id: uuidv4(),
		src: reactInterface,
		title: "React.js: Building an Interface",
		href: "https://www.linkedin.com/learning/react-js-building-an-interface-8551484",
	},
	{
		id: uuidv4(),
		src: mernCourse,
		title: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
		href: "https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/",
	},
	{
		id: uuidv4(),
		src: nodeCourse,
		title: "NodeJS Tutorial and Projects Course (2023)",
		href: "https://www.udemy.com/course/nodejs-tutorial-and-projects-course/",
	},
	{
		id: uuidv4(),
		src: mongo1,
		title: "M001: MongoDB Basics",
		href: "https://learn.mongodb.com/learning-paths/introduction-to-mongodb",
	},
	{
		id: uuidv4(),
		src: mongo2,
		title: "M103: Basic Cluster Administration",
		href: "https://learn.mongodb.com/courses/m103-basic-cluster-administration",
	},
	{
		id: uuidv4(),
		src: mongo3,
		title: "M121: The MongoDB Aggregation Framework",
		href: "https://learn.mongodb.com/courses/m121-the-mongodb-aggregation-framework",
	},
	{
		id: uuidv4(),
		src: wpjunior,
		title: "Become a Junior WordPress Developer",
		href: "https://www.linkedin.com/learning/paths/become-a-junior-wordpress-developer",
	},
	{
		id: uuidv4(),
		src: wpgutenberg,
		title: "WordPress: Developing Blocks with Gutenberg",
		href: "https://www.linkedin.com/learning/wordpress-developing-blocks-with-gutenberg",
	},
	{
		id: uuidv4(),
		src: wptax,
		title: "WordPress: Custom Post Types and Taxonomies",
		href: "https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3",
	},
];
