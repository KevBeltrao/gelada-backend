import { BadRequestException } from '@nestjs/common';
import { CreateUserPipe } from './create-user.pipe';

describe('CreateUserPipe', () => {
  let transformer;

  beforeEach(() => {
    transformer = new CreateUserPipe();
  });

  it('should be defined', () => {
    expect(new CreateUserPipe()).toBeDefined();
  });

  it('should throw error if no body', () => {
    const response = () => transformer.transform({}, {});
    expect(response).toThrow(BadRequestException);
  });

  it('should convert to a valid phone', () => {
    const newUserBase = {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: 'Test!234',
    };

    const newUserRequest = {
      ...newUserBase,
      phone: '55 (81) 91234-1234',
    };

    const newUser = {
      ...newUserBase,
      phone: '+5581912341234',
    };

    const parsedUser = transformer.transform(newUserRequest, {});

    expect(parsedUser).toEqual(newUser);
  });
});
