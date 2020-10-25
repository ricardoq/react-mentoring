import React from 'react';
import './movie.scss';
import PropTypes from 'prop-types';
import EditMovie from '../editMovie/editMovie';
import useShowModal from '../../utils/hooks/useShowModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Movie({movie}) {
  const [showModal, toggleModal] = useShowModal();
  let movieYear = new Date(movie.date).getFullYear();

  return (
    <div className="movie">
      <Link className="poster-btn" to={`/film/${movie.id}`}>
        <img alt={movie.title} src={movie.poster}/>
      </Link>
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

Movie.propTypes= {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
}

export default Movie;
