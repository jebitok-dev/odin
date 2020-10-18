import React from 'react';
import logo from './logo.svg';
import './App.css';

class RandomQuotes extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
    error: null,
    isLoaded: false,
    quotes: [],
    author: ''
  }
}

componentDidMount() {
  fetch("https://rapidapi.p.rapidapi.com/")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          quotes: result.quotes
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

handleChange(e) {
  this.setState ({
    author: e.target.value,
    quotes: this.state.quotes
  })
}  

submitQuote() {
  this.setState ({
    quotes: [this.setState.quotes, this.state.author],
    author: ''
  })
}


  render() {
    const { error, isLoaded, quotes, author } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
      return (
        <div className="App" id="quote-box">
          <h1 id="text">Education is the only equalizer</h1>
          <p id="author">Nelson Mandela</p>
          <input 
      onChange={this.handleChange.bind(this)} value={this.state.author}
    />
          <button id="new-quote" onClick={this.submitQuote.bind(this)}><a id="tweet-quote">New Quote</a></button>

        </div>
      );
    }
  // }
}

export default RandomQuotes;
