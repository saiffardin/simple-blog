const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const userController = require('../user/user.controller');
// const postMiddleware = require('../posts/posts.middleware');

router.get('/', function (req, res) {
    return res.json({message: 'App is running'});
});

router.post('/posts', userController.isAuthenticated, postController.createPosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', userController.isAuthenticated, postController.getPostById);
router.put('/posts/:id', userController.isAuthenticated, postController.updatePostById);
router.delete('/posts/:id', userController.isAuthenticated, postController.deletePostById);


module.exports = router;
