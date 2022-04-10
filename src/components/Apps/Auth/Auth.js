/* eslint-disable no-useless-escape */
import React from "react";
import "./Auth.scss";
import { Link, Outlet } from "react-router-dom";
import Login from "./components/Login/Login";
import useToken from "./customHook/useToken";

/* https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications */
function Auth() {
	/* States */
	const { token, setToken } = useToken();

	if (!token) {
		return (
			<div className="auth-container">
				<Login setToken={setToken} />
			</div>
		);
	}

	return (
		<div className="auth-container">
			<h1>Authentication in React App</h1>
			<h2>{`Run in the terminal: /components/apps/auth> node server.js Works only in localhost, sorry :)`}</h2>
			<Link className="auth-link" to="dashboard">
				Dashboard
			</Link>
			<Link className="auth-link" to="preferences">
				preferences
			</Link>
			<Outlet />
		</div>
	);
}

export default Auth;
