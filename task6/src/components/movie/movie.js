import React, { useContext } from 'react';
import './movie.scss';
import PropTypes from 'prop-types';
import EditMovie from '../editMovie/editMovie';
import useShowModal from '../../utils/hooks/useShowModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { MovieContext } from '../../utils/contexts/movieContext';

function Movie({movie}) {
  const [showModal, toggleModal] = useShowModal();
  const {changeMovie} = useContext(MovieContext);
  let movieYear = new Date(movie.date).getFullYear();

  return (
    <div className="movie">
      <button className="poster-btn" onClick={() => {changeMovie(movie.id)}}>
        <img alt={movie.title} src={movie.poster}/>
      </button>
      <button className="edit-btn" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
      <div className="movie-info">
        <h3>
          {movie.title}
          <span>{movie.genre}</span>
        </h3>
        <span className="year">{movieYear}</span>
      </div>
      <EditMovie isOpen={showModal}
                 editItem={movie}
                 getsClosed={toggleModal}/>
    </div>
  );
}

Movie.protoTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
}

export default Movie;
