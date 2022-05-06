import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export interface CreateUserDto {
  readonly email: string;
  readonly name: string;
  readonly phone: string;
  readonly password: string;
}

export class CreateUserDtoSwagger {
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @ApiPropertyOptional({ type: String, description: 'phone' })
  phone: string;
  @ApiProperty({ type: String, description: 'password' })
  password: string;
}
