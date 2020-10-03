//will need react and redux on create-react-app but just writing up
//sectional code

//store.subscribe()

const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch(action.type) {
        case ADD: 
        return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);
let count = 0;

const addOne = store.suscribe(() => (count += 1))

store.dispatch({type: ADD});
console.log(count);

store.dispatch({type: ADD})
console.log(count);