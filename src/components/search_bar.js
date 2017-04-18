import React, {Component} from 'react';


/**
 * Renders the SearchBar for the App
 */
class SearchBar extends Component {


  /**
   * onInputChange - description
   *
   * @param  {type} event - describes the value of the input element
   * @return {type}       description
   *
   * @memberof SearchBar
   */
  onInputChange(event){
    console.log(event);
  }

  /**
   * render - description
   *
   * @return {type}  - the html content for the SearchBar
   *
   * @memberof SearchBar
   */
  render() {
    return (
      <div className="container-fluid row">
        <input className="col-sm-12" onChange={this.onInputChange}/>
      </div>
    );
  }
}

export default SearchBar;
