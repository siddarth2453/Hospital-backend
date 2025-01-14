import { Test, TestingModule } from '@nestjs/testing';
import { PantryStaffService } from './pantry-staff.service';

describe('PantryStaffService', () => {
  let service: PantryStaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PantryStaffService],
    }).compile();

    service = module.get<PantryStaffService>(PantryStaffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
