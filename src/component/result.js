import React from "react";

function Reasult({ MoviesData, lodding }) {
  const IMGAPI = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      <div className="cointener">
        <div className="grid">
          {typeof MoviesData !== "undefined" ? (
            MoviesData.map((res, index) => {
              return (
                <>
                  <div className="card" key={index}>
                    <div className="cart_img">
                      <img
                        className="poster"
                        src={IMGAPI + res.poster_path}
                        alt=""
                      />
                    </div>
                    <div className="impormation">
                      <h3 className="title">{res.title}</h3>
                      <div className="vote">
                        <h3 className="vote1">
                          original language: {res.original_language}
                        </h3>
                        <h3 className="vote1">
                          vote average: {res.vote_average}%
                        </h3>
                        <h3 className="vote1">
                          release date: {res.release_date}
                        </h3>
                        <h3 className="vote1">popularity: {res.popularity}</h3>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <h1 className="alert">Movies Not Faund</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Reasult;
