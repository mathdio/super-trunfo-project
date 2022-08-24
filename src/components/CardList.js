import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { savedCards, deleteCard } = this.props;
    return (
      <div>
        {savedCards.map((card) => {
          const {
            name, description, attr1, attr2,
            attr3, image, rarity, isSuperTrunfo,
          } = card;
          return (
            <div key={ name }>
              <Card
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rarity }
                cardTrunfo={ isSuperTrunfo }
              />
              <button
                type="button"
                name={ name }
                data-testid="delete-button"
                onClick={ deleteCard }
              >
                Excluir
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  savedCards: PropTypes.array,
  deleteCard: PropTypes.func,
}.isRequired;

export default CardList;
