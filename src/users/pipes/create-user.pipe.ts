import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

import { CreateUserDto } from '../dtos/create-user.dto';

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/;

@Injectable()
export class CreateUserPipe
  implements PipeTransform<CreateUserDto, CreateUserDto>
{
  transform(value: CreateUserDto): CreateUserDto {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().min(8).max(20),
      password: Joi.string().regex(PASSWORD_REGEX).required(),
    });

    const { error } = schema.validate(value);

    if (error) {
      throw new BadRequestException('Validation failed');
    }

    return {
      ...value,
      phone: value.phone.replace(/\D/g, ''),
    };
  }
}
