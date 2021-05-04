import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccinationRegistrationController } from './vaccination-registration.controller';
import { VaccinationRegistrationService } from './vaccination-registration.service';
import { VaccinationRegistraionSchema } from './schemas/vaccination_registration.schema';


@Module({
  imports: [MongooseModule.forFeature([{
    name: "VaccinationRegistration",
    schema: VaccinationRegistraionSchema,
  }])],
  controllers: [VaccinationRegistrationController],
  providers: [VaccinationRegistrationService]
})
export class VaccinationRegistrationModule {}
