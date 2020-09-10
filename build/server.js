"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-Parser");
var cookieParser = require("cookie-Parser");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var apiV1_1 = require("./router/apiV1");
var main_1 = require("./config/main");
//iniciar express
var app = express();
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
var server;
if (process.env.NODE_ENV !== main_1.default.test_env) {
    server = app.listen(main_1.default.port, function () {
        console.log("sever listening on port " + main_1.default.port);
    });
}
else {
    server = app.listen(main_1.default.test_port, function () {
        console.log("server listening on port " + main_1.default.test_port);
    });
}
exports.default = server;
//# sourceMappingURL=server.js.map