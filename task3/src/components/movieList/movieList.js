import React from 'react';
import './movieList.scss';
import Movie from '../movie/movie';

function MovieList() {
  const movies = [
    {
      title: 'Movie title',
      genre: 'Action & Adventure',
      year: 2004,
      poster: require('../../img/poster.jpg'),
    },
    {
      title: 'Movie title2',
      genre: 'Action & Adventure',
      year: 2004,
      poster: require('../../img/poster.jpg'),
    },
    {
      title: 'Movie title3',
      genre: 'Action & Adventure',
      year: 2004,
      poster: require('../../img/poster.jpg'),
    },
    {
      title: 'Movie title4',
      genre: 'Action & Adventure',
      year: 2004,
      poster: require('../../img/poster.jpg'),
    },
    {
      title: 'Movie title5',
      genre: 'Action & Adventure',
      year: 2004,
      poster: require('../../img/poster.jpg'),
    },
    {
      title: 'Movie title6',
      genre: 'Action & Adventure',
      year: 2004,
      poster: require('../../img/poster.jpg'),
    },
  ]

  return (
    <div className="movie-list">
      <span className="movies-count"><b>{movies.length}</b> Movies found</span>
      <div className="movie-container">
        { movies.map(i => (<Movie key={`mov${i}`} movie={i}/>)) }
      </div>
    </div>
  );
}

export default MovieList;
