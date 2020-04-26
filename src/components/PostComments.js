import React, { Fragment } from 'react';
import PostComment from './PostComment';
const PostComments = ({ comments, postId }) => {
  
  return (
    <Fragment>
      <div className="post-comments">
        {comments.map(comment => <PostComment key={`post-comment-id-${comment._id}`} renderComment={ comment } postId={postId} /> )}
      </div>
    </Fragment>
  );
}
 
export default PostComments;