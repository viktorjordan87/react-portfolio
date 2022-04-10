import React, { useState, useEffect } from "react";
import "./Hangman.scss";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { shownotification as show } from "./helpers/helpers";

const words = ["application", "programing", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function Hangman() {
	const [playable, setPlayable] = useState(true);

	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [shownotification, setShownotification] = useState(false);

	useEffect(() => {
		const handleKeydown = (event) => {
			const { key, keyCode } = event;
			if (playable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();

				if (selectedWord.includes(letter)) {
					if (!correctLetters.includes(letter)) {
						setCorrectLetters((currentLetters) => [...currentLetters, letter]);
					} else {
						show(setShownotification);
					}
				} else {
					if (!wrongLetters.includes(letter)) {
						setWrongLetters((currentLetters) => [...currentLetters, letter]);
					} else {
						show(setShownotification);
					}
				}
			}
		};
		window.addEventListener("keydown", handleKeydown);
		return () => window.removeEventListener("keydown", handleKeydown);
	}, [correctLetters, wrongLetters, playable]);

	function playAgain() {
		setPlayable(true);

		// Empty Arrays
		setCorrectLetters([]);
		setWrongLetters([]);

		const random = Math.floor(Math.random() * words.length);
		selectedWord = words[random];
	}

	return (
		<div className="hangman-container">
			<Header />
			<div className="game-container">
				<Figure wrongLetters={wrongLetters} />
				<WrongLetters wrongLetters={wrongLetters} />
				<Word selectedWorld={selectedWord} correctLetters={correctLetters} />
			</div>
			<Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
			<Notification shownotification={shownotification} />
		</div>
	);
}

export default Hangman;
