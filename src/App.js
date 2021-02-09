import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    this.addImages() = this.addImages.bind(this);
  }

  componentDidMount() {
    const images = [
      {
        imgUrl: "This is a test",
        imgCaption: "This is a caption!",
      }
    ]
    this.setState({images});
  }

  addImage(image) {
    const images = [...this.state.images];
    images.push(image);

    this.setState({images});
  }

  render() {
    return (
      <React.Fragment>
        <ImageForm addImage={this.addImage}/>
        <ImageList todos={this.state?.images}/>
      </React.Fragment>
    )
  }
}

