import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalsV2Service } from './professionals-v2.service';

describe('ProfessionalsV2Service', () => {
  let service: ProfessionalsV2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessionalsV2Service],
    }).compile();

    service = module.get<ProfessionalsV2Service>(ProfessionalsV2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
