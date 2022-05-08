import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AwsCognitoConfig } from './aws-cognito.config';
import { AwsCognitoService } from './aws-cognito.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [AwsCognitoService, AwsCognitoConfig],
  exports: [AwsCognitoService, AwsCognitoConfig],
})
export class AwsModule {}
