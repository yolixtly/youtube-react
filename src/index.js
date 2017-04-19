import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCgFwmBbvcdQx0emfJFj-QirpgYKSjI1bI';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos: []
    };
    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos })
    });
  }
  render(){
    console.log('array:', this.state.videos[0]);
    return (
      <div>
        <SearchBar />
        <VideoDetail videos={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
