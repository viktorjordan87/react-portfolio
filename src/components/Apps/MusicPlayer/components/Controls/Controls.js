import React from "react";
import "./Controls.scss";
/* Icons */
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosSkipBackward } from "react-icons/io";

function Controls({ isPlaying, setIsPlaying, SkipSong, currentSongIndex }) {
	return (
		<div className="music-player-controls">
			<IoIosSkipBackward onClick={() => SkipSong(false)} />
			<span className="play" onClick={() => setIsPlaying(!isPlaying)}>
				{isPlaying ? <IoIosPause /> : <IoIosPlay />}
			</span>
			<IoIosSkipForward onClick={() => SkipSong()} />
		</div>
	);
}

export default Controls;
