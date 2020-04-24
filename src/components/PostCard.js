import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const PostCard = ({ post }) => {
  const likePost = id => {
    console.log('Post to like id::', id)
    alert(`Post to like :: ${ id.toString() }`)
  }
  const { _id, content, comments, likes } = post;
  return (
    <Fragment>
      
      <div className="post-card py-2">
        {/* <div className="post-creator-image p-1">
          <img src="https://image.com.about-img-369x247.png" 
          alt='post-1234'
           style={{width: '90px', height: '90px', borderRadius: '50%'}} />
        </div> */}
        <div className="post-content p-1">
          {/* <p className="text text-primary">Hello frompost title</p> */}
          <article className="post-content my-1">
            { content }
          </article>
          <div className="post-stats my-1">
            <span onClick={() => likePost(_id)} className="px-1 fa fa-thumbs-up">{likes.length } </span>
            <span className="mx-1 fa fa-thumbs-down"></span>
            <span className="px-1 mx-1  fa fa-comment-o"> {`  ${comments.length}` }</span>
            <Link to={`/posts/${_id}`} className="btn btn-primary post-discussion-btn">Discussion</Link>
          </div>
        </div>
      </div>

    </Fragment>
  );
}
 
export default PostCard;