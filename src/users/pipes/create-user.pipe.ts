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
      name: Joi.string().required().label('name'),
      email: Joi.string().email().required().label('email'),
      phone: Joi.string().min(12).max(20).label('phone'),
      password: Joi.string()
        .min(8)
        .regex(PASSWORD_REGEX)
        .required()
        .messages({
          'string.min': 'Must have at least 8 characters',
          'object.regex': 'Must have at least 8 characters',
          'string.pattern.base':
            'Minimum 8 characters, uppercase and lowercase, numbers and special characters',
        })
        .label('password'),
    });

    const { error } = schema.validate(value);

    if (error) {
      throw new BadRequestException('Validation failed');
    }

    const phoneOnlyDigits = value.phone.replace(/\D/g, '');

    return {
      ...value,
      phone: `+${phoneOnlyDigits}`,
    };
  }
}
