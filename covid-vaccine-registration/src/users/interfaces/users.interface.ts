import { Document } from 'mongoose';

export interface Users extends Document {
    first_name: String,
    last_name: String,
    age: Number,
    address: String,
    mobile: String
}