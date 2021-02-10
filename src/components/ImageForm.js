import React, { Component } from 'react';

class ImageForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        images: [],
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
        <label htmlFor="imgUrl">URL</label>
        <input type="text" id="imgUrl" name="imgUrl" value={this.state.imgUrl} onChange={this.handleInput} required/>
        <label htmlFor="imgCaption">Caption</label>
        <input type="text" id="imgCaption" name="imgCaption" value={this.state.imgCaption} onChange={this.handleInput} required/>
        <button className="btn">Add Image</button>
      </form>)
    }
  }

export default ImageForm;