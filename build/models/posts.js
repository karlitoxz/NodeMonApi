"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PostShema = new Schema({
    //Definicion de modelo
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('Post', PostShema);
//# sourceMappingURL=posts.js.map