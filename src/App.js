import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <input placeholder="Image Url"/>
          <input placeholder="Image Caption"/>
          <button type="submit" className="btn">Add Image</button>
        </form>
      </React.Fragment>
    )
  }
}

export default App;