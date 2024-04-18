import MovieListItem from "./movie-list-item"
const MovieList = ({data}) => {
  return (
    <ul className="list">
      {data.map(item => (
        <MovieListItem  key={item.id} name={item.name} viewers={item.viewers} favourite={item.favourite}/>
      ))}
    </ul>
  )
}

export default MovieList