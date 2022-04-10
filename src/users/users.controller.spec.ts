import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

jest.mock('./users.service');

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service', () => {
    const user: CreateUserDto = {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '81912341234',
      password: 'Test!234',
    };

    controller.create(user);
    expect(service.createUser).toHaveBeenCalled();
  });
});
