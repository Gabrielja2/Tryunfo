import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="trunfo-input">
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          onChange={ onInputChange }
          checked={ value }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}
Checkbox.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};
export default Checkbox;
