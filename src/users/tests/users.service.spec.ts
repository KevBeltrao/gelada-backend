import { Test, TestingModule } from '@nestjs/testing';

import { AwsCognitoService } from '../../aws/aws-cognito.service';
import { AwsModule } from '../../aws/aws.module';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersRepository } from '../users-repository';
import { UsersService } from '../users.service';

jest.mock('../users-repository.ts');
jest.mock('../../aws/aws-cognito.service.ts');

describe('UsersService', () => {
  let service: UsersService;
  let awsCognitoService: AwsCognitoService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AwsModule],
      providers: [UsersService, UsersRepository],
    }).compile();

    service = module.get<UsersService>(UsersService);
    awsCognitoService = module.get<AwsCognitoService>(AwsCognitoService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call listUsers', () => {
    service.listUsers();

    expect(repository.listUsers).toHaveBeenCalled();
  });

  it('should call registerUser', () => {
    const user: CreateUserDto = {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '81912341234',
      password: 'Test!234',
    };

    service.createUser(user);

    expect(awsCognitoService.registerUser).toHaveBeenCalled();
  });
});
