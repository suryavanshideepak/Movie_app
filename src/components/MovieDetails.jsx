import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const [movieData, setMovieData] = useState({})
    const [loading, setLoading] = useState(false)
    let { id } = useParams()
    const getData = async () => {
        setLoading(true)
        let  urlOfApi = `https://www.omdbapi.com/?i=${id}&apikey=a871e09f`
        const url = await fetch(urlOfApi);
        const data = await url.json();
        setMovieData(data)
        setLoading(false)
    }

    useEffect(() => {
        if(id){
           getData()
        }
    },id)
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
  return (
    <div>
        <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="card ">
          <div className="d-flex">
            <div>
              <img className="card-img-top" src={movieData.Poster} alt="" width={100} />
            </div>
           <div className="card-body">
            <div className='row'>
                <div className='col-md-6'>
                    <h5 className="card-title">{movieData.Title}</h5>
                    <p className="card-text">Year: {movieData.Year}</p>
                    <p>Type: {movieData.Type}</p>
                    <p>Actors : {movieData.Actors}</p>
                </div>
                <div className='col-md-6'>
                    <p>BoxOffice : {movieData.BoxOffice} </p>
                    <p>Country : {movieData.BoxOffice} </p>
                    <p>Released : {movieData.Released}</p>
                </div>
            </div>
                
                <p>Plot : {movieData.Plot}</p>
                <NavLink to={"/home"} className="btn btn-danger btn-sm" >Go Back</NavLink>
            </div>
          </div>
        </div> 
        </div>
    </div>
  )
}

export default MovieDetails