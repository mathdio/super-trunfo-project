import React from 'react';
import Card from './components/Card';
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
  };

  // checkSuperTrunfo = () => {
  //   const { savedCards } = this.state;
  //   if (savedCards.some((card) => card.isSuperTrunfo)) {
  //     this.setState({ hasTrunfo: true });
  //   }
  // };

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
      });
      const { savedCards } = this.state;
      if (savedCards.some((card) => card.isSuperTrunfo)) {
        this.setState({ hasTrunfo: true });
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.checkForm(); });
  };

  render() {
    const {
      name, description, attr1, attr2, attr3, image,
      rarity, isSuperTrunfo, saveButtonDisabled, savedCards, hasTrunfo,
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
          // savedCards={ savedCards }
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
      </div>
    );
  }
}

export default App;
