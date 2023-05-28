import CategoriesLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MovieSectionLoading from '@/components/movies-section/loading'
import React from 'react'

const Loading = () => {
  return (
   <div>
    <FeaturedMovieLoading/>
     <CategoriesLoading/>
     <MovieSectionLoading/>
     <MovieSectionLoading/>
     <MovieSectionLoading/>
   </div>
  )
}

export default Loading