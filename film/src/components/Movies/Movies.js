import React from "react";
import "../Movies/Movies.css";
function Movies({ changePages,changeStyle }) {
  return (
    <div className="Movies">
      <div>
        <button
          onClick={() => {
            changePages("popular");
          }}
        >
          Trending
        </button>
        <button
          onClick={() => {
            changePages("top_rated");
          }}
        >
          Top Rated
        </button>
        <button
          onClick={() => {
            changePages("upcoming");
          }}
        >
          Coming Soon
        </button>
      </div>
      <div>
        <button onClick={() =>changeStyle(true)}>a</button>
        <button onClick={() =>changeStyle(false)}>b</button>
      </div>
    </div>
  );
}
export default Movies;
