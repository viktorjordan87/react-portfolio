import React, { useEffect, useState } from "react";
import "./Currency.scss";
import axios from "axios";
import { Autocomplete, TextField, Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

/* https://free.currencyconverterapi.com/free-api-key */
function Currency() {
	/* Get countries currencies list */
	const [data, setData] = useState({});
	const CURRENCY_API_KEY = "77c103f15b87ab0564aa";

	/* Get countries data from API */
	const getCountries = async () => {
		try {
			const response = await axios.get(`https://free.currconv.com/api/v7/countries?apiKey=${CURRENCY_API_KEY}`);
			setData(response.data.results);
		} catch (error) {
			console.error(error);
		}
	};

	/* Get API data after DOM rendered once */
	useEffect(() => {
		getCountries();
	}, []);

	/* Define search term */
	const [searchTerm, setSearchTerm] = useState("currencyId");

	const handleSelect = (event) => {
		setSearchTerm(event.target.value);
	};

	/* By the search term create a list for options in AutoComplete */
	const options = [
		...new Set(
			Object.values(data).flatMap((list) => {
				return list[searchTerm];
			})
		),
	];

	/* Autocompletes */
	const [currency1, setCurrency1] = useState(null);
	const handleCurrencyChange1 = (event, newValue) => {
		setCurrency1(newValue);
	};
	const [currency2, setCurrency2] = useState(null);
	const handleCurrencyChange2 = (event, newValue) => {
		setCurrency2(newValue);
	};

	/* single source of truth */
	const [currencyValue, setCurrencyValue] = useState(0);
	const [currency, setCurrency] = useState("");

	/* After the user selected the searcTerm and the Currencies to and from after makes a new API request */
	const [exchangeRate, setExchangeRate] = useState(1);
	const getCurrentExchangeRate = async () => {
		try {
			const response = await axios.get(
				`https://free.currconv.com/api/v7/convert?q=${searchList.get(currency1)}_${searchList.get(currency2)},${searchList.get(currency2)}_${searchList.get(
					currency1
				)}&compact=ultra&apiKey=${CURRENCY_API_KEY}`
			);
			setExchangeRate(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCurrentExchangeRate();
	}, [currencyValue]);

	/* Convert the "data" object values into a new Map for list the currency types for the API input values, because if the searchterm is not equal the currencyId then the currency1-2 state is not suitable for request an API call*/
	const searchList = new Map(
		Object.values(data).map((list) => {
			return [list[searchTerm], list.currencyId];
		})
	);

	/* Textfields */

	/* Conversion functions between currencies */
	const getCurrency2FromCurrency1 = (value) => {
		const conversion_rate_1 = exchangeRate[`${searchList.get(currency1)}_${searchList.get(currency2)}`];
		return value * conversion_rate_1;
	};
	const getCurrency1FromCurrency2 = (value) => {
		const conversion_rate_2 = exchangeRate[`${searchList.get(currency2)}_${searchList.get(currency1)}`];
		return value * conversion_rate_2;
	};

	const currencyValue1 = currency === "first" ? currencyValue : getCurrency1FromCurrency2(currencyValue).toFixed(3);
	const currencyValue2 = currency === "second" ? currencyValue : getCurrency2FromCurrency1(currencyValue).toFixed(3);

	const handleCurrencyValueChange1 = (event) => {
		setCurrency("first");
		setCurrencyValue(event.target.value);
	};
	const handleCurrencyValueChange2 = (event) => {
		setCurrency("second");
		setCurrencyValue(event.target.value);
	};

	return (
		<div className="currency-exchange-container">
			<h1>
				Currency exchange real time <br /> <a href="https://www.currencyconverterapi.com">www.currencyconverterapi.com</a>
			</h1>
			<div className="currency-search-term">
				<Box sx={{ minWidth: 220 }}>
					<FormControl fullWidth>
						<InputLabel id="currency-select-label">Search by:</InputLabel>
						<Select labelId="currency-select-label" id="currency-select" value={searchTerm} label="Search term" onChange={handleSelect}>
							<MenuItem value={"currencyId"}>Currency ID</MenuItem>
							<MenuItem value={"currencyName"}>Currency name</MenuItem>
							<MenuItem value={"currencySymbol"}>Currency Symbol</MenuItem>
							<MenuItem value={"id"}>Country ID</MenuItem>
							<MenuItem value={"name"}>Country name</MenuItem>
							<MenuItem value={"alpha3"}>Alpha3 ID</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>
			<div className="currency-exchange">
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<TextField className="currency-value-1" id="currency-value-1" label="Currency Value 1" value={currencyValue1} onChange={handleCurrencyValueChange1} />
				</Box>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<TextField className="currency-value-2" id="currency-value-2" label="Currency Value 2" value={currencyValue2} onChange={handleCurrencyValueChange2} />
				</Box>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<Autocomplete
						className="currency-name-1"
						disablePortal
						options={options}
						value={currency1}
						onChange={handleCurrencyChange1}
						renderInput={(params) => <TextField variant="filled" {...params} label="From which currency" />}
					/>
				</Box>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<Autocomplete
						className="currency-name-2"
						disablePortal
						options={options}
						value={currency2}
						onChange={handleCurrencyChange2}
						renderInput={(params) => <TextField variant="filled" {...params} label="To which currency" />}
					/>
				</Box>
			</div>
		</div>
	);
}

export default Currency;
