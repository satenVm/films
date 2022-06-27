import { useCallback, useEffect,useMemo,useState } from "react";
import '../Header/header.css'
import List from "../List/List";
  function Header(){
  const[movies,setMovies] = useState(null);
  const[data,setData]= useState({});

  useEffect(() =>{
    // getMoves(setMovies())
    fetch("https://api.themoviedb.org/3/movie/76341?api_key=1d9153e543481708fd5de134abadc70f&language=en-US")
    .then((res) => res.json())
    .then(res => setData(res))
  },[])
  let hours = Math.floor(data.runtime /60);
  let minutes = data.runtime - (hours * 60);
  let time =hours +'h' + ':' + minutes +'m ';
  // console.log(hours,minutes);

  console.log(data);
    return(

        <div className="Header" style={{backgroundImage: `URL(${'https://image.tmdb.org/t/p/original' + data.backdrop_path})`}}>
          {/* <img src={`${'https://image.tmdb.org/t/p/original' + data.backdrop_path}`} className="image"/> */}
          <ul className="headerName">
            <li className="rate"><h1>{data.title}</h1> <span>{data.vote_average}</span></li>

            <li className="info-film">
              {data.genres? <span>{data.genres.map((data) => <span key={data.id}>{data.name}</span>)}</span> : <></>}
              {/* <span>Action</span> */}
              <p className="time">{time}</p>
            </li>
          </ul>
          <div className="buttons">
            <button><a href={data.homepage}  target="_blank">Offical Page</a></button>
            <button>View info</button>
          </div>
        </div>
    )
}

export default Header