import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { savedCards, deleteCard, nameFilter, rareFilter, trunfoFilter } = this.props;
    return (
      <div>
        {savedCards.filter((card) => card.name.match(nameFilter))
          .filter((card) => {
            if (trunfoFilter === true) {
              return card.isSuperTrunfo === true;
            }
            if (rareFilter === 'todas') {
              return card;
            }
            return card.rarity === rareFilter;
          })
          // .find((card) => {
          //   const { isSuperTrunfo } = card;
          //   return isSuperTrunfo === true;
          // })
          .map((card) => {
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
  nameFilter: PropTypes.string,
  rareFilter: PropTypes.string,
  superTrunfo: PropTypes.bool,
  trunfoFilter: PropTypes.bool,
}.isRequired;

export default CardList;
