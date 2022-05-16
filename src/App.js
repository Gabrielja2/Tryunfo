import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/app.css';
import AllCards from './components/AllCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      /**
       * Acredito que esse formato de estado estã errado, pq vc colocou infos de um unico card na raiz
       * do estado, sendo que o estado tem um ARRAY de CARDS (objeto)
       */
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
      cards: [
      ],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  handleDeleteCard(cardName) {
    const {
      cards,
    } = this.state;

    const newCardsArray = cards.filter((c) => c.cardName !== cardName);

    /**
     * depois de excluir um card, tem que verificar no array se ainda existe um super trunfo, se não existir
     * tem que atualizar o state de hasTrunfo
     */

    const hasTrunfo = Boolean(newCardsArray.find((card) => card.cardTrunfo));
    console.log({ hasTrunfo });

    this.setState({
      cards: newCardsArray,
      hasTrunfo,
    });
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
          && attr1 <= valorMax
          && attr1 >= valorMin
          && attr2 <= valorMax
          && attr2 >= valorMin
          && attr3 <= valorMax
          && attr3 >= valorMin
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
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // nunca se deve alterar o estado diretamente como feito abaixo.
    // sempre tem que usar a função de setState
    // cards.push(card);

    this.setState({
      // aqui vc ta limpando os dados, ok
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // aqui vc ta unindo o registro novo de card com o array ja existente
      cards: [...cards, newCard],
    });
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  validarTryunfo() {
    const { hasTrunfo } = this.state;
    if (hasTrunfo) {
      this.setState({ hasTrunfo: false });
    } else {
      this.setState({ hasTrunfo: true });
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
      cards,
      isSaveButtonDisabled,
    } = this.state;
    console.log('hasTrunfo ->', hasTrunfo);

    return (
      <div className="cont">
        <div className="titles">
          <div className="t1"><h1>Tryunfo</h1></div>
          <div className="t2"><h1>Preview nova carta</h1></div>
        </div>
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
            hasTrunfo={ hasTrunfo }
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
        <div>
          <AllCards
            cards={ cards }
            deleteCard={ this.handleDeleteCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
