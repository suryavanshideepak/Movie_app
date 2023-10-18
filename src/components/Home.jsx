import React from 'react'
import Api from '../Api';
import MoviesCards from './cards/MoviesCards';

const Home=(props)=> {

  return (
          <div className='bg-danger pb-3'>
           
            <h1 className="text-center mt-5 text-white">Latest Movies on our website</h1>

            <Api firstValue={props.firstValue} />
            <MoviesCards/>
          </div>
  )
}
export default Home;