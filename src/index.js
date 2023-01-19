import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hangman from "./components/Apps/Hangman/Hangman";
import RecoilTodo from "./components/Apps/RecoilTodo/RecoilTodo";
import { RecoilRoot } from "recoil";
import Calculator from "./components/Apps/Calculator/Calculator";
import PaginationContainer from "./components/Apps/Pagination/Pagination";
import { createRoot } from "react-dom/client";

import PersistLocalStorage from "./components/Apps/Persisting/LocalStorage/PersistLocalStorage";
import AutoComplete from "./components/Apps/AutoComplete/AutoComplete";
import PersistUrlParams from "./components/Apps/Persisting/UrlParams/PersistUrlParams";
import PhotoGallery from "./components/Apps/PhotoGallery/PhotoGallery";
import Countries from "./components/Apps/Countries/Countries";
import Loading from "./components/Apps/Loading/Loading";
import ErrorHandling from "./components/Apps/ErrorHandling/ErrorHandling";
import HOC from "./components/Apps/HOC/HOC";
import HOC2 from "./components/Apps/HOC2/HOC2";
import Reference from "./components/Apps/Reference/Reference";

/* React Redux */
import { Provider } from "react-redux";
import store from "./components/Apps/ReactRedux/store/store";
import ReactRedux from "./components/Apps/ReactRedux/ReactRedux";
import Accordion from "./components/Apps/Accordion/Accordion";
// import Auth from "./components/Apps/Auth/Auth";
// import Dashboard from "./components/Apps/Auth/components/Dashboard/Dashboard";
// import Preferences from "./components/Apps/Auth/components/Preferences/Preferences";
// import Login from "./components/Apps/Auth/components/Login/Login";
import MusicPlayer from "./components/Apps/MusicPlayer/MusicPlayer";
import Currency from "./components/Apps/Currency/Currency";
import Debounce from "./components/Apps/Debounce/Debounce";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/Hangman" element={<Hangman />} />
						<Route path="/RecoilTodo" element={<RecoilTodo />} />
						<Route path="calculator" element={<Calculator />} />
						<Route path="/pagination" element={<PaginationContainer />} />
						<Route path="/persisting-localstorage" element={<PersistLocalStorage />} />
						<Route path="autocomplete" element={<AutoComplete />} />
						<Route path="persisting-url" element={<PersistUrlParams />} />
						<Route path="photogallery" element={<PhotoGallery />} />
						<Route path="countries" element={<Countries />} />
						<Route path="loading" element={<Loading />} />
						<Route path="errorhandling" element={<ErrorHandling />} />
						<Route path="higherordercomponent" element={<HOC />} />
						<Route path="higherordercomponent2" element={<HOC2 />} />
						<Route path="reference" element={<Reference />} />
						<Route path="reactredux" element={<ReactRedux />} />
						<Route path="accordion" element={<Accordion />} />
						<Route path="musicplayer" element={<MusicPlayer />} />
						<Route path="debounce" element={<Debounce />} />

						{/* <Route path="auth" element={<Auth />}>
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="preferences" element={<Preferences />} />
							<Route path="login" element={<Login />} />
						</Route> */}
						<Route path="currencyexchange" element={<Currency />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</RecoilRoot>
	</React.StrictMode>
);
