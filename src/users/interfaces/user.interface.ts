import { ApiProperty } from '@nestjs/swagger';
import { CognitoUser } from 'amazon-cognito-identity-js';
export class User extends CognitoUser {
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @ApiProperty({ type: String, description: 'phone' })
  phone: string;
}
