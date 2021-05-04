import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const VaccinationRegistraionSchema = new Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: `Users`,
        required: true,
    },
    hospital_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: `Hospital`,
        required: true,
    },
    date_for_vaccination : {
        type: String,
        required: true,
    }
})