import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hospital } from './interfaces/hospital.interface';
import { CreateHospitalDTO } from './dto/hospital.dto';

@Injectable()
export class HospitalService {
    constructor(@InjectModel(`Hospital`) private readonly hospitalModel: Model<Hospital>){}
     async getHospital() : Promise<Hospital[]> {
         try {
            const hospital =  await this.hospitalModel.find().exec();
            return hospital;
         }
         catch(e) {
             return e;
         }
     }

     async getHospitalById(id: String): Promise<Hospital> {
        try {
            // const hospital = await this.hospitalModel.find({_id: id}).exec();       // using find(query) method
            // const hospital = await this.hospitalModel.findById(id).exec();             // using findById(id) method
            const hospital = await this.hospitalModel.findOne({_id: id}).exec();
            return hospital;
         }
         catch(e) {
             return e;
         }        
     }

    //  This approach will generate ID for each object inside array
     async createHosiptal(createHospitalDTO: CreateHospitalDTO): Promise<Hospital> {
        try {
            const hospital =  await new this.hospitalModel(createHospitalDTO).save();
            return hospital;
         }
         catch(e) {
             return e;
         }         
     }
    
    //  Using diff approach when there are more key value pairs
    // async createHosiptal(createHospitalDTO: CreateHospitalDTO): Promise<Hospital> {
    //     try {
    //         const availability = {
    //             "date" : createHospitalDTO.availability[0].date,
    //             "seats": createHospitalDTO.availability[0].seats,
    //         }
    //         createHospitalDTO.availability[0] = availability;
    //         const hospital =  await new this.hospitalModel(createHospitalDTO).save();
    //         return hospital;
    //      }
    //      catch(e) {
    //          return e;
    //      }         
    //  }


     async updateHospitalById(id: String,createHospitalDTO: CreateHospitalDTO): Promise<any> {
        try {
            const hospital =  await this.hospitalModel.findOneAndUpdate({_id: id}, createHospitalDTO, {new: true}).exec();
            return hospital;
         }
         catch(e) {
             return e;
         }         
     }
     
     async deleteHospitalById(id: String) {
        try {
            const hospital =  await this.hospitalModel.findByIdAndRemove(id).exec();
            if(hospital){
                let response = {
                  result  : hospital,
                  message : `Hospital Deleted Successfully`
                }
                return response;
              }
         }
         catch(e) {
             return e;
         }         
     }
}
