import { Test, TestingModule } from '@nestjs/testing';
import { DietChartsService } from './diet-charts.service';

describe('DietChartsService', () => {
  let service: DietChartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietChartsService],
    }).compile();

    service = module.get<DietChartsService>(DietChartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
