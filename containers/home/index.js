import Header from '@/components/Header'
import Footer from '@/components/footer'
import React from 'react'
import FeaturedMovie from '@/components/featured-movie';
import movies from '@/mocks/movies.json';
import genres from '@/mocks/genres.json';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

const HomeContainer = ({
  selectedCategory
}) => {
  
  return (
    <>
        <FeaturedMovie movie={movies.results[0]} isCompact={true} />
        <Categories categories={genres.genres.slice(0,5)}/>
       {
        selectedCategory.movies.length > 0 && (
          <MoviesSection 
          movies={selectedCategory.movies} 
          head={genres.genres.find(genre => Number(genre.id) === Number(selectedCategory.id)).name}
          />
        )
       }
        <MoviesSection movies={movies.results.slice(7,14)} head={'populer films'}/>
    </>
  )
}

export default HomeContainer