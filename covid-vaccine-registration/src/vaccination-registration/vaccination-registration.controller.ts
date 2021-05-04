import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VaccinationRegistrationService } from './vaccination-registration.service';
import { VaccinationRegistration } from './interfaces/vaccination_registration.interface';
import { CreateVaccinationRegistrationDTO } from './dto/vaccination_registration.dto';

@Controller('vaccination-registration')
export class VaccinationRegistrationController {

    constructor(private vaccinationRegistrationService : VaccinationRegistrationService) {
        console.log("vaccination-registration Details")
    }

    @Get()
    async getVaccinationRegistration(): Promise<VaccinationRegistration[]> {
        try{
            const vaccinationRegistration = await this.vaccinationRegistrationService.getVaccinationRegistration();
            return vaccinationRegistration;
          }
          catch(e) {
            return e;
          }
    }
    @Get(`:id`)
    async getVaccinationRegistrationById(@Param(`id`) id: String): Promise<VaccinationRegistration> {
        try{
            const vaccinationRegistration = await this.vaccinationRegistrationService.getVaccinationRegistrationById(id);
            return vaccinationRegistration;
          }
          catch(e) {
            return e;
          }
    }
    @Post()
    async createVaccinationRegistration(@Body() createVaccinationRegistrationDTO: CreateVaccinationRegistrationDTO): Promise<VaccinationRegistration> {
        try{
            const vaccinationRegistration = await this.vaccinationRegistrationService.createVaccinationRegistration(createVaccinationRegistrationDTO);
            return vaccinationRegistration;
          }
          catch(e) {
            return e;
          }
    }
    @Put(`:id`)
    async updateVaccinationRegistrationById(@Param(`id`) id: String, @Body() createVaccinationRegistrationDTO: CreateVaccinationRegistrationDTO): Promise<VaccinationRegistration> {
        try{
            const vaccinationRegistration = await this.vaccinationRegistrationService.updateVaccinationRegistrationById(id, createVaccinationRegistrationDTO);
            return vaccinationRegistration;
          }
          catch(e) {
            return e;
          }
    }
    @Delete(`:id`)
    async deleteVaccinationRegistrationById(@Param(`id`) id : String): Promise<VaccinationRegistration> {
        try{
            const vaccinationRegistration = await this.vaccinationRegistrationService.deleteVaccinationRegistrationById(id);
            return vaccinationRegistration;
          }
          catch(e) {
            return e;
          }
    }
}
