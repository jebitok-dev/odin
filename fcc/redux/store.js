//will need react and redux on create-react-app but just writing up
//sectional code

//store.subscribe()

const ADD = 'ADD';

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case ADD: 
        return state + 1;
        default:
            return state;
    }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
}) 
// define the root reducer here

const store = Redux.createStore(rootReducer);

// const store = Redux.createStore(reducer);
// let count = 0;

// const addOne = store.subscribe(() => (count += 1))

// store.dispatch({type: ADD});
// console.log(count);

// store.dispatch({type: ADD})
// console.log(count);