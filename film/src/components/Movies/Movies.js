import React  from "react"
import '../Movies/Movies.css'
function Movies({changePages}){

    return(
        <div className="Movies">
            <button onClick={() =>{changePages('popular')}}>Trending</button>
            <button onClick={() =>{changePages('top_rated')}}>Top Rated</button>
            <button onClick={() =>{changePages('upcoming')}}>Coming Soon</button>
        </div>
    )
}
export default Movies;