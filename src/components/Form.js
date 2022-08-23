import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <label htmlFor="nome">
          Nome
          <input
            name="name"
            type="text"
            data-testid="name-input"
            id="nome"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            name="description"
            type="text"
            data-testid="description-input"
            id="descrição"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1">
          Ninjutsu
          <input
            name="attr1"
            type="number"
            data-testid="attr1-input"
            id="attr1"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2">
          Taijutsu
          <input
            name="attr2"
            type="number"
            data-testid="attr2-input"
            id="attr2"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3">
          Genjutsu
          <input
            name="attr3"
            type="number"
            data-testid="attr3-input"
            id="attr3"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            name="image"
            type="text"
            data-testid="image-input"
            id="imagem"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="raridade">
          <select
            name="rarity"
            data-testid="rare-input"
            id="raridade"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="isSuperTrunfo">
          <input
            name="isSuperTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            id="isSuperTrunfo"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          id="oi"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
