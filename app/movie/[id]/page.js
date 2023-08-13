import React from 'react'
import movies from '@/mocks/movies.json';
import MovieDetails from '@/components/movie-details';
import {notFound} from 'next/navigation';




const MoviePage = async ({params}) => {
   
    const movie = movies.results.find(data => data.id === Number(params.id));
    
    if(!movie) {
        notFound();
    }
  return (
    <div>
        <MovieDetails movie={movie}/>
    </div>
  )
}

export default MoviePage