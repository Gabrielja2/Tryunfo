import React from 'react';
import PropTypes from 'prop-types';

class Attr2 extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="attr2-input">
        Attr02
        <input
          data-testid="attr2-input"
          value={ value }
          type="number"
          name="cardAttr2"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}
Attr2.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Attr2;
