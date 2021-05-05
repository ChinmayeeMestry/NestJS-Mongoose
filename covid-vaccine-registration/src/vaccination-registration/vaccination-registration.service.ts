import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import  axios from 'axios';
import { VaccinationRegistration } from './interfaces/vaccination_registration.interface';
import { CreateVaccinationRegistrationDTO } from './dto/vaccination_registration.dto';

@Injectable()
export class VaccinationRegistrationService {
    constructor(@InjectModel(`VaccinationRegistration`) private readonly vaccinationRegistrationModel: Model<VaccinationRegistration>){}
     
    async getVaccinationRegistration() : Promise<VaccinationRegistration[]> {
         try {
            const vaccinationRegistration =  await this.vaccinationRegistrationModel.find().populate(`user_id`).populate('hospital_id').exec();
            return vaccinationRegistration;
         }
         catch(e) {
             return e;
         }
     }

     async getVaccinationRegistrationById(id: String): Promise<VaccinationRegistration> {
        try {
            // const hospital = await this.hospitalModel.find({_id: id}).exec();       // using find(query) method
            // const hospital = await this.hospitalModel.findById(id).exec();             // using findById(id) method
            const vaccinationRegistration = await this.vaccinationRegistrationModel.findOne({_id: id}).populate(`user_id`).populate('hospital_id').exec();
            return vaccinationRegistration;
         }
         catch(e) {
             return e;
         }        
     }

    //  This approach will generate ID for each object inside array
     async createVaccinationRegistration(createvaccinationRegistrationModelDTO: CreateVaccinationRegistrationDTO): Promise<any> {
        try {
            const getHospitalSeats = await axios.get(`http://localhost:3000/hospital/${createvaccinationRegistrationModelDTO.hospital_id}`);
            const vaccinationRegistration =  await new this.vaccinationRegistrationModel(createvaccinationRegistrationModelDTO).save();
            let updateSeats : Number = 0
            let updateSeatObj : Object; 
            getHospitalSeats.data.availability.map((data : any, index: any) =>{
                if(data.date === createvaccinationRegistrationModelDTO.date_for_vaccination){
                    updateSeats = data.seats - 1;
                    updateSeatObj = {
                        date : data.date,
                        seats : updateSeats
                    };
                    getHospitalSeats.data.availability.splice(index, 1, updateSeatObj);                  
                } 
            })
            await axios.put(`http://localhost:3000/hospital/${createvaccinationRegistrationModelDTO.hospital_id}`, { 
                availability: getHospitalSeats.data.availability 
            });
            return vaccinationRegistration;
         }
         catch(e) {
             return e;
         }         
     }
    
     async updateVaccinationRegistrationById(id: String,createvaccinationRegistrationModelDTO: CreateVaccinationRegistrationDTO): Promise<VaccinationRegistration> {
        try {
            const vaccinationRegistration =  await this.vaccinationRegistrationModel.findOneAndUpdate({_id: id}, createvaccinationRegistrationModelDTO, {new: true}).exec();
            return vaccinationRegistration;
         }
         catch(e) {
             return e;
         }         
     }
     
     async deleteVaccinationRegistrationById(id: String) {
        try {
            const vaccinationRegistration =  await this.vaccinationRegistrationModel.findByIdAndRemove(id).exec();
            if(vaccinationRegistration){
                let response = {
                  result  : vaccinationRegistration,
                  message : `Vaccination Registration Deleted Successfully`
                }
                return response;
              }
         }
         catch(e) {
             return e;
         }         
     }
}
