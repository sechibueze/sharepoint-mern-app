const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../../middlewares/checkAuth')
const { 
  createPost, 
  getAllPosts, 
  getPostById,
  deletePostById,
  likePost,
  unlikePost,
  addComment,
  deleteComment
} = require('../../controllers/postControllers');
const router = express.Router();
/***
 * @route POST 201 /api/posts
 * @description Create new post
 * @access private
 */
router.post('/', checkAuth,[
  check('content', 'Post content is required').not().isEmpty()
],  createPost);

/***
 * @route GET 200 /api/posts
 * @description Get all posts
 * @access private
 */
router.get('/', checkAuth, getAllPosts);

/***
 * @route GET 200 /api/posts/:id
 * @description Get post by post ID
 * @access private
 */
router.get('/:id', checkAuth, getPostById);

/***
 * @route DELETE 200 /api/posts/:id
 * @description DELETE Post by post ID
 * @access private
 */
router.delete('/:id', checkAuth, deletePostById);

/***
 * @route PUT 200 /api/posts/like/:id
 * @description Liket a Post 
 * @access private
 */
router.put('/like/:id', checkAuth, likePost);

/***
 * @route PUT 200 /api/posts/unlike/:id
 * @description Unlike a Post 
 * @access private
 */
router.put('/unlike/:id', checkAuth, unlikePost);

/***
 * @route POST 201 /api/posts/comments/:id
 * @description Comment on  a Post 
 * @access private
 */
router.post('/comments/:post_id', 
checkAuth, [ 
  check('comment', 'Comment field is required').not().isEmpty()]
  , addComment);


/***
 * @route PUT 200 /api/posts:/post_id/comments/:comment_id
 * @description DELETE/REMOVE Comment on  a Post 
 * @access private
 */
router.put('/:post_id/comments/:comment_id', checkAuth, deleteComment);

module.exports = router;