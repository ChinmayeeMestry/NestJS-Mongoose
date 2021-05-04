import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HospitalSchema } from './schemas/hospital.schema';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: "Hospital",
    schema: HospitalSchema
  }])],
  controllers: [HospitalController],
  providers: [HospitalService]
})
export class HospitalModule {}
