import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.scss";
import Display from "./components/Display/Display";
import Controls from "./components/Controls/Controls";
import cover1 from "./I_Wanna_Rock.jpg";
import source1 from "./twisted-sister-i-wanna-rock-2016-remaster(mp3gid.me).mp3";
import cover2 from "./queen.jpg";
import source2 from "./Queen_-_We_Will_Rock_You_Qoret.com.mp3";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const initialsongs = [
	{ id: 1, song: "I wanna rock", artist: "Twisted Sister", album: "Stay Hungry", cover: cover1, src: source1 },
	{ id: 2, song: "We will rock you", artist: "Queen", album: "News of the World", cover: cover2, src: source2 },
];

/* https://aviyel.com/post/1193/building-a-music-player-application-in-react-js */
function MusicPlayer() {
	/* States */
	// eslint-disable-next-line no-unused-vars
	const [songs, setSongs] = useState(initialsongs);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	// eslint-disable-next-line no-unused-vars
	const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

	/* References */
	const audioElement = useRef(initialsongs.at(0).src);

	const useProgressBar = (event) => {
		audioElement.current.currentTime(event.target.value);
	};

	/* Play and pause of the song */
	useEffect(() => {
		if (isPlaying) {
			audioElement.current.play();
		} else {
			audioElement.current.pause();
		}
	});

	/* The prograssbar refresh in every second */
	const [timeElapsed, setTimeElapsed] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimeElapsed(() => Math.trunc(audioElement.current.currentTime));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	/* Play next song automatically */
	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex, songs]);

	/* Skipping the actual song */
	const SkipSong = (forwards = true) => {
		if (forwards) {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp++;

				if (temp > songs.length - 1) {
					temp = 0;
				}

				return temp;
			});
		} else {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex;
				temp--;

				if (temp < 0) {
					temp = songs.length - 1;
				}

				return temp;
			});
		}
	};

	return (
		<div className="music-player-container">
			<div className="player">
				<Display source={songs} currentSongIndex={currentSongIndex} />
				<audio src={songs[currentSongIndex].src} ref={audioElement}></audio>
				<ProgressBar audioElement={audioElement} useProgressBar={useProgressBar} value={timeElapsed} />
				<Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} currentSongIndex={currentSongIndex} />
			</div>
		</div>
	);
}

export default MusicPlayer;
