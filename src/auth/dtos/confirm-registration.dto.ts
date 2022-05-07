import { ApiProperty } from '@nestjs/swagger';

export class ConfirmRegistrationDto {
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @ApiProperty({ type: String, description: 'code' })
  code: string;
}
