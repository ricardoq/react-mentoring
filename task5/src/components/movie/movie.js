import React, {useState} from 'react';
import './movie.scss';
import PropTypes from 'prop-types';
import EditMovie from '../editMovie/editMovie';

function Movie({movie}) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="movie">
      <button className="poster-btn" onClick={toggleModal}>
        <img alt={movie.title} src={movie.poster}/>
      </button>
      <div className="movie-info">
        <h3>
          {movie.title}
          <span>{movie.genre}</span>
        </h3>
        <span className="year">{movie.year}</span>
      </div>
      <EditMovie isOpen={showModal}
                 editItem={movie}
                 getsClosed={toggleModal}/>
    </div>
  );
}

/* class Movie extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const {movie} = this.props;
    const {showModal} = this.state;
    return (
      <div className="movie"
           onClick={this.toggleModal}>
        <img src={movie.poster}/>
        <div className="movie-info">
          <h3>
            {movie.title}
            <span>{movie.genre}</span>
          </h3>
          <span className="year">{movie.year}</span>
        </div>
        <EditMovie isOpen={showModal}
                   editItem={movie}
                   getsClosed={this.toggleModal}/>
      </div>
    );
  }
} */

Movie.protoTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
}

export default Movie;
