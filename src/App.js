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
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
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

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo, cards } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    cards.push(card);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true, cardTrunfo: false });
    }
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
