import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class NameFilter extends React.Component {
  render() {
    const { savedCards, nameFilter, onInputChange } = this.props;
    return (
      <div>
        <input
          name="nameFilter"
          type="text"
          data-testid="name-filter"
          placeholder="Filtro por nome"
          value={ nameFilter }
          onChange={ onInputChange }
        />
        {savedCards.filter((card) => card.name === nameFilter).map((card) => {
          const {
            name, description, attr1, attr2,
            attr3, image, rarity, isSuperTrunfo,
          } = card;
          return (<Card
            key={ `${name}-filtered` }
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rarity }
            cardTrunfo={ isSuperTrunfo }
          />);
        })}
      </div>
    );
  }
}

NameFilter.propTypes = {
  savedCards: PropTypes.array,
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default NameFilter;
