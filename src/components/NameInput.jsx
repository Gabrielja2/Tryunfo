import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="name-input">
        Nome:
        <br />
        <input
          data-testid="name-input"
          value={ value }
          type="text"
          name="cardName"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}
NameInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default NameInput;
