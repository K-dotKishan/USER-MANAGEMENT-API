import express from 'express';
import {
    getPost,
    addPost,
    getAllPosts
} from '../controllers/post.controller.js';

const router = express.Router();

// Base path in app.js is already "/api/post"

// Final URL: /api/post/addPost
router.post('/addPost', addPost);

// Final URL: /api/post/:id   (e.g., /api/post/64f8...)
router.get('/:id', getPost);
router.get('/', getAllPosts);

export default router;

