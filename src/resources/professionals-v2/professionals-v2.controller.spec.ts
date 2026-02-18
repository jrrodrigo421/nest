import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalsV2Controller } from './professionals-v2.controller';
import { ProfessionalsV2Service } from './professionals-v2.service';

describe('ProfessionalsV2Controller', () => {
  let controller: ProfessionalsV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessionalsV2Controller],
      providers: [ProfessionalsV2Service],
    }).compile();

    controller = module.get<ProfessionalsV2Controller>(ProfessionalsV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
