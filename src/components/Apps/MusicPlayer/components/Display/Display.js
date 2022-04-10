import { HdrStrong, Snowshoeing } from "@mui/icons-material";
import React from "react";
import "./Display.scss";

function Display({ source, currentSongIndex }) {
	return (
		<div className="music-player-display">
			<img className="cover" src={source[currentSongIndex].cover} alt={source[currentSongIndex].song} />
			<h2 className="song">{source[currentSongIndex].song}</h2>
			<h3 className="details">
				<span className="artist">{source[currentSongIndex].artist}</span>
				<span> - </span>
				<span className="album">{source[currentSongIndex].album}</span>
			</h3>
		</div>
	);
}

export default Display;
