//reducer takes in two things: 1. action (information about what happened) 2. takes in a copy of currentState
//every reducer runs every time there is an action whether something actually changes is state is up to you 

function posts(state = [], action) {
  console.log("the post will change");
  console.log(state,action);
  return state;
}

export default posts;