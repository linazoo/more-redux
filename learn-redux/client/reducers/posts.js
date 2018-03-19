//reducer takes in two things: 1. action (information about what happened) 2. takes in a copy of currentState
function posts(state = [], action) {
  console.log(state,action);
  return state;
}

export default posts;