import React from 'react'

const Info = ({ allMoviesCount , favouriteMovies }) => {
  return (
    <div className='info'>
        <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
        <p className='fs-4 text-uppercase'>Sevimli film: {favouriteMovies}</p>
    </div>
  )
}

export default Info