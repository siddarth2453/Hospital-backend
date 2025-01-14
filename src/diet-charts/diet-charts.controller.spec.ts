import { Test, TestingModule } from '@nestjs/testing';
import { DietChartsController } from './diet-charts.controller';

describe('DietChartsController', () => {
  let controller: DietChartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DietChartsController],
    }).compile();

    controller = module.get<DietChartsController>(DietChartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
