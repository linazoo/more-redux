// ACTION CREATORS: the return is the action but the creator puts it otgether and dispatches it 

//increment a like - fires off the action to increment the amount of likes
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES', 
    index
  }
}
//add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
//remove comment: what post? and what comment i aka id
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
