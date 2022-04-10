import React, { useState } from "react";
import PageLoader from "./components/Pageloader/PageLoader";
import "./Loading.scss";
import { Button } from "@mui/material";
import todos from "./todos";
import { SpinnerCircular, SpinnerDotted, SpinnerInfinity } from "spinners-react";
import ReactLoading from "react-loading";
import LoadingDots from "./components/LoadingDots/LoadingDots";

function Loading() {
	/* States */
	const [isLoading, setIsLoading] = useState(false);
	const [todosData, setTodosData] = useState([]);

	const handleClick = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 10000);
		setTimeout(() => {
			setTodosData(todos);
		}, 10000);
	};

	return (
		<>
			<PageLoader setTimeOutMilisecond="0" enabled={false} />
			<div className="loading-event-container">
				<div className="loader-api-request">
					<h1>Use the button to start making a request</h1>
					<h2>For 10 seconds you can see the different spinners I prefer, then the todos list.</h2>
					<Button onClick={handleClick} variant="outlined">
						{isLoading ? (
							<>
								<span>Loading</span>
								<LoadingDots />
							</>
						) : (
							"Submit"
						)}
					</Button>
					{isLoading && (
						<div className="spinners">
							<div className="react-spinners">
								<p>
									<b>Package:</b> spinners-react
								</p>
								<SpinnerCircular size={50} thickness={100} speed={100} color="#5bc0beff" secondaryColor="rgba(0, 0, 0, 0.44)" />
								<SpinnerDotted size={50} thickness={100} speed={100} color="#5bc0beff" />
								<SpinnerInfinity size={50} thickness={100} speed={100} color="#5bc0beff" secondaryColor="rgba(0, 0, 0, 0.44)" />
							</div>
							<div className="react-spinners">
								<p>
									<b>Package:</b> react-loading
								</p>
								<ReactLoading type={"bubbles"} color={"#ffffff"} height={50} width={50} />
								<ReactLoading type={"spin"} color={"#ffffff"} height={50} width={50} />
								<ReactLoading type={"spinningBubbles"} color={"#ffffff"} height={50} width={50} />
								<ReactLoading type={"spokes"} color={"#ffffff"} height={50} width={50} />
								<ReactLoading type={"cylon"} color={"#ffffff"} height={50} width={50} />
							</div>
						</div>
					)}
					<div className="results">
						<h3>Todos list:</h3>
						<ol>
							{todosData.map((todo) => {
								return <li key={todo.id}>{todo.title}</li>;
							})}
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}

export default Loading;
