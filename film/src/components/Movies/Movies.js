import React from "react";
import "../Movies/Movies.css";
function Movies({ changePages, changeStyle }) {
  return (
    <div className="Movies">
      <div>
        <button onClick={() => {changePages("popular");}}>Trending</button>
        <button onClick={() => {changePages("top_rated");}}>Top Rated</button>
        <button onClick={() => {changePages("upcoming");}}>Soon</button>
      </div>
      <div className="parent">
        <button className="normal" onClick={() => changeStyle(true)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="horizontal" onClick={() => changeStyle(false)}>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}
export default Movies;
