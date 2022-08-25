import React from 'react';
import PropTypes from 'prop-types';

class NameFilter extends React.Component {
  render() {
    const { nameFilter, onInputChange, disableFilter } = this.props;
    return (
      <input
        name="nameFilter"
        type="text"
        data-testid="name-filter"
        placeholder="Filtro por nome"
        value={ nameFilter }
        onChange={ onInputChange }
        disabled={ disableFilter }
      />
    );
  }
}

NameFilter.propTypes = {
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
  disableFilter: PropTypes.bool,
}.isRequired;

export default NameFilter;
