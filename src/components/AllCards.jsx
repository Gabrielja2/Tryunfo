import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const { localSalvo, deleteCard } = this.props;
    return (
      <div>
        <h1>Cartas</h1>
        <div>
          { localSalvo.map((card) => (
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
                onClick={ deleteCard }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
AllCards.propTypes = {
  localSalvo: PropTypes.arrayOf(PropTypes.shape()),
  deleteCard: PropTypes.func.isRequired,
};
AllCards.defaultProps = {
  localSalvo: [],
};
export default AllCards;
