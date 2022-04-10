import React, { useState, useEffect } from "react";
import { ReactComponent as PixabayLogo } from "./pixabay.svg";
import { ReactComponent as DownloadIcon } from "./iconmonstr-download-16.svg";
import axios from "axios";
import "./PhotoGallery.scss";

/* 3rd party library */
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { saveAs } from "file-saver";

/* MUI */
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Pagination } from "@mui/material";

/* axios alternative is https://www.npmjs.com/package/whatwg-fetch */

function PhotoGallery() {
	/* Pagination settings */
	const postsNumber = 500; //Pixabay free API limit is 500 images
	const postPerPage = 20;
	const numberOfPages = postsNumber / postPerPage;
	const visiblePages = 2;

	const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
		setPage(value);
	};
	/* States */
	const [images, setImages] = useState([]);
	const [searchValue, setSearchValue] = useState();
	const [searchQuery, setSearchQuery] = useState("programming");

	/* Pixabay settings */
	let pixabayapiurl = `https://pixabay.com/api/?key=11196981-ec80531d27bb3005fa73ef618&q=${searchQuery}&per_page=${postPerPage}&page=${page}`;

	/* Get data from Pixabay */
	const request = async () =>
		await axios
			.get(pixabayapiurl)
			.then((response) => {
				const data = response.data.hits;
				console.log(response);

				setImages(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	useEffect(() => {
		request();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pixabayapiurl]);

	/* Click on the search icon in the textfield */
	const submitSearchQuery = () => {
		setSearchQuery(encodeURIComponent(searchValue));
	};

	return (
		<div className="photogallery">
			<div className="copyright-pixabay">
				<PixabayLogo />
				<div>
					<p>The images are used from Pixabay</p>
					<a href="https://pixabay.com/" target="_blank" rel="noreferrer">
						https://pixabay.com/
					</a>
				</div>
			</div>
			<div className="gallery-header">
				<h1>React Photo Gallery with Pixabay</h1>
			</div>
			<div className="gallery-container">
				<TextField
					className="photogallery-search-field"
					label="Search"
					variant="filled"
					value={searchValue}
					onChange={(event) => {
						event.preventDefault();
						setSearchValue(event.target.value);
					}}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							submitSearchQuery();
						}
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<SearchIcon onClick={submitSearchQuery} />
							</InputAdornment>
						),
					}}
				/>
				<ul className="listings">
					{images.map((image) => {
						return (
							<li key={image.id}>
								<p className="tags">{image.tags}</p>
								<Zoom overlayBgColorStart="rgba(0, 0, 0, 0)" overlayBgColorEnd="rgba(0, 0,0, 0.65)">
									<img alt={image.tags} src={image.webformatURL} />
								</Zoom>
								<DownloadIcon
									className="donwload-icon"
									onClick={() => {
										/* Click on the download icon */
										saveAs(image.webformatURL, image.tags.replace(/\s+/g, "").replaceAll(",", "-"));
									}}
								/>
							</li>
						);
					})}
				</ul>
				<Pagination className="pagination" variant="outlined" count={numberOfPages} siblingCount={visiblePages} onChange={handleChange} />
			</div>
		</div>
	);
}

export default PhotoGallery;
