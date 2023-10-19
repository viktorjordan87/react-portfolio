import "./References.scss";
import spacecrop_image from "../../../images/spacecrop.webp";
import eyelux_image from "../../../images/eyelux.webp";
import screenshot from "../../../images/Screenshot.webp";
import wozify from "../../../images/wozify.webp";
import kastely from "../../../images/kastely.webp";
import Picture from "../Picture/Picture";
import OutlinedButton from "../Buttons/Buttons";

const Reference = ({ image, title, description, link = undefined }) => {
	return (
		<div className="reference">
			<Picture
				src={image}
				webSrc={image}
				alt={title}
			/>
			<h4 className="title">{title}</h4>
			<p className="description">{description}</p>
			{link && (
				<OutlinedButton
					target={true}
					buttonText="Check it out"
					href={link}
				/>
			)}
		</div>
	);
};

const References = () => {
	return (
		<div className="references">
			<Reference
				image={eyelux_image}
				title="Glasses Webshop"
				link="https://eyelux.co.uk/glasses/men"
				description="I worked on the frontend side of a UK based glasses and sunglasses webshop. The challenges was that I took over the project from another developer who wasn't able to convert the figma design to a functional react web application. The inherited code worked only for the static pages, all the dynamic functionality was missing from it."
			/>
			<Reference
				image={spacecrop_image}
				title="Farm management System"
				link="https://dashboard.spacecrop.eu/login"
				description="This project is about how farmers can manage their lands and get real time information about weather and soil moistures.I built both the frontend with react and the backend with nodejs, using MERN as a stack. The web application includes integration with MapBox, OpenWeatherMap and Stripe."
			/>
			<Reference
				image={screenshot}
				title="Dashboard with complex logic"
				description="A company in the UK was needed a dashboard with custom logic in the background. The logic was so difficult that it changed constantly during development. I was responsible for the frontend in 100%. The database that stored and served the datas wasa MongoDB. During the project I had to implement Auth0 authentication."
			/>
			<Reference
				image={wozify}
				title="Company Website with Next.js"
				link="https://wozify.com"
				description="This company website primary goal is to be fast and SEO compatible. So in order to achieve these two goals I chose Next.js as a framework which built on react. Another aspect for this website is to extending its functionalities later. So Next.js provides all of the requirements, and the new app router gives a glimpse of future with react server components."
			/>
			<Reference
				image={kastely}
				link="https://fa.teleki-tisza-kastely.hu/"
				title="Adopt a Tree"
				description="The Scout Organization has a castle with a huge park around it. A friend of mine asked me to help him to develop a small web application.A user can search the different kind of trees in the park and can adopt it for maintaining the park to the public. The web application is using MapBox with react to show the trees with custom search in the sidebar."
			/>
		</div>
	);
};

export default References;
