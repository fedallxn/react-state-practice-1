import './App.css';
import React, { useState } from 'react';
import GenreList from './components/GenreList';
import GenerateMovies from './components/MovieList';
import { genres } from './mock-data/genres';
import { movies } from './mock-data/movies'

function App() {
	const [currentGenre, setCurrentGenre] = useState("");
	//setMovies is never called because I'm not changing any of the content intide the movie objects
	const [movieData, setMovies] = useState(movies)
    return (
        <div>
			<h1>Choose a Movie Genre</h1>
            <GenreList genres={genres} onGenreSelect={setCurrentGenre} currentGenre={currentGenre}/>
			<GenerateMovies movies={movieData} currentGenre={currentGenre}/>
        </div>
    )
}

export default App;
