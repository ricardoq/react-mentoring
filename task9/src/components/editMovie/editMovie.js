import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";
import { Formik } from 'formik';
import "./editMovie.scss";
import Modal from "../modal/modal";
import Input from "../../utils/input/input";
import DropDown from "../../utils/dropdown/dropdown";
import Button from "../../utils/button/button";
import PropTypes from "prop-types";
import { asyncUpdateMovieAction, asyncAddMovieAction } from '../../utils/actions/actionMovies';
import { genresMovie } from '../../utils/constans';
import { stringifyDate } from '../../utils/utils';

const options = Object.values(genresMovie).map(value => ({label: value, value}));

export function EditMovie({ isOpen = false,
                     editItem = {},
                     getsClosed,
                     updateMovie,
                     addMovie
                  }) {
  let errors = {};
  const [isOpenState, setIsOpen] = useState(isOpen);
  const [editItemState, setEditItem] = useState(editItem);
  const closeModal = () => {
    getsClosed(false);
    setIsOpen(false);
  };
  const resetForm = () => setEditItem({});
  const submitForm = (updateValues) => {
    if (id) {
      updateMovie({
        id,
        ...updateValues
      });
    } else {
      addMovie(updateValues);
    }
    closeModal();
  };
  const validate = (values) => {
    errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.url) {
      errors.url = 'Required';
    }
    if (!values.poster) {
      errors.poster = 'Required';
    }
    if (!values.overview) {
      errors.overview = 'Required';
    }
    if (values.runtime <= 0) {
      errors.runtime = 'Required';
    }

    return errors;
  };

  const {id, title, date, url, genre, poster, overview, runtime} = editItemState;

  useEffect(() => {
    setIsOpen(isOpen);
  },[isOpen]);

  return isOpenState ? (
    <Modal className="edit-movie" close={closeModal}>
      <Formik initialValues={{
                              title: title || '',
                              date: date || '',
                              url: url || '',
                              poster: poster || '',
                              genre: genre || genresMovie.ACTION,
                              overview: overview || '',
                              runtime: runtime || 0,
                            }}
              validate={validate}
              onSubmit={submitForm}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <form id="edit-form" onSubmit={handleSubmit}>
            <h2>{id ? "EDIT" : "ADD"} MOVIE</h2>
            {id ? (
              <div className="input-wrapper">
                <label>MOVIE ID</label>
                <p>{id}</p>
              </div>
            ) : null}
            <Input
              label="TITLE"
              placeholder="Set title"
              name="title"
              value={values.title}
              onChange={handleChange}
              errors={errors.title}
              dataTestid="title"
            />
            <Input
              label="RELEASE DATE"
              placeholder="Select date"
              name="date"
              type="date"
              value={stringifyDate(new Date(values.date))}
              onChange={handleChange}
              errors={errors.date}
              dataTestid="date"
            />
            <Input
              label="MOVIE URL"
              placeholder="Movie URL here"
              name="url"
              value={values.url}
              onChange={handleChange}
              errors={errors.url}
              dataTestid="url"
            />
            <Input
              label="POSTER URL"
              placeholder="Poster URL here"
              name="poster"
              value={values.poster}
              onChange={handleChange}
              errors={errors.poster}
              dataTestid="poster"
            />
            <DropDown
              label="GENRE"
              placeholder="Select genre"
              name="genre"
              options={options}
              value={values.genre}
              onChange={handleChange}
              errors={errors.genre}
              dataTestid="genre"
            />
            <Input
              label="OVERVIEW"
              placeholder="Overview here"
              name="overview"
              value={values.overview}
              onChange={handleChange}
              errors={errors.overview}
              dataTestid="overview"
            />
            <Input
              label="RUNTIME"
              placeholder="Runtime here"
              name="runtime"
              type="number"
              value={parseInt(values.runtime)}
              onChange={handleChange}
              errors={errors.runtime}
              dataTestid="runtime"
            />
            <div className="action-buttons">
              <Button color="primary-inverted" onClick={resetForm}>
                RESET
              </Button>
              <Button type="submit">SUBMIT</Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  ) : null;
}

EditMovie.propTypes= {
  isOpen: PropTypes.bool,
  editItem: PropTypes.object,
  getsClosed: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMovie: (updates) => dispatch(asyncUpdateMovieAction(updates)),
    addMovie: (newMovie) => dispatch(asyncAddMovieAction(newMovie)),
  };
}

export default connect(null, mapDispatchToProps)(EditMovie);
