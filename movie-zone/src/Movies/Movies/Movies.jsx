import React, { useState } from "react";
import { movies } from "../data";
import "./style.css";
const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  const filterByCategory = (cat)=>{
    setMovieList(movies.filter((data)=>data.category == cat))
  }
  return (
    <>
      <div className="my-5 d-flex justify-content-center gap-3">
        <button type="button" class="btn btn-outline-primary fw-bolder">
          All
        </button>
        <button type="button" class="btn btn-outline-primary fw-bolder">
          Action
        </button>
        <button type="button" className="btn btn-outline-light fw-bolder">
        Thriller
        </button>
        <button type="button" className="btn btn-outline-info fw-bolder">
          Animation
        </button>
        <button type="button" className="btn btn-outline-warning fw-bolder">
          Horror
        </button>
        <button type="button" className="btn btn-outline-info fw-bolder">
          Drama
        </button>
        <button type="button" className="btn btn-outline-light fw-bolder">
          Sci - Fi
        </button>
      </div>
      <div
        className="d-flex justify-content-center align-items-center flex-wrap  text-center mx-auto "
        style={{ width: "1300px" }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "300px" }}>
            <div className="hover_effect p-3 ">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  border: "2px solid yellow",
                  borderRadius: "20px",
                }}
                className="m-2"
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
