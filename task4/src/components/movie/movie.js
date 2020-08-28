import React from 'react';
import './movie.scss';
import PropTypes from 'prop-types';
import EditMovie from '../editMovie/editMovie';

class Movie extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      movie: props.movie,
      showModal: false,
    };
  }

  toggleModal(value) {
    console.log(value || !this.state.showModal);
    this.setState({
      showModal: value || !this.state.showModal
    });
  }

  render() {
    return (
      <div className="movie"
           onClick={this.toggleModal.bind(this, !this.state.showModal)}>
        <img src={this.props.movie.poster}/>
        <div className="movie-info">
          <h3>
            {this.props.movie.title}
            <span>{this.props.movie.genre}</span>
          </h3>
          <span className="year">{this.props.movie.year}</span>
        </div>
        <EditMovie isOpen={this.state.showModal}
                   editItem={this.props.movie}
                   getsClosed={this.toggleModal.bind(this, false)}/>
      </div>
    );
  }
}

Movie.protoTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
}

export default Movie;
