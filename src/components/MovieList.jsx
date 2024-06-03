import MovieListItem from "./movie-list-item"
const MovieList = ({ data, onDelete,onToggleProp}) => {
  return (
    <ul className="list">
      {data.map(item => (
        <MovieListItem key={item.id} name={item.name} viewers={item.viewers} favourite={item.favourite} like={item.like} onDelete={() => onDelete(item.id)} onToggleProp={e => onToggleProp(item.id,e.currentTarget.getAttribute('data-toggle'))}  />
      ))}
    </ul>
  )
}

export default MovieList