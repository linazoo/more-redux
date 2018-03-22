//reducer takes in two things: 1. action (information about what happened) 2. takes in a copy of currentState
//every reducer runs every time there is an action whether something actually changes is state is up to you 

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log("Incrementing Likes!");

    const i = action.index;
    
    return [
      ...state.slice(0,i), //before the one we are updating
      {...state[i], likes: state[i].likes + 1 }, //pass it a new object
      ...state.slice(i+1), //after the one we are updating

    ]
    //return the updated state
    default:
      return state;
  }
  return state;
}

export default posts;