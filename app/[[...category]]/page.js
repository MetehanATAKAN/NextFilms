

import HomeContainer from '@/containers/home'
import React  from 'react'
import movies from '@/mocks/movies.json';

const HomePage = ({params}) => {
    let selectedCategory ;

    if(params?.category?.length > 0) selectedCategory = true;
  return (
    <div>
      <HomeContainer selectedCategory={{
        id:params?.category?.[0] ?? '',
        movies:selectedCategory ? movies.results.slice(0,Math.floor(Math.random()*10+1)) : []
      }} />
    </div>
  )
}

export default HomePage