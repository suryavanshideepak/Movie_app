import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  const getData = async () => {
    setLoading(true);
    let urlOfApi = `https://www.omdbapi.com/?i=${id}&apikey=a871e09f`;
    const url = await fetch(urlOfApi);
    const data = await url.json();
    setMovieData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg">
            <div className="row g-0">
              {/* Poster Section */}
              <div className="col-md-4 text-center">
                <img
                  className="card-img-top img-fluid p-3"
                  src={movieData.Poster}
                  alt={movieData.Title}
                />
              </div>

              {/* Movie Details Section */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-primary">{movieData.Title}</h5>
                  <p className="card-text">
                    <strong>Year:</strong> {movieData.Year}
                  </p>
                  <p className="card-text">
                    <strong>Type:</strong> {movieData.Type}
                  </p>
                  <p className="card-text">
                    <strong>Actors:</strong> {movieData.Actors}
                  </p>
                  <p className="card-text">
                    <strong>BoxOffice:</strong> {movieData.BoxOffice}
                  </p>
                  <p className="card-text">
                    <strong>Country:</strong> {movieData.Country}
                  </p>
                  <p className="card-text">
                    <strong>Released:</strong> {movieData.Released}
                  </p>
                  <p className="card-text">
                    <strong>Plot:</strong> {movieData.Plot}
                  </p>
                  <NavLink to="/home" className="btn btn-danger btn-sm mt-3">
                    Go Back
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
