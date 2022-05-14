import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <label htmlFor="description-input">
        Descrição
        <br />
        <textarea
          data-testid="description-input"
          value={ value }
          name="cardDescription"
          onChange={ onInputChange }
        />
      </label>

    );
  }
}
TextArea.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default TextArea;
