"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.default = (function (app) {
    var apiRoutes = express.Router();
    var postRoutes = express.Router();
    /**
     * POST ROUTES
     
    app.get('/test', (req,res)=>{
        res.end('Hello world!');
    });
    
    apiRoutes.use('/posts', postRoutes);
    
    postRoutes.get('/', getAllPosts);

    postRoutes.get('/:id', getPostById);

    postRoutes.post('/', createPost);

    postRoutes.put('/:id', updatePost);

    postRoutes.delete('/:id', deletePost);

    //app.use('/api', apiRoutes);*/
    apiRoutes.get('/', function (req, res) {
        res.end('Hello world!');
    });
    //Ruta cuando no hay archivo
    apiRoutes.get('*', function (req, res) {
        res.end('Archivo no encontrado - *');
    });
    app.use('/', apiRoutes);
});
//# sourceMappingURL=apiV1.js.map