import React from 'react';
import Photo from './Photo';
//import comments
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // we need the index of the post so that our like buttons work
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[i];
    console.log(post);
    // we the the post itself in order to pass it to the photo
    
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments />
      </div>
    )
  }
});

export default Single;