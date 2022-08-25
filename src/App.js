import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Filters from './components/Filters';
import Form from './components/Form';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    image: '',
    rarity: 'normal',
    isSuperTrunfo: false,
    saveButtonDisabled: true,
    savedCards: [],
    hasTrunfo: false,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
    disableFilter: false,
  };

  renderCheckbox = () => {
    const { savedCards } = this.state;
    if (savedCards.some((card) => card.isSuperTrunfo)) {
      console.log(savedCards);
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  deleteCard = ({ target }) => {
    const { name } = target;
    const { savedCards } = this.state;
    const newDeck = savedCards.filter((card) => card.name !== name);
    this.setState({ savedCards: newDeck }, () => this.renderCheckbox());
  };

  saveCard = () => {
    const {
      name, description, attr1, attr2, attr3, image, rarity, isSuperTrunfo,
    } = this.state;
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, {
        name,
        description,
        attr1,
        attr2,
        attr3,
        image,
        rarity,
        isSuperTrunfo,
      }],
    }), () => {
      this.setState({
        name: '',
        description: '',
        image: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        rarity: 'normal',
      }, () => this.checkForm());
      const { savedCards } = this.state;
      if (savedCards.some((card) => card.isSuperTrunfo)) {
        this.setState({ hasTrunfo: true, isSuperTrunfo: false });
      }
    });
  };

  checkForm = () => {
    const {
      name, description, attr1, attr2, attr3, image, rarity,
    } = this.state;
    const sumAttr = Number(attr1) + Number(attr2) + Number(attr3);
    const attrLimit = 210;
    const attrMin = 0;
    const attrMax = 90;
    if (name === '' || description === '' || image === ''
    || rarity === '' || attr1 === '' || attr2 === '' || attr3 === ''
    || sumAttr > attrLimit || Number(attr1) > attrMax
    || Number(attr1) < attrMin || Number(attr2) > attrMax
    || Number(attr2) < attrMin || Number(attr3) > attrMax || Number(attr3) < attrMin) {
      this.setState({ saveButtonDisabled: true });
    } else {
      this.setState({ saveButtonDisabled: false });
    }
  };

  disableFilters = () => {
    const { trunfoFilter } = this.state;
    if (trunfoFilter === true) {
      this.setState({ disableFilter: true, nameFilter: '', rareFilter: 'todas' });
    } else {
      this.setState({ disableFilter: false });
    }
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.checkForm(); this.disableFilters(); });
  };

  render() {
    const {
      name, description, attr1, attr2, attr3, image, savedCards,
      rarity, isSuperTrunfo, saveButtonDisabled, hasTrunfo,
      nameFilter, rareFilter, disableFilter, trunfoFilter,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ isSuperTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ saveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveCard }
        />
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
        <Filters
          nameFilter={ nameFilter }
          onInputChange={ this.handleChange }
          disableFilter={ disableFilter }
        />
        <CardList
          savedCards={ savedCards }
          deleteCard={ this.deleteCard }
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
        />
      </div>
    );
  }
}

export default App;
