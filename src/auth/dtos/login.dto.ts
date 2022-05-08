import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @ApiProperty({ type: String, description: 'password' })
  password: string;
}

class ResponsePayload {
  @ApiProperty({ type: String, description: 'email' })
  email: string;
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @ApiProperty({ type: String, description: 'phone' })
  phone_number: string;
}

class IdToken {
  @ApiProperty({ type: String, description: 'jwtToken' })
  jwtToken: string;
  @ApiProperty({ type: ResponsePayload, description: 'payload' })
  payload: ResponsePayload;
}
export class LoginResponseDto {
  @ApiProperty({ type: IdToken })
  idToken: IdToken;
}
