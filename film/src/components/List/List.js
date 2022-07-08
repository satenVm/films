import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../List/List.css";

function List({ show, searchValue, style }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  let navigate = useNavigate()
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${show}?api_key=31b50f2491e6bf01fc445182378f4273&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => {
        setList([...res.results]);
      });
  }, [show]);
  useEffect(() => {
    if (page > 1) {
      fetch(
        `https://api.themoviedb.org/3/movie/${show}?api_key=31b50f2491e6bf01fc445182378f4273&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((res) => {
          setList((prev) => [...prev, ...res.results]);
        });
    }
  }, [page]);
  //console.log(list);

  return (
    <div className="List">
      <div className="popular" style={ {flexDirection: !style &&  'column'}}>
        {list &&
          list
            .filter((el) => el.title.includes(searchValue))
            .map((movie) => {
              //console.log(movie);
              return (
                <div
                  className="movieList"
                  data-hover={style? movie.overview : ''}
                  key={movie.id}
                  onClick={() => navigate(`/${movie.id}`)}
                  
                  style={{
                    backgroundImage: `URL(${
                      "https://image.tmdb.org/t/p/original" +
                      movie.backdrop_path
                    })`,
                    
                  }}
                >{}
                  <div className="movieInfo"style={ { 
                    width : !style &&  '55rem',
                    height : !style &&  '24.9rem',
                    top : !style && "0px",
                    left : !style && "462px",
                    borderRadius : !style && "none",
                    alignContent: !style && "flex-start",
                    boxShadow : !style && "10px 10px 30px rgb(0 0 0 / 15%)",
                    }}>
                    <span className="title" style={{fontSize : !style && "30px"}}>{movie.title}</span>
                    <span className="average" style={{fontSize : !style && "30px",color : !style && "#5db9e5"}}>{movie.vote_average}</span>
                    {!style ? <span style={{fontSize: "20px",marginTop : "20px",color : "#2E8BC0"}}>
                      <h2 style={{fontSize: "25px",color : "black"}}>Overview</h2>
                      {movie.overview}</span>: <></> }
                  </div>
                </div>
              );
            })}
        <button
          className="but"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          More 10
        </button>
      </div>
    </div>
  );
}
export default List;
