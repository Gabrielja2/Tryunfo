import React from 'react';
import PropTypes from 'prop-types';

class Attr3 extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="attr3-input">
        Attr03
        <input
          data-testid="attr3-input"
          value={ value }
          type="number"
          name="cardAttr3"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}
Attr3.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Attr3;
