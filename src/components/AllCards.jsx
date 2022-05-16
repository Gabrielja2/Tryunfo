import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const { cards, deleteCard } = this.props;
    return (
      <div className="cartas">
        <h1>Cartas</h1>
        <div>
          { cards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => deleteCard(card.cardName) }
              >
                Excluir
              </button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape()),
  deleteCard: PropTypes.func.isRequired,
};
AllCards.defaultProps = {
  cards: [],
};
export default AllCards;
