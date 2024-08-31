import { Test, TestingModule } from '@nestjs/testing';
import { PropertieResolver } from './propertie.resolver';

describe('PropertieResolver', () => {
  let resolver: PropertieResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertieResolver],
    }).compile();

    resolver = module.get<PropertieResolver>(PropertieResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
