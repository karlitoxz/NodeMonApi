import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-Parser';
import * as cookieParser from 'cookie-Parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

import router from './router/apiV1';
import config from './config/main';

//iniciar express
    const app = express();
//iniciar mongoose
    mongoose.connect(config.db);
//Middleware express
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json);

    app.use(cookieParser());
    app.use(logger('dev'));
    app.use(helmet());
    app.use(cors());
//Router
    router(app);
//Iniciar el servidor
    let server;
    if(process.env.NODE_ENV !== config.test_env){
        server = app.listen(config.port, () => {
            console.log(`sever listening on port ${config.port}`);
        }); 
    } else {
        server = app.listen(config.test_port, () => {
            console.log(`server listening on port ${config.test_port}`)
        });
    }
    export default server;
