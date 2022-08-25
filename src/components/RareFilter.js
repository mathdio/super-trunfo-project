import React from 'react';
import PropTypes from 'prop-types';

class RareFilter extends React.Component {
  render() {
    const { onInputChange, disableFilter } = this.props;
    return (
      <select
        name="rareFilter"
        data-testid="rare-filter"
        onChange={ onInputChange }
        disabled={ disableFilter }
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

RareFilter.propTypes = {
  onInputChange: PropTypes.func,
  disableFilter: PropTypes.bool,
}.isRequired;

export default RareFilter;
