import './App.css';
import React, { useState } from 'react';
import GenreList from './components/GenreList';
import GenerateMovies from './components/MovieList';
import { genres } from './mock-data/genres';
import { movies } from './mock-data/movies'

function App() {
	const [currentGenre, setCurrentGenre] = useState("");
	const [movieData, setMovies] = useState(movies)
    return (
        <div>
			<h1>Choose a Genre</h1>
            <GenreList genres={genres} onGenreSelect={setCurrentGenre}/>
			<GenerateMovies movies={movieData} currentGenre={currentGenre}/>
        </div>
    )
}

export default App;
