"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const posts_1 = require("../models/posts");
//Traer todos los post
function getAllPosts(req, res, next) {
    posts_1.default.find((err, posts) => {
        if (err) {
            res.status(500).json({ err });
        }
        res.status(200).json({ posts });
    });
}
exports.getAllPosts = getAllPosts;
//Traer un solo post por su ID
function getPostById(req, res, next) {
    const id = req.params.id;
    posts_1.default.findById(id, (err, post) => {
        if (err) {
            res.status(500).json({ err });
        }
        res.status(200).json({ post });
    });
}
exports.getPostById = getPostById;
//Crear post
function createPost(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    console.log(req.body);
    if (!title) {
        res.status(422).json({ err: 'Title is required.' });
        return;
    }
    if (!content) {
        res.status(422).json({ err: 'Content is required.' });
        return;
    }
    const post = new posts_1.default({
        title,
        content
    });
    post.save((err, post) => {
        if (err) {
            res.status(500).json({ err });
        }
        res.status(200).json({ post });
    });
}
exports.createPost = createPost;
//Actualizar post por ID
function updatePost(req, res, next) {
    const id = req.params.id;
    posts_1.default.findByIdAndUpdate(id, req.body, (err, post) => {
        if (err) {
            res.status(500).json({ err });
        }
        res.status(200).json({ post });
    });
}
exports.updatePost = updatePost;
//Borrar post por ID
function deletePost(req, res, next) {
    const id = req.params.id;
    posts_1.default.findByIdAndRemove(id, (err, post) => {
        if (err) {
            res.status(500).json({ err });
        }
        res.status(200).json({ post });
    });
}
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map