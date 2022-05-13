import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onInputChange, value } = this.props;
    return (
      <button
        data-testid="save-button"
        type="button"
        onClick={ onInputChange }
        value={ value }
      >
        Salvar
      </button>
    );
  }
}
Button.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Button;
