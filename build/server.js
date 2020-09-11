"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const cookieParser = require("cookie-Parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const apiV1_1 = require("./router/apiV1");
const main_1 = require("./config/main");
//iniciar express
const app = express();
//iniciar mongoose
mongoose.connect(main_1.default.db);
//Middleware express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
//Router
apiV1_1.default(app);
//Iniciar el servidor
let server;
if (process.env.NODE_ENV !== main_1.default.test_env) {
    server = app.listen(main_1.default.port, () => {
        console.log(`sever listening on port ${main_1.default.port}`);
    });
}
else {
    server = app.listen(main_1.default.test_port, () => {
        console.log(`server listening on port ${main_1.default.test_port}`);
    });
}
exports.default = server;
//# sourceMappingURL=server.js.map