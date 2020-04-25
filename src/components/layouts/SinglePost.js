import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '../Alert';
import { getPostByPostId, likePostByPostId, unlikePostByPostId } from '../../actions/postActions';
import PostComments from '../PostComments';
import AddPostComment from '../AddPostComment';
import Spinner from '../Spinner';
const SinglePost = ({ 
  match, getPostByPostId, postById, postLiked, commentAdded, postCommentRemoved,
  likePostByPostId, unlikePostByPostId
 }) => {
  useEffect(() => {
    const postId = match.params.postId;
    getPostByPostId(postId);
  }, [postLiked, commentAdded, postCommentRemoved ]);
  // like post
  const likeThisPost = (id ) => likePostByPostId(id)

  // Unlike post
  const unlikeThisPost = (id) => unlikePostByPostId(id)
  return (
    postById === null ?
     (<Spinner />) :
     (
        <Fragment>
         
          <div className="post-wrapper">
            <div className="post py-2">
              <div className="">
                <img className="post-image" 
                src={postById.avatar} />
                alt={`post-id-${postById._id}`}
              </div>
              <div className="post-content">
                <p className="text text-primary"> {`${postById.name}-rw-title` } </p>
                <Alert />
                <div className="post-stats my-1">
                  <span onClick={() => likeThisPost(postById._id)} className="px-1 fa fa-thumbs-up"> {postById.likes.length} </span>
                  <span onClick={() => unlikeThisPost(postById._id)} className="mx-1 fa fa-thumbs-down"> </span>
                  <span className="mx-1 fa fa-comment-o"> {postById.comments.length } </span>
                 
                  <Link to={`/profiles/${postById.user}`} className="mx-1 fa fa-user-o"> {postById.name}  </Link>
                  <span className="mx-1 fa fa-calendar-o">{postById.date}</span>
                </div>

                <article className="post-content my-1">
                  { postById.content }
                </article> 
                <p className="text text-primary">
                  {postById.comments.length > 0 ? 'Discussions' : ''}
                </p>     
                <PostComments comments={postById.comments} postId={postById._id} />
                <p className="text text-primary">
                  {postById.comments.length < 1 ? 'Be the first to comment' : 'Share your thought with us'}
                </p>
                <AddPostComment postId={postById._id}/>
              </div>
              
            </div>
          </div>
        </Fragment>
     )  
  );
}
 
SinglePost.propTypes = {
  postById: PropTypes.object,
  getPostByPostId: PropTypes.func.isRequired,
  likePostByPostId: PropTypes.func.isRequired,
  unlikePostByPostId: PropTypes.func.isRequired,
  commentAdded: PropTypes.bool,
  postCommentRemoved: PropTypes.bool
};
const mapStateToprops = state => ({
  postById: state.post.postById,
  postLiked: state.post.postLiked,
  commentAdded: state.post.commentAdded,
  postCommentRemoved: state.post.postCommentRemoved
});
export default connect(mapStateToprops, 
  { getPostByPostId, likePostByPostId, unlikePostByPostId })
  (SinglePost);