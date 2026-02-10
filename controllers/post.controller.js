import {
    createPostService,
    getAllPostsService,
    getPostByIdService
} from "../services/post.service.js";

export const addPost = async (req, res) => {
    try {
        const newPost = await createPostService(req.body);
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        // If id is provided, get by id, otherwise maybe get all? 
        // The route usually defines this. 
        // Taking a look at routes, it has /:id for getPost.
        // So getPost corresponds in name to getPostById logic.
        const post = await getPostByIdService(id);
        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPostsService();
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
