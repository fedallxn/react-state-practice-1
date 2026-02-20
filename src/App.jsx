import './App.css';
import React, { useState } from 'react';
import GenreList from './components/GenreList';
import { genres } from './mock-data/genres';
import { movies } from './mock-data/movies'

function App() {
	const [currentGenre, setCurrentGenre] = useState("");
    return (
        <div>
			<h1>Choose a Genre</h1>
            <GenreList genres={genres} onGenreSelect={setCurrentGenre}/>
			<MovieList movies={movies} />
            {/* other stuff will go here later */}
        </div>
    )
}

export default App;
