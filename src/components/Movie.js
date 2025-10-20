import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id,coverImg,title,summary,genres}) {
    return (
        <div style={{
             padding:"10px",
             display:"inline-block",
             width:"23%",
             
        }}>
            <div style={{
                display:'flex',
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                gap:"0px"
            }}>
            <img src={coverImg} alt={title}  />
            
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;