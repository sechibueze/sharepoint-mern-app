const { validationResult } = require('express-validator');
const User = require('../models/User');
const Post = require('../models/Post');


/**** CREATE post  */
const createPost = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      errors: errors.array().map(e => e.msg)
    });
  }

  // Passed validations
  const { content } = req.body;
  const currentUserId = req.currentUserId;
  User.findOne({ _id: currentUserId}).select('-password')
    .then(user => {
      
      let newPost = new Post({
        user: currentUserId,
        name: user.name,
        avatar: user.avatar,
        content
      });

      newPost.save(err => {
        if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to save new Post'] });

        // New Post saved
        return res.status(201).json({
          status: true,
          message: 'New Post created',
          data: newPost
        });
      })
    })
    .catch(err => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to find user for post'] });
    });
  
}

/**** Get All Posts */
const getAllPosts = (req, res) => {
  // Already authenticated with token
  Post.find()
    .then(posts => {
      if (!posts) return res.status(401).json({ status: false, errors: ['Internal Server Error:: No Post is available'] });

      // Posts exists at least []
      return res.status(200).json({
        status: true,
        message: 'All posts',
        data: posts
      });
    })
    .catch(err => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get all posts'] });
    });
}

/**** Get Post by Post Id */
const getPostById = (req, res) => {
  // Already authenticated with token
  const filter = { _id: req.params.id};
  Post.findOne(filter)
    .then(post => {
      if (!post) return res.status(401).json({ status: false, errors: ['Internal Server Error:: No Post is available'] });

      // Posts exists at least []
      return res.status(200).json({
        status: true,
        message: 'Found Post',
        data: post
      });
    })
    .catch(err => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to get all posts'] });
    });
}

/*** User can delete his post */
const deletePostById = (req, res) => {
  const currentUserId = req.currentUserId;
  const postId = req.params.id;

  // Passed Post ID format checks
  Post.findOne({ _id: postId }).then(async post => {
    if (!post) return res.status(401).json({ status: false, errors: ['Internal Server Error:: No Post is available'] });

    // Check that post is deleted by owner
    if (post.user.toString() !== currentUserId) {
      
      return res.status(401).json({
        status: false,
        errors: ['Unauthorized: You can only delete your posts']
      });
    }
    // Found post, by the owner, DELETE it
    await post.remove();

    // Posts deleted
    return res.status(200).json({
      status: true,
      message: 'Post deleted'
    });
  })
    .then()
    .catch(err => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to delete post'] });

    });
}


/****** Like a Post */
const likePost = (req, res) => {
  // User has been authenticated
  const currentUserId = req.currentUserId;
  const postId = req.params.id;

  Post.findOne({_id: postId})
    .then(post => {
      // User can only like post once
      const hasLikedPost = post.likes.some(likeId => {
       
        return likeId._id.toString() === currentUserId;
      });
      console.log('User has liked post', hasLikedPost)
      if (hasLikedPost) {
        return res.status(400).json({
          status: false,
          errors: ['You can only like a post once']
        });
      }

      // User has not liked post before
      // Now like it
      post.likes.unshift(currentUserId);
      // Save the post to update changes
      post.save(err => {
        if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to update liked post'] });

        // Post saved successfully
        return res.status(200).json({
          status: true,
          message: 'Your like to post has been updated successfully',
          data: post
        });
      });

    })
    .catch(err => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to find post to like'] });
    });
}
/****** Unlike a Post if you have liked before*/
const unlikePost = (req, res) => {
  // User has been authenticated
  const currentUserId = req.currentUserId;
  const postId = req.params.id;

  Post.findOne({ _id: postId })
    .then(post => {
      // User can only unlike post he had liked
      // Confirm that user had liked the post
      const hasLikedPost = post.likes.some(likeId => {

        return likeId._id.toString() === currentUserId;
      });
      console.log('User has liked post', hasLikedPost)
      if (!hasLikedPost) {
        return res.status(400).json({
          status: false,
          errors: ['You can only unlike a post that you liked']
        });
      }

      // User has  liked post before
      // Now unlike it
      post.likes = post.likes.filter(likeId => likeId._id.toString() !== currentUserId);
      console.log('Post likes', post.likes)
      // Save the post to update changes
      post.save(err => {
        if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to update liked post'] });

        // Post saved successfully
        return res.status(200).json({
          status: true,
          message: 'Your unlike to post has been updated successfully',
          data: post
        });
      });

    })
    .catch(err => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to find post to like'] });
    });
}
/****** Comment on a post */
const addComment = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      errors: errors.array().map(errObj => errObj.msg)
    });
  }

  // Request passed all validations
  const currentUserId = req.currentUserId;
  const postId = req.params.post_id;
  const { comment } = req.body;
  // Get Users avartar
  let newComment = { user: currentUserId, comment };
  User.findOne({ _id: currentUserId }).select('-password')
    .then(user => {
     
      newComment.avatar = user.avatar;
      Post.findOne({_id: postId})
        .then(post => {
          if (!post) return res.status(500).json({ status: false, errors: ['Internal Server Error:: No Post for comment'] });

          // Post found, Oya comment
          post.comments.unshift(newComment);

          // Save to update the post
          post.save(err => {
            if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to update post after comment'] });

            // Post saved
            return res.status(201).json({
              status: true,
              message: 'Comment added successfuly',
              data: post
            });
          });

        })
        .catch(err => {
          if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to find post for comment'] });

        });
      
    })
    .catch(err => {
      if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to find user for commenting'] });
    });

}


/****** Delete your Comment on a post */
const deleteComment = (req, res) => {
    const postId = req.params.post_id;
    const commentId = req.params.comment_id;
    const currentUserId = req.currentUserId;
    const filter = { _id: postId, user: currentUserId};
    Post.findOne(filter)
      .then(post => {
        if (!post) return res.status(500).json({ status: false, errors: ['Internal Server Error:: No Post for comment deleting'] });

        post.comments = post.comments.filter(comment => comment._id.toString() !== commentId);

        // Save to update the post
        post.save(err => {
          if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to update post after comment delete'] });

          // Post saved
          return res.status(200).json({
            status: true,
            message: 'Comment deleted successfuly',
            data: post
          });
        });

      })
      .catch(err => {
        if (err) return res.status(500).json({ status: false, errors: ['Internal Server Error:: failed to find post for comment removal'] });
      });
}


module.exports = { 
  createPost, 
  getAllPosts, 
  getPostById, 
  deletePostById,
  likePost,
  unlikePost,
  addComment,
  deleteComment
};