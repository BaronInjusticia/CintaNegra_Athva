const Post = require("./models/Posts");

const createPost = (data) => {
    return Post.create(data);
}

const getAllPosts = () =>{
    return Post.find({is_active:true})
    .populate("author")
}

const getPostByTag = () =>{
    return Post.find({tag:{$in:tag}, is_active: true})
    .populate("author")
}

const getPostByCategory = () =>{
    return Post.find({category:category, is_active: true})
    .populate("author")
}




module.exports = {
    createPost,
    getAllPosts,
    getPostByCategory,
    getPostByTag,
}