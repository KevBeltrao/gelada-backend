import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { ConfirmRegistrationDto } from '../dtos/confirm-registration.dto';
import { LoginDto } from '../dtos/login.dto';

jest.mock('../auth.service.ts');

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call login', () => {
    const loginDto: LoginDto = {
      email: 'john.doe@gmail.com',
      password: 'Test!234',
    };

    controller.login(loginDto);

    expect(service.login).toBeCalled();
  });

  it('should call confirm-registration', () => {
    const confirmRegistrationDto: ConfirmRegistrationDto = {
      email: 'john.doe@gmail.com',
      code: '123123',
    };

    controller.confirmRegistration(confirmRegistrationDto);

    expect(service.confirmRegistration).toBeCalled();
  });
});
