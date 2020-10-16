import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  constructor(props) {
    super(props)

  this.state = {
    Quotes: [],
    author: ''
  }
}


  render() {
    return (
      <div className="App" id="quote-box">
        <h1 id="text">Education is the only equalizer</h1>
        <p id="author">Nelson Mandela</p>
        <a id="new-quote">New Quote</a>
      </div>
    );
  }
}

export default App;
