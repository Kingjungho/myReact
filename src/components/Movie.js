import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Movie({ key, coverImg, title, genres, summary }) {
  return (
    <div>
      <div key={key}>
        <img src={coverImg} style={{ width: 450, height: 300 }} />
        <h1>
          <Link to="/movie"> {title}</Link>
        </h1>
        <ul>{genres && genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
        <p>{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie
