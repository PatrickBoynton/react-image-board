import './App.css';
import React, { Component } from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      imgCaption:""
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addImage(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Image Url" name="imgUrl" value={this.state.imgUrl}/>
        <input placeholder="Image Caption" name="imgCaption" value={this.state.imgCaption}/>
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

  constructor(props) {
    super(props);
    this.addImage = this.addImage.bind(this);
  }
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
