const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message]

            default:
                return state;
    }
}

const store = Redux.createStore(messageReducer)
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        
        this.state= {
            input: ''
            // messages: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
       }

       handleChange(e) {
           this.setState({
               input: e.target.value
           })
       }

       submitMessage() {
           this.props.submitNewMessage(this.state.input)
           this.setState({
               input: ''
           });
       }
    render() {
        return 
        return (
            <div>
              <h2>Type in a new Message:</h2>
              <input
                value={this.state.input}
                onChange={this.handleChange}/><br/>
              <button onClick={this.submitMessage}>Submit</button>
              <ul>
                {this.props.messages.map( (message, idx) => {
                    return (
                       <li key={idx}>{message}</li>
                    )
                  })
                }
              </ul>
            </div>
          );
    }
} 

const mapStateToProps = state => {
    return {
        messages: state
    }
}

const mapDispatchToProps = 
(dispatch) => {
    return {
        submitNewMessage: (newMessage) => {
            dispatch(addMessage(newMessage))
        }
    } 
};

const Provider = ReactRedux.Provider;

const connect = ReactRedux.connect;

const Container = connect(mapDispatchToProps, mapStateToProps) (Presentational)

class AppWrapper extends React.Component {
    // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
    // Change code above this line
  };
