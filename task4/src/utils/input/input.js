import React from 'react';
import './input.scss';
import PropTypes from 'prop-types';

class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  render() {
    return (
      <div className="input-wrapper">
        <label>{this.props.label}</label>
        <input type={this.props.type || 'text'}
               placeholder={this.props.placeholder}
               value={this.state.value}
               onChange={this.props.onChange} />
      </div>
    );
  }
}

Input.protoTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
