function GenerateMovies(props) {
    //this filters through the movies to return only the ones genre matches the genre selceted
    //added ANOTHER ternary to check if the user selcted all, otherwise it'll filter by genre!
    const filterdMovies = props.currentGenre === 'all' ? props.movies : props.movies.filter(movie => movie.genre === props.currentGenre)
    return (
        //used a ternary condition to return a message if no genre has been selcted yet
        props.currentGenre === '' ? <p>No genre selected</p> : 
         //used a nested ternary condition to return a message if no movie were in that genre
        filterdMovies.length === 0 ? <p>No movies found for this genre</p> :(
            //maps throught he filtered movies and returns just the title, director, and year released
            filterdMovies.map((movie, id) => (
                <div id="movie-card" key={id}>
                    <h2>{movie.title}</h2>
                    <p><i>Director(s):</i> {movie.director}</p>
                    <p><i>Year:</i> {movie.yearReleased}</p>
                </div>
            ))
        )
    )
}

export default GenerateMovies;