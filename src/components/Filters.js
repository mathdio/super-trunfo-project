import React from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';

class Filters extends React.Component {
  render() {
    const { savedCards, nameFilter, onInputChange } = this.props;
    return (
      <div>
        <NameFilter
          savedCards={ savedCards }
          nameFilter={ nameFilter }
          onInputChange={ onInputChange }
        />
      </div>
    );
  }
}

Filters.propTypes = {
  savedCards: PropTypes.array,
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Filters;
