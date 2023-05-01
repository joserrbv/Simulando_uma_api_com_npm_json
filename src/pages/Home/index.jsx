import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard'
import api from '../../services/api'
import './home.style.css'

function Home() {
  const [movies, setMovies] = useState([])

  
  async function loadMovies() {
    const response = await api.get('/movies')
    setMovies(response.data)
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <main id="main">
      <h1>Popular Movies</h1>
      
      <input type="text" placeholder="Digite algum filme para pesquisar" />

      <button>Mostrar meus filmes favoritos apenas</button>

      <div id="movieListing">
        {movies.map(movie => <MovieCard movie={movie} />)}
      </div>
    </main>
  )
}

export default Home;