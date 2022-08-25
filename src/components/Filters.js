import React from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';
import RareFilter from './RareFilter';

class Filters extends React.Component {
  render() {
    const { nameFilter, rareFilter, onInputChange } = this.props;
    return (
      <div>
        <NameFilter
          nameFilter={ nameFilter }
          onInputChange={ onInputChange }
        />
        <RareFilter
          rareFilter={ rareFilter }
          onInputChange={ onInputChange }
        />
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string,
  rareFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Filters;
