// script.js
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
  { title: 'Song 1', artist: 'Artist 1', src: 'song1.mp3' },
  { title: 'Song 2', artist: 'Artist 2', src: 'song2.mp3' },
  { title: 'Song 3', artist: 'Artist 3', src: 'song3.mp3' }
];

let currentSongIndex = 0;

function loadSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  playButton.innerText = 'Pause';
}

function pauseSong() {
  audio.pause();
  playButton.innerText = 'Play';
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
}

playButton.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);

// Load the first song on page load
loadSong(songs[currentSongIndex]);