import { useEffect, useId, useState } from "react";
import "../List/List.css";

function List({ show }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
    // .then((res) => res.json())
    // .then(res => {setList([...list,...res.results])
  useEffect(() => {
    const inchvorban =
        fetch(
            `https://api.themoviedb.org/3/movie/${show}?api_key=31b50f2491e6bf01fc445182378f4273&language=en-US&page=${page}`
          )
          
        inchvorban.then((res) => res.json())
        .then(res => {setList([...res.results])})
        
  }, [show]);
  useEffect(() => {
    const inchvorban =
        fetch(
            `https://api.themoviedb.org/3/movie/${show}?api_key=31b50f2491e6bf01fc445182378f4273&language=en-US&page=${page}`
          )
          
        inchvorban.then((res) => res.json())
        .then(res => {setList([...list,...res.results])})
        
  }, [page]);
  console.log(show);
  console.log(page);
  // console.log(list);
  return (
    <div className="List">
      <div className="popular">
        {list.map((movie) => {
          console.log(movie);
          return (
            <div
              className="movieList"
              data-hover={movie.overview}
              key={Math.random()}
              style={{
                backgroundImage: `URL(${
                  "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                })`,
              }}
            >
              <div className="movieInfo">
                <span className="title">{movie.title}</span>
                <span className="average">{movie.vote_average}</span>
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
      <div className="rated"></div>
      <div className="soon"></div>
    </div>
  );
}
export default List
