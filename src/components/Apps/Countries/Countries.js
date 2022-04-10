import React, { useEffect, useState } from "react";
import "./Countries.scss";
import axios from "axios";
import Modal from "./components/Modal/Modal";
import { Pagination } from "@mui/material";
import ReactLoading from "react-loading";

function Countries() {
	/* States */
	const [datas, setDatas] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [countryData, setCountryData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	/* Get countries API data */
	const countriesAPI = "https://restcountries.com/v3.1/all";

	const request = async () => {
		await axios
			.get(countriesAPI)
			.then((response) => {
				setDatas(response.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	/* Helper functions */
	function isObjectNotEmpty(obj) {
		return Object.keys(obj).length !== 0;
	}
	useEffect(() => {
		request();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/* Sort function Alphabetically for the common name of the country */
	const sortCommonNameAlphabetically = (a, b) => {
		let aname = a.name.common;
		let bname = b.name.common;
		if (aname < bname) {
			return -1;
		}
		if (aname > bname) {
			return 1;
		}
		return 0;
	};

	/* Modal functions */
	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	/* Pagination settings */
	const postsNumber = 250;
	const countriesPerPage = 25;
	const numberOfPages = postsNumber / countriesPerPage;
	const visiblePages = 2;

	const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<div className="countries-container">
			<h1>Countries API</h1>
			<h2>
				<a href="https://restcountries.com" target="_blank" rel="noreferrer">
					https://restcountries.com
				</a>
			</h2>
			<div className="flags-container">
				{isLoading && (
					<div className="flags-loading">
						<ReactLoading type={"cylon"} color={"#ffffff"} height={50} width={50} />
					</div>
				)}
				<ul>
					{datas
						.sort(sortCommonNameAlphabetically)
						.slice((page - 1) * countriesPerPage, (page - 1) * countriesPerPage + countriesPerPage)
						.map((data, index) => {
							return (
								<li
									key={index}
									onClick={() => {
										setCountryData(data);
										openModal();
									}}
								>
									<img src={data.flags.svg} alt={data.name.common} />
									<h2 className="country-name">{data.name.common}</h2>
								</li>
							);
						})}
				</ul>
			</div>
			<div className={`modal-container ${modalIsOpen ? "modal-is-open" : "modal-is-closed"}`}>
				{isObjectNotEmpty(countryData) && <Modal closeModal={closeModal} countryData={countryData} />}
			</div>
			<Pagination
				className="countries-pagination"
				variant="outlined"
				shape="rounded"
				size="large"
				count={numberOfPages}
				siblingCount={visiblePages}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Countries;
