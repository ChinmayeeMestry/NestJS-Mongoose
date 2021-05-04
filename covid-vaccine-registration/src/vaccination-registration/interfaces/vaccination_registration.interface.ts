import { Document } from 'mongoose';

export interface VaccinationRegistration extends Document {
    user_id: String;
    hospital_id: String;
    date_for_vaccination: String;
}