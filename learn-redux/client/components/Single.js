import React from 'react';
import Photo from './Photo';
//import comments
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // we need the index of the post so that our like buttons work
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    // we the the post itself in order to pass it to the photo
    
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments}/>
      </div>
    )
  }
});

export default Single;