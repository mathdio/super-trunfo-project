import React from 'react';
import PropTypes from 'prop-types';

class NameFilter extends React.Component {
  render() {
    const { nameFilter, onInputChange } = this.props;
    return (
      <input
        name="nameFilter"
        type="text"
        data-testid="name-filter"
        placeholder="Filtro por nome"
        value={ nameFilter }
        onChange={ onInputChange }
      />
    );
  }
}

NameFilter.propTypes = {
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default NameFilter;