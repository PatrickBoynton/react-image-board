import './App.css';
import React, { Component } from 'react';
import ImageForm from './components/ImageForm';
import ImageList  from './components/ImageList';


class App extends Component {
  constructor(props) {
    super(props)
    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    const images = [
      {
        imgUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imgCaption: "A lightbulb against a sunset.",
      },
      {
        imgUrl: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        imgCaption: "A chair with a baloon"
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
        <div className="App">
        <ImageForm addImage={this.addImage}/>
        <ImageList images={this.state?.images}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
