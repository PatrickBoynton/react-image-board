import './App.css';
import React, { Component } from 'react';


class ImageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: "",
      imgCaption: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addImage(this.state);
    this.setState({imgUrl: "", imgCaption: ""});
    console.log(this.state);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" id="imgUrl" name="imgUrl" value={this.state.imgUrl} onChange={this.handleInput}/>
      <input type="text" id="imgCaption" name="imgCaption" value={this.state.imgCaption} onChange={this.handleInput}/>
      <button className="btn">Add Image</button>
    </form>)
  }
}


function ImageList(props) {
  const images = props.images?.map((image, index) => (
    <li key={index}>
      <img src={image.imgUrl} alt="There is no image!"/>
      {/* <img src={image.imgUrl} alt="Some random images"/> */}
      <p>{image.imgCaption}</p>
    </li>
  ))
  return (
    <ul>
      {images}
    </ul>
  )
}

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
