"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    //Puerto
    port: process.env.PORT || 3000,
    //Database
    db: 'mongodb://localhost/dbnodemonapi',
    //test enviroment
    test_env: 'test',
    test_db: 'mongodb://localhost/dbnodemonapi-test',
    test_port: 3001
};
exports.default = config;
//# sourceMappingURL=main.js.map