//requires other redux code this is just playground for main parts

const addOne = store.subscribe(() => (count += 1))

//dispatch functions
store.dispatch({type: ADD})
console.log(count)