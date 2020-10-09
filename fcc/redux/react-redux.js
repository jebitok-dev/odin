class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods 
  handleChange(e) {
    this.setState ({
      input: e.target.value,
      messages: this.state.messges
    })
  }  
  
  submitMessage(e) {
    this.setState ({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
    // alert(" " + this.state.input);
    // e.preventDefault();
  }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
  <input 
    onChange={this.handleChange.bind(this)} value={this.state.input}
  />
  <button 
    onChange={this.submitMessage.bind(this)}
  >Submit</button>
  <ul> 
  {this.state.messages.map((x, i)=>{
      return <li key={i}>{x}</li>
            })}
    // <li key={i}>{x}</li>
    // <li key={i}>{x}</li>
  </ul> 
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  