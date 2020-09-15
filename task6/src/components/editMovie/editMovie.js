import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";
import "./editMovie.scss";
import Modal from "../modal/modal";
import Input from "../../utils/input/input";
import DropDown from "../../utils/dropdown/dropdown";
import Button from "../../utils/button/button";
import PropTypes from "prop-types";
import { updateMovieAction } from '../../utils/actions/actionMovies';
import { genresMovie } from '../../utils/constans';

const options = Object.values(genresMovie).map(value => ({label: value, value}));

function EditMovie({ isOpen = false, editItem = {}, getsClosed }) {
  const [isOpenState, setIsOpen] = useState(isOpen);
  const [editItemState, setEditItem] = useState(editItem);
  const closeModal = () => {
    getsClosed(false);
    setIsOpen(false);
  };
  const resetForm = () => setEditItem({});
  const submitForm = () => closeModal();
  const onInputChange = (key, value) => {
    const stateUpdate = editItemState;
    stateUpdate[key] = value;
    setEditItem(stateUpdate);
  };
  const {id, title, date, url, genre, overview, runtime} = editItemState;

  useEffect(() => {
    setIsOpen(isOpen);
  },[isOpen]);

  return isOpenState ? (
    <Modal className="edit-movie" close={closeModal}>
      <form>
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
          value={title || ""}
          onChange={(e) => onInputChange("title", e.target.value)}
        />
        <Input
          label="RELEASE DATE"
          placeholder="Select date"
          type="date"
          value={date || ""}
          onChange={(e) => onInputChange("date", e.target.value)}
        />
        <Input
          label="MOVIE URL"
          placeholder="Movie URL here"
          value={url || ""}
          onChange={(e) => onInputChange("url", e.target.value)}
        />
        <DropDown
          label="GENRE"
          placeholder="Select genre"
          options={options}
          value={genre || ""}
          onChange={(e) => onInputChange("genre", e.target.value)}
        />
        <Input
          label="OVERVIEW"
          placeholder="Overview here"
          value={overview || ""}
          onChange={(e) => onInputChange("overview", e.target.value)}
        />
        <Input
          label="RUNTIME"
          placeholder="Runtime here"
          value={runtime || ""}
          onChange={(e) => onInputChange("runtime", e.target.value)}
        />
      </form>
      <div className="action-buttons">
        <Button color="primary-inverted" onClick={resetForm}>
          RESET
        </Button>
        <Button onClick={submitForm}>SUBMIT</Button>
      </div>
    </Modal>
  ) : null;
}

EditMovie.protoTypes = {
  isOpen: PropTypes.bool,
  editItem: PropTypes.object,
  getsClosed: PropTypes.func,
};

/**
 * TODO(quinonez):
 *  - Fix form behaviour
 *  - Add addMovie dispatcher
 *  - Call update/add movie according the edition id.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    updateMovie: (updates) => dispatch(updateMovieAction(updates)),
  };
}

export default connect(null, mapDispatchToProps)(EditMovie);
