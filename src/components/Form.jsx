import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description-input">
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          <input data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="attr2-input">
          <input data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="attr3-input">
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image-input">
          <input data-testid="image-input" type="text" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input data-testid="trunfo-input" type="checkbox" />
        </label>
        <div>
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}

export default Form;