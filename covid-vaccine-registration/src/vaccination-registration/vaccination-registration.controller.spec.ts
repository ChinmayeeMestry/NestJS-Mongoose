import { Test, TestingModule } from '@nestjs/testing';
import { VaccinationRegistrationController } from './vaccination-registration.controller';

describe('VaccinationRegistrationController', () => {
  let controller: VaccinationRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccinationRegistrationController],
    }).compile();

    controller = module.get<VaccinationRegistrationController>(VaccinationRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
