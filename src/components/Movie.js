import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Movie.module.css'

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <div className={styles.movie}>
      <div>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <h1 className={styles.movie__title}>
          <Link to={`/movie/${id}`}> {title}</Link>
        </h1>
        <ul className={styles.movie__genres}>{genres && genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie
