import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { onInputChange, cardTrunfo } = this.props;
    return (
      <label htmlFor="isSuperTrunfo">
        É Super Trunfo?
        <input
          name="isSuperTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          id="isSuperTrunfo"
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default Checkbox;
