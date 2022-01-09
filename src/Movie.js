

function Movie({key, img, title, genres, summary}) {
  return (
    <div>
      <div key={key}>
        <img
          src={img}
          style={{ width: 450, height: 300 }}
        />
        <h1>{title}</h1>
        <ul>{genres && genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default Movie
