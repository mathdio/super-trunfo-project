import React from 'react';
import PropTypes from 'prop-types';

class TrunfoFilter extends React.Component {
  render() {
    const { onInputChange, trunfoFilter } = this.props;
    return (
      <label htmlFor="trunfoFilter">
        Super Trunfo
        <input
          name="trunfoFilter"
          type="checkbox"
          id="trunfoFilter"
          data-testid="trunfo-filter"
          onChange={ onInputChange }
          checked={ trunfoFilter }
        />
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  onInputChange: PropTypes.func,
  trunfoFilter: PropTypes.bool,
}.isRequired;

export default TrunfoFilter;
