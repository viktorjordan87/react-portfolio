import React from "react";

const Word = ({ selectedWorld, correctLetters }) => {
	return (
		<div className="word">
			{selectedWorld.split("").map((letter, i) => {
				return (
					<span className="letter" key={i}>
						{correctLetters.includes(letter) ? letter : ""}
					</span>
				);
			})}
		</div>
	);
};

export default Word;
