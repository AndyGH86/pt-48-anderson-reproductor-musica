import React, { useState, useRef } from "react";
import { FiPlay, FiRewind, FiFastForward, FiPause} from "react-icons/fi";


function Player() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const songs = [
      {
        title: 'Glitch Control',
        source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        artist: 'Six Blade & Dexcell',
        disc: 'Viper Recordings',
      },
      {
        title: 'useState Hook',
        source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        artist: 'Emma & Andy',
        disc: 'Hans Records',
      },
    ];
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const playPause = () => {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    const nextSong = () => {
      if (currentSongIndex < songs.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
      }
    };
    const prevSong = () => {
      if (currentSongIndex > 0) {
        setCurrentSongIndex(currentSongIndex - 1);
      }
    };
    return (<>
      <div className='player__container'>
        <div className='player__header'>
          <audio ref={audioRef} src={songs[currentSongIndex].source} />
          <p className='text-center fs-6 text-secondary fw-bold mb-0'>{songs[currentSongIndex].disc}</p>
          <p className='text-center fs-4 text-secondary mb-0'>{songs[currentSongIndex].artist}</p>
        </div>
        <div className='player__controls'>
          <button type="button" className="btn fs-3 rounded-circle" onClick={prevSong}><FiRewind/></button>
          <button type="button" className="btn fs-1 rounded-circle" onClick={playPause}>{isPlaying ? <FiPause /> : <FiPlay />}</button>
          <button type="button" className="btn fs-3 rounded-circle" onClick={nextSong}><FiFastForward/></button>
        </div>
        <div className='player__song'>
          <p>{songs[currentSongIndex].title}</p>
        </div>
      </div>
    </>)
  }

export default Player;