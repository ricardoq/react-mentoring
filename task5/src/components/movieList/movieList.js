import React from 'react';
import './movieList.scss';
import Movie from '../movie/movie';

function MovieList() {
  const movies = [
    {
      id: 'abc1',
      title: 'Movie title',
      genre: 'Action & Adventure',
      year: 2004,
      date: '10/10/20',
      url: 'url',
      overview: 'overview',
      runtime: 'runtime',
      poster: require('../../img/poster.jpg'),
    },
    {
      id: 'abc2',
      title: 'Movie title2',
      genre: 'Action & Adventure',
      year: 2004,
      date: '10/10/20',
      url: 'url',
      overview: 'overview',
      runtime: 'runtime',
      poster: require('../../img/poster.jpg'),
    },
    {
      id: 'abc3',
      title: 'Movie title3',
      genre: 'Action & Adventure',
      year: 2004,
      date: '10/10/20',
      url: 'url',
      overview: 'overview',
      runtime: 'runtime',
      poster: require('../../img/poster.jpg'),
    },
    {
      id: 'abc4',
      title: 'Movie title4',
      genre: 'Action & Adventure',
      year: 2004,
      date: '10/10/20',
      url: 'url',
      overview: 'overview',
      runtime: 'runtime',
      poster: require('../../img/poster.jpg'),
    },
    {
      id: 'abc5',
      title: 'Movie title5',
      genre: 'Action & Adventure',
      year: 2004,
      date: '10/10/20',
      url: 'url',
      overview: 'overview',
      runtime: 'runtime',
      poster: require('../../img/poster.jpg'),
    },
    {
      id: 'abc6',
      title: 'Movie title6',
      genre: 'Action & Adventure',
      year: 2004,
      date: '10/10/20',
      url: 'url',
      overview: 'overview',
      runtime: 'runtime',
      poster: require('../../img/poster.jpg'),
    },
  ]

  return (
    <div className="movie-list">
      <span className="movies-count"><b>{movies.length}</b> Movies found</span>
      <div className="movie-container">
        { movies.map(i => (<Movie key={`mov${i.id}`} movie={i}/>)) }
      </div>
    </div>
  );
}

export default MovieList;
