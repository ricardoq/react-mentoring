import React from 'react';
import './editMovie.scss';
import Modal from '../modal/modal';
import Input from '../../utils/input/input';
import DropDown from '../../utils/dropdown/dropdown';
import Button from '../../utils/button/button';
import PropTypes from 'prop-types';

class EditMovie extends React.Component {
  options = [{
    label: 'Documentary',
    value: 'documentary',
  },{
    label: 'Comedy',
    value: 'comedy',
  },{
    label: 'Horror',
    value: 'horror',
  },{
    label: 'Crime',
    value: 'crime',
  }];

  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen || false,
      editItem: this.props.editItem || {},
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  onInputChange(key, value) {
    const stateUpdate = this.state.editItem;
    stateUpdate[key] = value;
    this.setState({
      editItem: stateUpdate,
    });
  }

  resetForm() {
    this.setState({
      editItem: {},
    });
  }

  submitForm() {
    // TODO(quinonez): Here will be the API call
    this.closeModal();
  }

  render() {
    if (this.state.isOpen) {
      return (
        <Modal className="edit-movie" close={this.closeModal.bind(this)}>
          <form>
            <h2>{this.state.editItem.id ? 'EDIT' : 'ADD' } MOVIE</h2>
            {
              this.state.editItem.id ? (<div className="input-wrapper">
              <label>MOVIE ID</label>
              <p>123</p>
              </div>) : null}
            <Input label="TITLE"
                   placeholder="Set title"
                   value={this.state.editItem.title || ''}
                   onChange={(e) => this.onInputChange('title', e.target.value)}/>
            <Input label="RELEASE DATE"
                   placeholder="Select date"
                   type="date"
                   value={this.state.editItem.date || ''}
                   onChange={(e) => this.onInputChange('date', e.target.value)}/>
            <Input label="MOVIE URL"
                   placeholder="Movie URL here"
                   value={this.state.editItem.url || ''}
                   onChange={(e) => this.onInputChange('url', e.target.value)}/>
            <DropDown label="GENRE"
                      placeholder="Select genre"
                      options={this.options}
                      value={this.state.editItem.genre || ''}
                      onChange={(e) => this.onInputChange('genre', e.target.value)}/>
            <Input label="OVERVIEW"
                   placeholder="Overview here"
                   value={this.state.editItem.overview || ''}
                   onChange={(e) => this.onInputChange('overview', e.target.value)}/>
            <Input label="RUNTIME"
                   placeholder="Runtime here"
                   value={this.state.editItem.runtime || ''}
                   onChange={(e) => this.onInputChange('runtime', e.target.value)}/>
          </form>
          <div className="action-buttons">
            <Button color="primary-inverted"
                    onClick={this.resetForm.bind(this)}>RESET</Button>
            <Button onClick={this.submitForm.bind(this)}>SUBMIT</Button>
          </div>
        </Modal>
      );
    } else {
      return (null)
    }
  }
}

EditMovie.propTypes= {
  isOpen: PropTypes.bool,
  editItem: PropTypes.object,
  getsClosed: PropTypes.func,
}

export default EditMovie;
