import React, { Component } from 'react';
import './App.css';
import Post from './components/post';
import Avatar from '@material-ui/core/Avatar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      this.callAPI();
  }
  render() {
    return (
      <div className="App">
        {/* Header */}
        <div class="app__header">
          <img className="app__headerImage" src="http://clipart-library.com/images_k/rubber-duck-silhouette/rubber-duck-silhouette-24.png" alt="Rubber Duck Silhouette" />
          <input type="text" name="" value="" />
          <div class="app__headerNav">
            <a className="app__headerNav__Link" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvykS7_vdq289Bz2KckLlbBa8FR4378oyY6P3BhiG452ihLSvOWL4tANHEq_z_M-fQWWM&usqp=CAU" alt="" /></a>
            <a className="app__headerNav__Link" href="#"><img src="https://i.pinimg.com/originals/e6/a3/07/e6a30758a4882c9dbf7310fe14041681.png" alt="" /></a>
            <Avatar
            className="app__headerNav__Avatar"
            alt="Rosskeeley"
            src="https://www.dailybreeze.com/wp-content/uploads/migration/2014/201408/NEWS_140819552_AR_0_GOLPJJIEGDOP.jpg"
            />
          </div>
        </div>
        {/* Banner */}

        {/* Posts */}
        <div class="app__posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/*  */}
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
