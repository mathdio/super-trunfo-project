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
    rarity: '',
    isSuperTrunfo: false,
  };

  render() {
    const {
      name, description, attr1, attr2, attr3, image,
      rarity, isSuperTrunfo,
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
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ () => {} }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
