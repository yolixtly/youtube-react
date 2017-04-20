import React, {Component} from 'react';


/**
 * Renders the SearchBar Component for the App
 */
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="container-fluid row search-bar">
        <input
          value={this.state.term}
          className="col-sm-12"
          onChange={event => this.onInputChange(event.target.value)}/>
        Value of the Input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
