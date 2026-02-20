function GenreList(props) {
    return (
        //had to wrap it in a freagment bc i added an All movies button before it starts creating buttons by genre
        <>
            <button className={props.currentGenre === 'all' ? 'button active' : 'button'} 
            onClick={() => props.onGenreSelect('all')}>All Movies</button>
            {props.genres.map((genre, id) => (
                //This creates a button for each genre and once clicked sets it as the setGenre in the useState
                <button className={genre.name === props.currentGenre ? 'button active' : 'button'} key={id} 
                onClick={() => props.onGenreSelect(genre.name)}>{genre.name}</button>
            ))}
        </>
    )
}

export default GenreList;