import React from 'react';
import style from './movie.module.scss';
import PropTypes from 'prop-types';
import useShowModal from '../../utils/hooks/useShowModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import dynamic from "next/dynamic";

const EditMovie = dynamic(import('../editMovie/editMovie'));

function Movie({movie}) {
  const [showModal, toggleModal] = useShowModal();
  let movieYear = new Date(movie.date).getFullYear();

  return (
    <div className={style.movie}>
      <Link className={style.posterbtn} to={`/film/${movie.id}`}>
        <img alt={movie.title} src={movie.poster}/>
      </Link>
      <button className={style.editbtn} onClick={toggleModal}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
      <div className={style.movieinfo}>
        <h3>
          {movie.title}
          <span>{movie.genre}</span>
        </h3>
        <span className={style.year}>{movieYear}</span>
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
