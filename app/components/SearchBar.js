import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  handleChange(event) {
    this.props.onUserInput(event.target.value)
  }

  handleClick() {
    this.props.onReload();
  }

  render() {
    return (
    <div>
    <input type="search"
                  placeholder="search"
                  value={this.props.filterText}
                  onChange={this.handleChange.bind(this)} />
    <input type="button" value="Load"
      onClick={this.handleClick.bind(this)} />
    </div>
    )
  }
}

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  onReload: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
}

export default SearchBar;