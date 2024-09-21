import express from 'express';
import {getPost, getPosts, CreatePost, updatePost, deletePost} from '../controllers/newController.js'
const router = express.Router();





router.get('/', getPost);

router.get('/:id',  getPosts);

// Post request
router.post('/', CreatePost);


// Update Post
router.put('/:id', updatePost);


// Delete Post

router.delete('/:id', deletePost);  


export default router;