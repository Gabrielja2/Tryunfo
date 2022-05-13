import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="rare-input">
        Raridade
        <select
          data-testid="rare-input"
          value={ value }
          name="cardRare"
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}
Select.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Select;
