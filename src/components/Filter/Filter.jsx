import { Component } from "react";
import PropTypes from "prop-types";

export class Filter extends Component {
  state = {};

  render() {
    const { handleFilterChange, filter } = this.props;
    return <input type="text" onChange={handleFilterChange} value={filter} />;
  }
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
