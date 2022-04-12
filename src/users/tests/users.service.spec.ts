import { Test, TestingModule } from '@nestjs/testing';

import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersRepository } from '../users-repository';
import { UsersService } from '../users.service';

jest.mock('../users-repository.ts');

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersRepository],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
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

    service.createUser(user);

    expect(repository.createUser).toHaveBeenCalled();
  });
});
