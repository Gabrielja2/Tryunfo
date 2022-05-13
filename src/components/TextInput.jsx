import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          value={ value }
          type="text"
          name="cardImage"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}
TextInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default TextInput;
