import Post from "../models/post.js";

/* ================= CREATE POST SERVICE ================= */
export const createPostService = async (postData) => {
    return await Post.create(postData);
};

/* ================= GET ALL POSTS SERVICE ================= */
export const getAllPostsService = async () => {
    // Populating user details (assuming 'name' and 'email' are fields you want)
    // Adjust fields as necessary. If you want all fields, just .populate('user')
    return await Post.find().populate('user', 'name email');
};

/* ================= GET POST BY ID SERVICE ================= */
export const getPostByIdService = async (id) => {
    const post = await Post.findById(id).populate('user', 'name email');
    if (!post) throw new Error("Post not found");
    return post;
};
