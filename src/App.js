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

  componentDidMount() {
    const images = [
      {
        imgUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1493863641943-9b68992a8d07%3Fixid%3DMXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfA%253D%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fperson&tbnid=Hhnr3C4LaZ-zUM&vet=12ahUKEwij2dfZx93uAhUGUFMKHS5FB9IQMygHegUIARCzAQ..i&docid=NkC29UP8iMFKiM&w=1000&h=677&q=people%20unsplash&ved=2ahUKEwij2dfZx93uAhUGUFMKHS5FB9IQMygHegUIARCzAQ",
        imgCaption: "Lots of people!",
      }
    ];
    this.setState({ images })
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
