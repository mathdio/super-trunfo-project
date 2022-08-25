import React from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';
import RareFilter from './RareFilter';
import TrunfoFilter from './TrunfoFilter';

class Filters extends React.Component {
  render() {
    const { nameFilter, onInputChange, disableFilter, trunfoFilter } = this.props;
    return (
      <div>
        <NameFilter
          nameFilter={ nameFilter }
          onInputChange={ onInputChange }
          disableFilter={ disableFilter }
        />
        <RareFilter
          onInputChange={ onInputChange }
          disableFilter={ disableFilter }
        />
        <TrunfoFilter
          onInputChange={ onInputChange }
          trunfoFilter={ trunfoFilter }
        />
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
  disableFilter: PropTypes.bool,
  trunfoFilter: PropTypes.bool,
}.isRequired;

export default Filters;
