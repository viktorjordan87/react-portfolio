import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomComponent = ({ alt, src }) => (
	<Zoom classDialog="zoom" zoomMargin={30}>
		<img alt={alt} src={src} className="img-fluid" />
	</Zoom>
);

export default ZoomComponent;
