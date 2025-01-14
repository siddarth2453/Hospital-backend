import { Test, TestingModule } from '@nestjs/testing';
import { PantryStaffController } from './pantry-staff.controller';

describe('PantryStaffController', () => {
  let controller: PantryStaffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PantryStaffController],
    }).compile();

    controller = module.get<PantryStaffController>(PantryStaffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
