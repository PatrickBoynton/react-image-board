import './App.css';
import React, { Component } from 'react';

class ImageForm extends Component {
  render() {
    return (
      <form>
        <input placeholder="Image Url"/>
        <input placeholder="Image Caption"/>
        <button type="submit" className="btn">Add Image</button>
      </form>
    )
  }
}

class ImageList extends Component {
  render() {
    return (
      <ul>
        <li><h2>Image Title</h2></li>
        <li>Image</li>
      </ul>
    )
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ImageForm/>
        <ImageList/>
      </React.Fragment>
    )
  }
}

export default App;
