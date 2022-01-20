import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Detail() {
  const [DetailLoading, setDetailLoading] = useState(true)
  const [movieDetail, setMovieDetail] = useState([])
  const { id } = useParams()
  const getDetil = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    setMovieDetail(json.data.movie)
    setDetailLoading(false)
  }
  useEffect(() => {
    getDetil()
  }, [])
  return (
    <div>
      {DetailLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movieDetail.background_image_original} style={{ width: 450, height: 300 }} />
          <ul>{movieDetail.genres && movieDetail.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
          <h2>{movieDetail.date_uploaded}</h2>
          <p>{movieDetail.description_full}</p>
        </div>
      )}
    </div>
  )
}
export default Detail
