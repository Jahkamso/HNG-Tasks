import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';

const Home = ({movie, movieDetails, movieSelect}) => {
  return (
    <>
      <Hero />
      <MovieCard
        movie={movie}
        movieDetails={movieDetails}
        movieSelect={movieSelect}
      />
    </>
  );
};
export default Home;
