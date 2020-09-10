"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
var posts_1 = require("../models/posts");
//Traer todos los post
function getAllPosts(req, res, next) {
    posts_1.default.find(function (err, posts) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ posts: posts });
    });
}
exports.getAllPosts = getAllPosts;
//Traer un solo post por su ID
function getPostById(req, res, next) {
    var id = req.params.id;
    posts_1.default.findById(id, function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ post: post });
    });
}
exports.getPostById = getPostById;
//Crear post
function createPost(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    console.log(req.body);
    if (!title) {
        res.status(422).json({ err: 'Title is required.' });
        return;
    }
    if (!content) {
        res.status(422).json({ err: 'Content is required.' });
        return;
    }
    var post = new posts_1.default({
        title: title,
        content: content
    });
    post.save(function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ post: post });
    });
}
exports.createPost = createPost;
//Actualizar post por ID
function updatePost(req, res, next) {
    var id = req.params.id;
    posts_1.default.findByIdAndUpdate(id, req.body, function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ post: post });
    });
}
exports.updatePost = updatePost;
//Borrar post por ID
function deletePost(req, res, next) {
    var id = req.params.id;
    posts_1.default.findByIdAndRemove(id, function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ post: post });
    });
}
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map