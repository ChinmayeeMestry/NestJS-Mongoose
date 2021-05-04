import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HospitalModule } from './hospital/hospital.module';
import { VaccinationRegistrationModule } from './vaccination-registration/vaccination-registration.module';
@Module({
  imports: [ UsersModule, MongooseModule.forRoot(`mongodb://localhost/covidVaccineRegistration`), HospitalModule, VaccinationRegistrationModule],
})
export class AppModule {}
