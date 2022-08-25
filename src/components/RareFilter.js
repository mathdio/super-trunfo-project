import React from 'react';
import PropTypes from 'prop-types';

class RareFilter extends React.Component {
  render() {
    const { rareFilter, onInputChange } = this.props;
    return (
      <select
        name="rareFilter"
        data-testid="rare-filter"
        onChange={ onInputChange }
        value={ rareFilter }
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
  rareFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default RareFilter;
