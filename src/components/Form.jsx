import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameInput from './NameInput';
import TextArea from './TextArea';
import Attr1 from './Attr1';
import Attr2 from './Attr2';
import Attr3 from './Attr3';
import TextInput from './TextInput';
import Select from './Select';
import Checkbox from './Checkbox';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo, */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <NameInput
          onInputChange={ onInputChange }
          value={ cardName }
        />
        <TextArea
          onInputChange={ onInputChange }
          value={ cardDescription }
        />
        <Attr1
          onInputChange={ onInputChange }
          value={ cardAttr1 }
        />
        <Attr2
          onInputChange={ onInputChange }
          value={ cardAttr2 }
        />
        <Attr3
          onInputChange={ onInputChange }
          value={ cardAttr3 }
        />
        <TextInput
          onInputChange={ onInputChange }
          value={ cardImage }
        />
        <Select
          onInputChange={ onInputChange }
          value={ cardRare }
        />
        <Checkbox
          onInputChange={ onInputChange }
          value={ cardTrunfo }
        />
        <div>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  /* hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.bool.isRequired,
};

export default Form;
