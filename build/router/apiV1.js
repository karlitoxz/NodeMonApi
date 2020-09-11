"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const postController_1 = require("../controllers/postController");
exports.default = (app) => {
    const apiRoutes = express.Router();
    const postRoutes = express.Router();
    /**
     * POST ROUTES
     */
    apiRoutes.use('/posts', postRoutes);
    postRoutes.get('/', postController_1.getAllPosts);
    postRoutes.get('/:id', postController_1.getPostById);
    postRoutes.post('/', postController_1.createPost);
    postRoutes.put('/:id', postController_1.updatePost);
    postRoutes.delete('/:id', postController_1.deletePost);
    app.use('/api', apiRoutes);
};
//# sourceMappingURL=apiV1.js.map