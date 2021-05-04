import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const HospitalSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    address: {
        type: String,
        required : true
    },
    // This approach will generate ID for each object inside array
    availability: [{                        
        date: {
            type : String,
            required: true
        },
        seats : {
            type: Number,
            required: true
        }
    }]

    // This approach will not generate ID for each object also when there are more key value pairs
    // availability: [{
    //     type: Map,
    //     of: String,
    //     required: true
    // }]
})