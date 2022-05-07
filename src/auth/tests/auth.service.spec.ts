import { Test, TestingModule } from '@nestjs/testing';
import { AwsCognitoService } from '../../aws/aws-cognito.service';
import { AwsModule } from '../../aws/aws.module';
import { AuthService } from '../auth.service';
import { ConfirmRegistrationDto } from '../dtos/confirm-registration.dto';
import { LoginDto } from '../dtos/login.dto';

jest.mock('../../aws/aws-cognito.service.ts');

describe('AuthService', () => {
  let service: AuthService;
  let awsCognitoService: AwsCognitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AwsModule],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    awsCognitoService = module.get<AwsCognitoService>(AwsCognitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call login', () => {
    const loginDto: LoginDto = {
      email: 'john.doe@gmail.com',
      password: 'Test!234',
    };

    service.login(loginDto);

    expect(awsCognitoService.login).toBeCalled();
  });

  it('should call login', () => {
    const confirmRegistrationDto: ConfirmRegistrationDto = {
      email: 'john.doe@gmail.com',
      code: '123123',
    };

    service.confirmRegistration(confirmRegistrationDto);

    expect(awsCognitoService.confirmRegistration).toBeCalled();
  });
});
