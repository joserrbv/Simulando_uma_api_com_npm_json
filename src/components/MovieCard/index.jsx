import './movieCard.style.css'

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img 
        src={movie.imageUrl}
        alt="Cartaz do filme"
      />

      <div className="movie-title">
        <h3>{movie.title}</h3>

        <div className="actions">
          <p>{movie.average}</p>
          <button>Favoritar</button>
        </div>
      </div>

      <p id="movie-description">
        {movie.description}    
      </p>
    </div>
  )
}

export default MovieCard