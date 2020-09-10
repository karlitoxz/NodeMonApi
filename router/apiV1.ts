import *  as express from 'express';


export default () => {

    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    //rutas post
        apiRoutes.use('/posts',postRoutes)

}