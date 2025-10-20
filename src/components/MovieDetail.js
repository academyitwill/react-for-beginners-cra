import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({ id, coverImg, backImg, title, description1,description2, genres,runtime,rating }) {
    return (
        <div id={id} style={{
            padding:"50px",
           
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url(${backImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: 'white',
            height:"100vh"

        }}>
            <h1>{title}</h1><hr />
            <div style={{
                display:"flex",
                gap:"50px",
                
            }}>
            <img src={coverImg} alt={title} />
            <ul style={{
                fontSize:"25px",
                listStyleType:"none",
                display:"flex",
                flexDirection:"column",
                gap:"15px"
               
            }}>
                
                <li>상영시간: {runtime} min</li>
                <li>평가: {rating} </li>
                <li>줄거리:
                    <ol type="i">
                        <li>{description1}</li>
                        <li>{description2}</li>
                    </ol>
                    
                </li>
                
                <li>쟝르
                    <ul>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    );
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default MovieDetail;