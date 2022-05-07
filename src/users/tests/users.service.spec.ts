import { Test, TestingModule } from '@nestjs/testing';

import { AwsCognitoService } from '../../aws/aws-cognito.service';
import { CreateUserDto } from '../dtos/create-user.dto';
// import { UsersRepository } from '../users-repository';
import { UsersService } from '../users.service';

jest.mock('../users-repository.ts');
jest.mock('../../aws/aws-cognito.service.ts');

describe('UsersService', () => {
  let service: UsersService;
  // let repository: UsersRepository;
  let awsCognitoService: AwsCognitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AwsCognitoService],
      providers: [UsersService /*, UsersRepository*/],
    }).compile();

    service = module.get<UsersService>(UsersService);
    // repository = module.get<UsersRepository>(UsersRepository);
    awsCognitoService = module.get<AwsCognitoService>(AwsCognitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call createUser', () => {
    const user: CreateUserDto = {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '81912341234',
      password: 'Test!234',
    };

    awsCognitoService.registerUser(user);

    expect(awsCognitoService.registerUser).toHaveBeenCalled();
  });
});
