import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="nome">
          Nome
          <input
            name="name"
            type="text"
            data-testid="name-input"
            id="nome"
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            name="description"
            type="text"
            data-testid="description-input"
            id="descrição"
          />
        </label>
        <label htmlFor="attr1">
          Ninjutsu
          <input
            name="attr1"
            type="number"
            data-testid="attr1-input"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Taijutsu
          <input
            name="attr2"
            type="number"
            data-testid="attr2-input"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Genjutsu
          <input
            name="attr3"
            type="number"
            data-testid="attr3-input"
            id="attr3"
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            name="image"
            type="text"
            data-testid="image-input"
            id="imagem"
          />
        </label>
        <label htmlFor="raridade">
          <select
            name="rarity"
            data-testid="rare-input"
            id="raridade"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="isSuperTrunfo">
          <input
            name="isSuperTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            id="isSuperTrunfo"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          id="oi"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
