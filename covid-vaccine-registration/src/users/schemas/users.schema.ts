import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UsersSchema = new Schema({
    first_name: {
        type: String,
        required : true
    },
    last_name: {
        type : String,
        required : true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    aadhar_card: {
        type: String,
        required: true
    }
})
