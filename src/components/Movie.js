import PropTypes from "prop-types";

function Movie({coverImg,url,title,summary,genres}) {
    return (
        <div >
            <img src={coverImg} alt={title} />
            <a href={url}><h2>{title}</h2></a>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes={
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;