import React, { useState, useEffect} from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { NavLink } from "react-router-dom";
import "./App.css";

const Api = (props) => {
  const [movies, getMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showData, setShowData] = useState(false);

  const getData = async () => {
    const url = await fetch(
      `http://www.omdbapi.com/?s=${
        props.firstValue === "" ? "" : props.firstValue
      }&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
    );
    const data = await url.json();
    getMovies(data.Search);  
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };
  useEffect(() => {
    getData();
  }, [props.firstValue]);

  if (loading) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  const clickToShow = (newdata) => {
    const newlist = movies.find((id) => {
      return id.imdbID === newdata;
    });
    setShowData(newlist);
  };

  return (
    <>
      { 
       !showData ?  (
      
          <div className="container-fluid mt-4 py-3">
            <div
              className="Container "
              style={{ backgroundColor: "cornsilk" }}
            >
              <div className="row d-flex justify-content-center align-items-center">
                {movies?.length ? (
                  movies.map((ele, ind) => {
                    return (
                      <div
                        key={ind}
                        className="col-md-4 py-5 d-flex justify-content-center align-items-center "
                      >
                        <div className="card " style={{ width: "18rem" }}>
                          <img
                            src={ele.Poster}
                            className="card-img-top "
                            height="300px"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="text-danger"> {ele.Title}</h5>
                            <div className="card-inner d-flex">
                              <p className="text-primary">
                                Year: {ele.Year}
                              </p>
                              <p className="pl-5 text-warning">
                                Type: {ele.Type}
                              </p>
                            </div>
                            <p>Released:{ele.Writer}</p>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => clickToShow(ele.imdbID)}
                            >
                              Discription
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Alert severity="error">
                    No Movie Found ----Check again!
                  </Alert>
                )}
              </div>
            </div>
          </div>
        )
       : (
        <div className="container d-flex justify-content-center align-items-center">
        <div className="card " style={{width: "40rem"}}>
          <div className="d-flex">
            <div>
              <img className="card-img-top" src={showData.Poster} alt="" />
            </div>
          <div className="card-body">
            <h5 className="card-title">{showData.Title}</h5>
            <p className="card-text">Year: {showData.Year}</p>
            <p>Type: {showData.Type}</p>
            <p>Abstract. Audio description (AD) provides linguistic descriptions of movies and allows.</p>
            <NavLink to={"/home"} className="btn btn-danger btn-sm" >Go Back</NavLink>
            </div>
          </div>
        </div> 
        </div>
      )}
    </>
  );
};
export default Api;
