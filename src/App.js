import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const SuperT = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: SuperT,
    });

    this.setState(
      ({
        cardName,
        cardDescription,
        cardRare,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      }) => {
        const valorMin = 0;
        const valorMax = 90;
        const maxTotal = 210;

        const attr1 = Number(cardAttr1);
        const attr2 = Number(cardAttr2);
        const attr3 = Number(cardAttr3);

        if (
          cardName.length > 0
          && cardDescription.length > 0
          && cardImage.length > 0
          && cardRare.length > 0
          && attr1 <= valorMax && attr1 >= valorMin
          && attr2 <= valorMax && attr2 >= valorMin
          && attr3 <= valorMax && attr3 >= valorMin
          && attr1 + attr2 + attr3 <= maxTotal
        ) {
          return { isSaveButtonDisabled: false };
        }
        return { isSaveButtonDisabled: true };
      },
    );
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div className="cont">
        <h1>Tryunfo</h1>
        <div className="container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
