function GenreList(props) {
    return (
        props.genres.map((genre, id) => (
            //This creates a button for each genre and once clicked sets it as the setGenre in the useState
            <button key={id} onClick={() => props.onGenreSelect(genre.name)}>{genre.name}</button>
        ))
    )
}

export default GenreList;