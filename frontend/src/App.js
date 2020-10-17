import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  constructor(props) {
    super(props)

  this.state = {
    quotes: [],
    author: ''
  }
}

handleChange(e) {
  this.setState ({
    input: e.target.value,
    quotes: this.state.quotes
  })
}  

submitQuote() {
  this.setState ({
    quotes: [...this.state.quotes, this.state.input],
    author: ''
  })
}


  render() {
    return (
      <div className="App" id="quote-box">
        <h1 id="text">Education is the only equalizer</h1>
        <p id="author">Nelson Mandela</p>
        <input 
    onChange={this.handleChange.bind(this)} value={this.state.input}
  />
        <button id="new-quote" onClick={this.submitQuote.bind(this)}><a>New Quote</a></button>
      </div>
    );
  }
}

export default App;
