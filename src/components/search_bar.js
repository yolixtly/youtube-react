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

    this.onInputChange = this.onInputChange.bind(this);
  }


  /**
   * onInputChange - Grabs the input Value
   *
   * @param  {type} event - describes the value of the input element
   *
   * @memberof SearchBar
   */
  onInputChange(event){
    this.setState({
      term: event.target.value
    })
  }

  /**
   * render - description
   *
   * @return {ReactElement}  - markup for SearchBar
   *
   * @memberof SearchBar
   */
  render() {
    return (
      <div className="container-fluid row">
        <input
          value={this.state.term}
          className="col-sm-12"
          onChange={this.onInputChange}/>
        Value of the Input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
