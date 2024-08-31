import { Test, TestingModule } from '@nestjs/testing';
import { PropertieService } from './propertie.service';

describe('PropertieService', () => {
  let service: PropertieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertieService],
    }).compile();

    service = module.get<PropertieService>(PropertieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
