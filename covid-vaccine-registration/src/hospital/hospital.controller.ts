import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { Hospital } from './interfaces/hospital.interface';
import { CreateHospitalDTO } from './dto/hospital.dto';

@Controller('hospital')
export class HospitalController {

    constructor(private hospitalService : HospitalService) {
        console.log("Hospital Details")
    }

    @Get()
    async getHospital(): Promise<Hospital[]> {
        try{
            const user = await this.hospitalService.getHospital();
            return user;
          }
          catch(e) {
            return e;
          }
    }
    @Get(`:id`)
    async getHospitalById(@Param(`id`) id: String): Promise<Hospital> {
        try{
            const hospital = await this.hospitalService.getHospitalById(id);
            return hospital;
          }
          catch(e) {
            return e;
          }
    }
    @Post()
    async createHospital(@Body() createHospitalDTO: CreateHospitalDTO): Promise<Hospital> {
        try{
            const hospital = await this.hospitalService.createHosiptal(createHospitalDTO);
            return hospital;
          }
          catch(e) {
            return e;
          }
    }
    @Put(`:id`)
    async updateHospitalById(@Param(`id`) id: String, @Body() createHospitalDTO: CreateHospitalDTO): Promise<Hospital> {
        try{
            const hospital = await this.hospitalService.updateHospitalById(id, createHospitalDTO);
            return hospital;
          }
          catch(e) {
            return e;
          }
    }
    @Delete(`:id`)
    async deleteHospitalById(@Param(`id`) id : String): Promise<Hospital> {
        try{
            const hospital = await this.hospitalService.deleteHospitalById(id);
            return hospital;
          }
          catch(e) {
            return e;
          }
    }
}
