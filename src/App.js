import { useEffect, useState } from 'react'
import Movie from './Movie'

function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    const json = await (
      await fetch('https://yts.mx/api/v2/list_movies.json')
    ).json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie key={movie.id} img={movie.background_image_original} title={movie.title} genres={movie.genres} summary={movie.summary} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
