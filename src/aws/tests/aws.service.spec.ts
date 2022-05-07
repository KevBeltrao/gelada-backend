import { Test, TestingModule } from '@nestjs/testing';
import { AwsCognitoService } from '../aws-cognito.service';

describe('AwsCognitoService', () => {
  let service: AwsCognitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwsCognitoService],
    }).compile();

    service = module.get<AwsCognitoService>(AwsCognitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
