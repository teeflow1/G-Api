import express from 'express';
import {getPost, getPosts, createPost, updatePost, deletePost} from '../controllers/newController.js'
const router = express.Router();





router.get('/', getPost);

router.get('/:id',  getPosts);

// Post request
router.post('/', createPost);


// Update Post
router.put('/:id', updatePost);


// Delete Post

router.delete('/:id', deletePost);  


export default router;