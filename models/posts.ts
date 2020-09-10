import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostShema = new Schema({

    //Definicion de modelo
        timestamp:{
            type: Date,
            default: Date.now
        },
        title:{
            type: String,
            default: '',
            required: true
        },
        content:{
            type: String,
            default: '',
            required: true
        }

});

export default mongoose.model('Post',PostShema);