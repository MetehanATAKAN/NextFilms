import Header from '@/components/Header'
import Footer from '@/components/footer'
import React from 'react'
import FeaturedMovie from '@/components/featured-movie';
import movies from '@/mocks/movies.json';
import genres from '@/mocks/genres.json';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

const HomeContainer = () => {
  return (
    <>
        <FeaturedMovie movie={movies.results[0]} isCompact={true} />
        <Categories categories={genres.genres.slice(0,5)}/>
        <MoviesSection movies={movies.results.slice(0,6)} head={'animation'}/>
        <MoviesSection movies={movies.results.slice(6,12)} head={'populer films'}/>
    </>
  )
}

export default HomeContainer