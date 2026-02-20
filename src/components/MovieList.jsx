function GenerateMovies(props) {
    //this filters through the movies to return only the ones genre matches the genre selceted
    const filterdMovies = props.movies.filter(movie => movie.genre === props.currentGenre)
    return (
        //used a ternary condition to return a message if no genre has been selcted yet
        props.currentGenre === '' ? <p>No genre selected</p> : (
            //maps throught he filtered movies and returns just the title, director, and year released
            filterdMovies.map((movie, id) => (
                <div key={id}>
                    <h2>{movie.title}</h2>
                    <p>Director(s): {movie.director}</p>
                    <p>Year: {movie.yearReleased}</p>
                </div>
            ))
        )
    )
}

export default GenerateMovies;