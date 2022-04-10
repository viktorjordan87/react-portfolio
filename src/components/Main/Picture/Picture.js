import React from "react";

const Picture = ({ webSrc, alt, src, mediaType = "image/webp", ...others }) => {
	return (
		<picture>
			<source srcSet={webSrc} type={mediaType} />
			<img src={src} alt={alt} {...others} />
		</picture>
	);
};

export default Picture;
