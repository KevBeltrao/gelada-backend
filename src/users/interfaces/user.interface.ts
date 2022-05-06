import { ApiProperty } from '@nestjs/swagger';

export interface User {
  readonly _id: string;
  readonly email: string;
  name: string;
  phone: string;
}

export class UserSwagger {
  @ApiProperty({ type: String, description: '_id' })
  _id: string;
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @ApiProperty({ type: String, description: 'phone' })
  phone: string;
}
