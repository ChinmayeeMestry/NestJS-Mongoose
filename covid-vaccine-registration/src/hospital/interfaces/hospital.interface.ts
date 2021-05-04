import { Document } from 'mongoose';

export interface Hospital extends Document {
    name: String,
    address: String,
        // This approach will generate ID for each object inside array
    availability: Array<{date: String, seats: Number}>,

    // This approach will not generate ID for each object also when there are more key value pairs
    // availability: Array<Object>,
}