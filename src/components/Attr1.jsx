import React from 'react';
import PropTypes from 'prop-types';

class Attr1 extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="attr1-input">
        Attr01
        <input
          data-testid="attr1-input"
          value={ value }
          type="number"
          name="cardAttr1"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}
Attr1.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Attr1;
